<script setup>
const config = useRuntimeConfig();
const user_link = `https://discordapp.com/users/${config.public.DISCORD_USER_ID}`

const local = useLocalStorage("darkmode", true)
const colorMode = useColorMode()

setColor(local.value ? "dark": "light")

function toggleTheme() {
    local.value = !local.value
    setColor(local.value ? "dark": "light")
}
function setColor(c) {
    colorMode.value = c;
}



</script>
<template>
    <nav class="w-full pt-10 sm:pb-0 pb-20">
        <div class="responsive-screen relative">
            <div class="flex sm:items-center flex-col sm:flex-row gap-6 justify-between">
                <div class="flex items-center gap-3">
                    <NuxtLink to="/" class="flex-shrink-0 h-10 w-10 flex items-center space-x-4 border border-white rounded-lg"></NuxtLink>
                    <MyLink to="/tools" title="Tools" />
                    <MyLink to="/repos" title="Repositories" />
                    <MyLink to="/experience" title="Experience" />
                </div>
                <div class="flex space-x-2 items-center">
                    <a :href="user_link" target="_blank" class="cursor-pointer justify-center card-base px-5 py-2 rounded-lg flex items-center space-x-2 w-max rounded-full">
                        <nuxt-icon name="discord" filled class="flex-shrink-0 h-4 w-4" />
                    </a>
                    <button @click="toggleTheme" class="cursor-pointer justify-center card-base px-5 py-2 rounded-lg flex items-center space-x-2 w-max rounded-full ">
                        <NuxtIcon :name="colorMode.value" filled/>
                    </button>
                </div>
            </div>
        </div>
    </nav>
</template>
<style scoped>

</style>