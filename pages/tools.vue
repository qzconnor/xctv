<script setup lang="ts">
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
                    <ToolsCard name="TypeScript" icon="typescript" />
                    <ToolsCard name="Java" icon="java" />
                    <ToolsCard name="HTML5" icon="html5" />
                    <ToolsCard name="Tailwind" icon="tailwind" />
                    <ToolsCard name="Node.js" icon="nodejs" />
                    <ToolsCard name="Python" icon="python" />
                </div>
            </div>
            <div class="lg:w-[50%]">
                <h5 class="text-sm uppercase text-black/50 pb-2 mb-4 border-b border-black/5 dark:text-white/30 dark:border-white/5">
                    Tools
                </h5>
                <div class="grid md:grid-cols-3 grid-cols-1 lg:grid-cols-3 gap-x-2 gap-y-2">
                    <ToolsCard name="VS Code" icon="vscode" />
                    <ToolsCard name="Github" icon="github" />
                </div>
            </div>
            </div>
            <div class="flex lg:flex-row flex-col gap-10">
            <div class="lg:w-[50%]">
                <h5 class="text-sm uppercase text-black/50 pb-2 mb-4 border-b border-black/5 dark:text-white/30 dark:border-white/5">
                    Frameworks
                </h5>
                <div class="grid md:grid-cols-3 grid-cols-1 lg:grid-cols-3 gap-x-2 gap-y-2">
                    <ToolsCard name="Nuxt" icon="nuxt"/>
                    <ToolsCard name="Vue.js" icon="vue"/>
                </div>
            </div>
            <div class="lg:w-[50%]">
                <h5 class="text-sm uppercase text-black/50 pb-2 mb-4 border-b border-black/5 dark:text-white/30 dark:border-white/5">
                    Database
                </h5>
                <div class="grid md:grid-cols-3 grid-cols-1 lg:grid-cols-3 gap-x-2 gap-y-2">
                    <ToolsCard name="SQL" icon="mariadb"/>
                    <ToolsCard name="Mongo DB" icon="mongodb" />
                </div>
            </div>
            </div>
        </div>
    </div>


</template>
<style scoped>

</style>