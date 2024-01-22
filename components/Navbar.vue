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

const isOpen = ref(false)

onMounted(() => {
    function onResize() {
        const window = useWindowSize()
        isOpen.value = window.width.value > 640
    }
    onResize()
    window.addEventListener('resize', onResize)
})
</script>
<template>
    <!-- "w-full pt-10 sm:pb-0 pb-56" -->
    <nav :class="isOpen ? 'w-full pt-10 sm:pb-0 pb-64': 'w-full pt-10 sm:pb-0 pb-20'">
        <div class="responsive-screen relative">
            <div class="flex sm:items-center sm:flex-row flex-col gap-6 justify-between">
                <div class="flex gap-3 sm:flex-row flex-col w-full">
                    <div class="flex sm:items-center items-normal justify-between flex-row gap-3">
                    <NuxtLink to="/" class="flex-shrink-0 h-10 w-10 flex items-center space-x-4 border dark:border-white border-gray-500 rounded-lg"></NuxtLink>
                    <button @click="isOpen = !isOpen" type="button" class="sm:hidden block text-gray-500 hover:text-white focus:text-white focus:outline-none">
                        <svg class="h-6 w-6 fill-current text-black/90 dark:text-white/90" viewBox="0 0 24 24">
                            <path v-if="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
                            <path v-if="!isOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                        </svg>
                    </button>
                    </div>
                    <div :class="isOpen ? 'flex gap-3 flex-col w-full sm:flex-row sm:items-center items-end sm:justify-between justify-normal' : 'hidden'">
                        <div class="flex gap-3 sm:flex-row flex-col w-full">
                            <MyLink to="/tools" title="Tools" class="w-full sm:w-max" />
                            <MyLink to="/repos" title="Repositories" class="w-full sm:w-max"/>
                            <MyLink to="/experience" title="Experience" class="w-full sm:w-max"/>
                        </div>
                        <div class="flex space-x-2 items-center justify-evenly sm:w-max w-full">
                            <a :href="user_link" target="_blank" class="cursor-pointer justify-center card-base px-5 py-2 rounded-lg flex items-center space-x-2 sm:w-max w-full rounded-full">
                                <nuxt-icon name="discord" filled class="flex-shrink-0 h-4 w-4" />
                            </a>
                            <button @click="toggleTheme" class="cursor-pointer justify-center card-base px-5 py-2 rounded-lg flex items-center space-x-2 sm:w-max w-full rounded-full ">
                                <NuxtIcon :name="colorMode.value" filled/>
                            </button>
                        </div>
                    </div>
                </div>
               

            </div>
        </div>
    </nav>
</template>
<style scoped>
</style>