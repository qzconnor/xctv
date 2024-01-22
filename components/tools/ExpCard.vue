<script setup lang="ts">
defineProps<{
    link: string
    title: string
    span: string
    job: string
}>();

</script>
<template>
    <a :href="link" target="blank">
        <div class="card-base leading-relaxed rounded-lg p-4">
            <div class="flex space-x-2 items-center justify-between">
                <h3>{{ title }}</h3>
                <span class="text-black/50 dark:text-white/30 text-sm">{{ span }}</span>
            </div>
            <div class="truncate text-sm text-black/50 dark:text-white/30">
                {{ job }}
            </div>
        </div>
    </a>
</template>
<style scoped>

</style>