<template>
    <div class="flex items-center gap-2">
        <ITag v-for="tag in tags" :key="tag.key" :color="tag.type" closable @close="removeTag(tag.key)">
            {{ tag.type }}
        </ITag>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const types = ['default', 'primary', 'success', 'info', 'warning', 'danger'] as const
const tags = ref(types.map((type, index) => ({ key: index, type })))

const removeTag = (key: number) => {
    const index = tags.value.findIndex(tag => tag.key === key)

    if (~index)
        tags.value.splice(index, 1)
}
</script>
