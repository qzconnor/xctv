<script setup lang="ts">
const props = defineProps<{
    name: string,
    icon?: string,
    iconClass?: string | null
    noFill?: boolean
}>();
const classname = ['text-xl']
if(props.iconClass) classname.push(props.iconClass)
</script>
<template>
    <div class="card-base rounded-lg flex items-center space-x-4 p-4">
        <div v-if="icon" class="rounded-lg flex">
            <NuxtIcon :name="icon" :filled="!noFill" :class="classname" />
        </div> 
        <span class="flex-1 truncate text-sm">{{ name }}</span>
    </div>
</template>
<style scoped>

</style>