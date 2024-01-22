<script setup lang="ts">
const config = useRuntimeConfig();

useHead({
    title: 'Home - xconnor.tv'
})

const { data } = await useFetch<{
    data: {
        "discord_user": {
            username: string,
            avatar: string
        },
        "discord_status": string
    }
}>(`https://api.lanyard.rest/v1/users/${config.public.DISCORD_USER_ID}`)
const avatar_url = `https://cdn.discordapp.com/avatars/${config.public.DISCORD_USER_ID}/${data.value?.data.discord_user.avatar}.png?size=512`


</script>
<template>
    <div class="space-y-24 h-full flex items-center w-full justify-center">
        <div class="flex flex-col">
            <header class="rounded-md flex flex-col-reverse md:flex-row md:items-center justify-center h-[100%] sm:gap-40 gap-10">
            <div class="md:w-8/12">
                <div class="space-y-6">
                    <h1 class="font-semibold text-center text-4xl md:text-6xl md:text-left text-black/90 leading-normal dark:text-white/90">
                        Full-Stack <br> Developer
                    </h1>
                    <div class="flex items-center justify-center md:justify-start gap-x-3 gap-y-2 flex-wrap">
                        <a class="cursor-pointer justify-center px-5 py-2 rounded-lg card-base flex items-center space-x-2 inline-block w-max">
                            <NuxtIcon name="typescript" filled class="text-xl" />
                        </a>
                        <a class="cursor-pointer justify-center px-5 py-2 rounded-lg card-base flex items-center space-x-2 inline-block w-max">
                            <NuxtIcon name="vue" filled class="text-xl" />
                        </a>
                        <a class="cursor-pointer justify-center px-5 py-2 rounded-lg card-base flex items-center space-x-2 inline-block w-max">
                            <NuxtIcon name="nodejs" filled class="text-xl" />
                        </a>
                        <a href="/tools" class="cursor-pointer justify-center px-5 py-2 rounded-lg card-base flex items-center space-x-2 inline-block w-max">
                            <NuxtIcon name="more" filled class="text-xl" />
                        </a>
                    </div>
                </div>
            </div>
            <div class="flex flex-col rounded-lg relative space-x-2 space-y-5 p-2 w-full h-full">
                <div class="rounded-full mx-auto mb-4 md:mb-0 relative flex">
                    <img :src="avatar_url" class="rounded-full w-48 h-48"/>
                    <span v-if="data?.data.discord_status === 'online'" class='absolute bottom-2 right-2 h-8 w-8 rounded-full bg-green-500 ring dark:ring-neutral-900'></span>
                    <span v-else-if="data?.data.discord_status === 'idle'" class='absolute bottom-2 right-2 h-8 w-8 rounded-full bg-yellow-500 ring dark:ring-neutral-900'></span>
                    <span v-else-if="data?.data.discord_status === 'dnd'" class='absolute bottom-2 right-2 h-8 w-8 rounded-full bg-red-500 ring dark:ring-neutral-900'></span>
                    <span v-else-if="data?.data.discord_status === 'offline'" class='absolute bottom-2 right-2 h-8 w-8 rounded-full bg-gray-500 ring dark:ring-neutral-900'></span>
                </div>
            </div>
        </header>
        <div class="text-black/50 dark:text-white/30"></div>
        </div>
    </div>

</template>
<style scoped>

</style>