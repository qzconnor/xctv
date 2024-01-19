<script setup lang="ts">
defineProps<{
    name: string,
    icon: string
}>();

</script>
<template>
    <div class="card-base rounded-lg flex items-center space-x-4 p-4">
        <div class="rounded-lg flex">
            <NuxtIcon :name="icon" filled class="text-xl" />
        </div> 
        <span class="flex-1 truncate text-sm">{{ name }}</span>
    </div>
</template>
<style scoped>

</style>