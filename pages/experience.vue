<script setup lang="ts">
useHead({
    title: 'Experience - xconnor.tv'
})

</script>
<template>
    <div class="text-black/50 dark:text-white/30">
        <header class="space-y-2 my-12">
        <h1 class="text-black/90 dark:text-white/90 text-4xl font-semibold">Experience</h1> 
        <p>My experience and education.</p>
        </header>
        <div class="grid gap-x-8 gap-y-24 md:grid-cols-2">
            <div>
                <div class="flex items-center gap-4 justify-between">
                    <h5 class="w-full text-sm uppercase text-black/50 pb-2 mb-4 border-b border-black/5 dark:text-white/30 dark:border-white/5">
                        Experience
                    </h5>
                </div>
                <div class="mt-4 grid gap-2">
                    <ToolsExpCard title="Cosmeticmod.com" job="Web-Developer" link="https://cosmeticsmod.com/" span="2020-present"/>
                    <ToolsExpCard title="Labyaddons.de" job="Creator" link="https://labyaddons.de/" span="2021-present"/>
                </div>

            </div>
            <div>
                <div class="flex items-center gap-4 justify-between">
                    <h5 class="w-full text-sm uppercase text-black/50 pb-2 mb-4 border-b border-black/5 dark:text-white/30 dark:border-white/5">
                        Education
                    </h5>
                </div>
                <div class="mt-4 grid gap-2">
                    <ToolsExpCard title="mySolution Software & Consulting GmbH" job="Software Engineer" link="https://www.mysolution.de/" span="2023-present"/>
                    <ToolsExpCard title="Berufliche Schule ITECH" job="Software Engineer (vocational education)" link="https://www.itech-bs14.de/" span="2021-2023"/>
                    <ToolsExpCard title="COSMO CONSULT" job="Jr. Software Engineer" link="https://de.cosmoconsult.com/" span="2021-2023"/>
                    <ToolsExpCard title="JOBELMANN-SCHULE" job="Technic" link="https://www.jobelmannschule.de/" span="2019-2021"/>
                </div>
            </div>
        </div>
    </div>


</template>
<style scoped>

</style>