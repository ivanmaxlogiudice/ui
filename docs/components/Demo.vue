<template>
    <section>
        <slot />

        <div class="my-2 overflow-hidden rounded border py-0 shadow dark:border-slate-600 dark:bg-zinc-800/50 dark:shadow-gray-500/20">
            <div class="vp-raw overflow-auto p-4">
                <slot name="demo" />
            </div>

            <section class="flex items-center justify-end space-x-2 border-t py-3 px-6 dark:border-gray-600">
                <button
                    v-if="!codeCopied"
                    class="border-0 text-gray-700 transition hover:!text-[var(--vp-c-brand)] focus:!text-[var(--vp-c-brand)] focus:outline-none dark:text-white"
                    @click="onCopy"
                >
                    <!-- Copy icon -->
                    <svg
                        class="h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z"
                        />
                    </svg>
                </button>

                <span v-else class="text-xs font-medium !text-[var(--vp-c-brand)]">
                    Copied!
                </span>

                <button
                    v-if="codeFolded"
                    aria-label="Show code"
                    class="border-0 text-gray-700 transition hover:!text-[var(--vp-c-brand)] focus:!text-[var(--vp-c-brand)] focus:outline-none dark:text-white"
                    @click="codeFolded = false"
                >
                    <!-- Open icon -->
                    <svg
                        class="h-4 w-4 "
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 1024 1024"
                    >
                        <path
                            d="M682.667 810.667c-12.8 0-21.334-4.267-29.867-12.8-17.067-17.067-17.067-42.667 0-59.734L878.933 512 652.8 285.867c-17.067-17.067-17.067-42.667 0-59.734s42.667-17.066 59.733 0l256 256c17.067 17.067 17.067 42.667 0 59.734l-256 256c-8.533 8.533-17.066 12.8-29.866 12.8zm-341.334 0c-12.8 0-21.333-4.267-29.866-12.8l-256-256C38.4 524.8 38.4 499.2 55.467 482.133l256-256c17.066-17.066 42.666-17.066 59.733 0s17.067 42.667 0 59.734L145.067 512 371.2 738.133c17.067 17.067 17.067 42.667 0 59.734-8.533 8.533-17.067 12.8-29.867 12.8z"
                        />
                    </svg>
                </button>

                <button
                    v-else
                    class="border-0 text-gray-700 transition hover:!text-[var(--vp-c-brand)] focus:!text-[var(--vp-c-brand)] focus:outline-none dark:text-white"
                >
                    <!-- Close icon -->
                    <svg
                        class="h-4 w-4 "
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 1024 1024"
                        @click="codeFolded = true"
                    >
                        <path
                            d="M305.6 225.6c-17.6-17.6-43.2-17.6-59.2 0L19.2 460.8c-25.6 30.4-25.6 72 0 97.6l225.6 235.2c8 8 20.8 12.8 30.4 12.8s20.8-4.8 30.4-12.8c17.6-17.6 17.6-43.2 0-59.2L88 512l217.6-225.6c17.6-17.6 17.6-43.2 0-60.8zm696 235.2L774.4 225.6c-17.6-17.6-43.2-17.6-59.2 0s-17.6 43.2 0 59.2L932.8 512 715.2 737.6c-17.6 17.6-17.6 43.2 0 59.2 8 8 17.6 12.8 30.4 12.8 12.8 0 20.8-4.8 30.4-12.8l225.6-235.2c28.8-28.8 28.8-70.4 0-100.8zM612.8 230.4c-20.8-8-46.4 4.8-56 25.6L382.4 742.4c-8 20.8 4.8 46.4 25.6 56 4.8 0 8 4.8 12.8 4.8 17.6 0 33.6-12.8 38.4-30.4l179.2-491.2c8-20.8-4.8-46.4-25.6-51.2z"
                        />
                    </svg>
                </button>
            </section>

            <div ref="$sourceCode" class="transition-all duration-300 ease-in-out" @focusin="codeFolded = false">
                <div class="!rounded-t-none dark:border-t dark:border-dashed dark:border-gray-600 [&>:first-child]:!my-0 [&>:first-child]:!rounded-none">
                    <slot name="code" />
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { computed, nextTick, onMounted, ref, watch } from 'vue'

const codeCopied = ref(false)
const codeFolded = ref(true)
const $sourceCode = ref<HTMLDivElement>()

const sourceCodeContainerHeight = computed(() => $sourceCode.value?.clientHeight ?? 0)

const setContainerHeight = (value: number) => {
    $sourceCode.value!.style.height = `${codeFolded.value ? 0 : value}px`
}

const onCopy = () => {
    ($sourceCode.value?.getElementsByClassName('copy')[0] as HTMLButtonElement)?.click()

    codeCopied.value = true
    setTimeout(() => codeCopied.value = false, 2000)
}

onMounted(() => {
    nextTick(() => setContainerHeight(sourceCodeContainerHeight.value))
})

watch(codeFolded, () => setContainerHeight(sourceCodeContainerHeight.value))
</script>
