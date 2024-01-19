<script setup lang="ts">
import type { RepoProps } from '~/types';
const config = useRuntimeConfig();
//const {data:repos, error} = await useFetch<RepoProps[]>(`https://api.github.com/users/${config.public.GITHUB_USER_NAME}/repos?per_page=20`)


const {data: repos, error } = await useAsyncData('repos', async () => {
    const {value, addToCache} = await useDataCache<RepoProps[]>('repos')
    if(value) return value;

    const response = await $fetch<RepoProps[]>(`https://api.github.com/users/${config.public.GITHUB_USER_NAME}/repos?per_page=100`)
    addToCache(response, [], 3600)
    return response
})


let searchInput = ""
let debounceTimeout: string | number | NodeJS.Timeout | undefined = undefined;
let filterdRepos = ref<RepoProps[]>([])
function filter() {
    if(repos && repos.value) {
        if(searchInput === "") {
            filterdRepos.value = repos.value;

            return;
        }

        filterdRepos.value = repos.value.filter((item) => {
            return item.full_name.includes(searchInput)
        })
    }
}
filter()


function debounce() {
    if (debounceTimeout) clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
        filter()
    }, 500)
}



</script>
<template>
    <div class="text-black/50 dark:text-white/30 h-[75%] max-h-full">
        <header class="my-12 flex justify-between flex-col sm:flex-row sm:items-end gap-5">
            <div class="space-y-2">
                <h1 class="text-black/90 dark:text-white/90 text-4xl font-semibold">Repositories</h1> 
                <p>My public projects on GitHub.</p>
            </div>
            <div class="card-base rounded-lg p-1 flex items-center justify-center gap-2">
                <NuxtIcon name="search" class="text-xl" />
                <input type="text" class="bg-transparent rounded-lg focus:outline-none p-1 w-full" placeholder="Search" @input="debounce" v-model="searchInput" />
            </div>
        </header>
        <div v-if="error" class="flex justify-center items-center h-full">
            <h5 class="text-sm uppercase text-black/50 dark:text-white/30 text-center" data-v-inspector="pages/tools.vue:26:17"> {{ error.message }} </h5>
        </div>
        <div v-else-if="filterdRepos.length !== 0" class="flex h-full relative fade">
            <div class="grid gap-4 md:grid-cols-2 max-h-full overflow-auto p-3 pb-14 h-max w-max">
                <ToolsRepoCard v-for="repo in filterdRepos" :repo="repo" :key="repo.full_name" />
            </div>
        </div>
        <div v-else class="flex justify-center items-center h-full">
            <h5 class="text-sm uppercase text-black/50 dark:text-white/30 " data-v-inspector="pages/tools.vue:26:17"> No reposetories with this name. </h5>
        </div>
    </div>


</template>
<style scoped>
    .disable-focus:focus{
        outline: none;
    }
    .fade:after {
    content: "";
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 0;
    pointer-events: none;
    background-image: linear-gradient(to bottom, rgba(255,255,255,0), rgb(23 23 23 / 1) 90%);
    width: 100%;
    height: 4em;
    }
</style>