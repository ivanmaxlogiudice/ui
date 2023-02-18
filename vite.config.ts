import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
    publicDir: resolve(__dirname, 'src/exports'),

    plugins: [
        vue(),

        /**
         * Generate `.d.ts`files.
         *}
         * @see https://github.com/qmhc/vite-plugin-dts
         */
        dts({
            cleanVueFileName: true,
            staticImport: true,
            insertTypesEntry: true,
        }),
    ],

    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },

    build: {
        chunkSizeWarningLimit: 2, // Warning alert for files over 2kb.

        /**
         * Library Mode
         *
         * @see https://vitejs.dev/guide/build.html#library-mode
         */
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'iui',
            fileName: 'iui',
        },

        /**
         * https://rollupjs.org/configuration-options
         */
        rollupOptions: {
            /**
             * Externalize deps that shouldn't be bundled.
             */
            external: ['vue', 'class-variance-authority'],
            output: {
                exports: 'named',
                /**
                 * Provide global variables to use in the UMD build
                 * for externalized deps.
                 */
                globals: {
                    'vue': 'Vue',
                    'class-variance-authority': 'classVarianceAuthority',
                },
            },
        },

    },
})
