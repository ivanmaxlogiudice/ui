import { fileURLToPath } from 'node:url'
import path from 'node:path'
import fs from 'node:fs'

const rootDir = fileURLToPath(new URL('..', import.meta.url))
const componentsDir = path.join(rootDir, 'src', 'components')

const components = fs.readdirSync(componentsDir, { withFileTypes: true })
    .filter(entry => entry.isDirectory())
    .map(entry => `\t\t${entry.name}: typeof import('@ivanmaxlogiudice/ui')['${entry.name}']`)

const code = `// Auto generated component declarations
declare module 'vue' {
    export interface GlobalComponents {
$components
    }
}

export {}`

fs.writeFileSync(path.join(rootDir, 'volar.d.ts'), code.replace('$components', components.join('\n')), { encoding: 'utf-8' })
