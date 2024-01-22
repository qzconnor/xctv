<script setup lang="ts">
useHead({
    title: 'Tools - xconnor.tv'
})

const {data: tools} = await useFetch("/api/tools")

</script>
<template>
    <div class="text-black/50 dark:text-white/30 md:mb-20">
        <header class="space-y-2 my-12">
        <h1 class="text-black/90 dark:text-white/90 text-4xl font-semibold">
        Tools
        </h1> 
        <p>My tools and languages for my Projects.</p>
        </header>
        <div class="flex flex-col space-y-10">
            <div class="flex lg:flex-row flex-col gap-10">
            <div class="lg:w-[50%]">
                <h5 class="text-sm uppercase text-black/50 pb-2 mb-4 border-b border-black/5 dark:text-white/30 dark:border-white/5">
                    Languages
                </h5>
                <div class="grid md:grid-cols-3 grid-cols-1 lg:grid-cols-3 gap-x-2 gap-y-2">
                    <ToolsCard v-for="item in tools?.languages" :name="item.name" :icon="item.icon" :icon-class="item.class" :no-fill="item.noFill"/>
                </div>
            </div>
            <div class="lg:w-[50%]">
                <h5 class="text-sm uppercase text-black/50 pb-2 mb-4 border-b border-black/5 dark:text-white/30 dark:border-white/5">
                    Tools
                </h5>
                <div class="grid md:grid-cols-3 grid-cols-1 lg:grid-cols-3 gap-x-2 gap-y-2">
                    <ToolsCard v-for="item in tools?.tools" :name="item.name" :icon="item.icon" :icon-class="item.class" :no-fill="item.noFill"/>
                </div>
            </div>
            </div>
            <div class="flex lg:flex-row flex-col gap-10">
            <div class="lg:w-[50%]">
                <h5 class="text-sm uppercase text-black/50 pb-2 mb-4 border-b border-black/5 dark:text-white/30 dark:border-white/5">
                    Frameworks
                </h5>
                <div class="grid md:grid-cols-3 grid-cols-1 lg:grid-cols-3 gap-x-2 gap-y-2">
                    <ToolsCard v-for="item in tools?.frameworks" :name="item.name" :icon="item.icon" :icon-class="item.class" :no-fill="item.noFill"/>
                </div>
            </div>
            <div class="lg:w-[50%]">
                <h5 class="text-sm uppercase text-black/50 pb-2 mb-4 border-b border-black/5 dark:text-white/30 dark:border-white/5">
                    Database
                </h5>
                <div class="grid md:grid-cols-3 grid-cols-1 lg:grid-cols-3 gap-x-2 gap-y-2">
                    <ToolsCard v-for="item in tools?.databases" :name="item.name" :icon="item.icon" :icon-class="item.class" :no-fill="item.noFill"/>
                </div>
            </div>
            </div>
        </div>
    </div>


</template>
<style scoped>

</style>