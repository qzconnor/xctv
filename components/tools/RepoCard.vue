<script setup lang="ts">
import type { RepoProps } from '~/types';
defineProps<{
    repo: RepoProps
}>();

</script>
<template>
    <div class="rounded-lg card-base h-full sm:p-4 p-3 text-wrap flex sm:scale-95 scale-100">
        <div class="space-y-2 w-full">
            <div class="flex justify-between gap-2 flex-col sm:flex-row">
                <h3 class="text-black/90 dark:text-white/90 truncate space-x-1">
                    <span class="text-black/50 dark:text-white/30 items-center">{{ repo.owner.login }}/</span><a target="_blank" :href="repo.html_url" class="underline underline-offset-2">{{ repo.name }}</a>
                </h3>
                <div class="flex gap-2 justify-start sm:justify-normal">
                    <nuxt-icon v-if="repo.language" :name="repo.language.toLowerCase()" filled class="text-xl card-base flex justify-center items-center rounded-lg px-2 py-1"/>
                    <div class="card-base flex justify-center items-center gap-2 rounded-lg px-2 py-1">
                        <nuxt-icon name="star" filled class="text-xl text-yellow-600"/>
                        <p class="text-black/50 dark:text-white/30 line-clamp-2"> {{ repo.stargazers_count }} </p>
                    </div>
                </div>
            </div>
            <p v-if="repo?.description" class="text-black/50 dark:text-white/30 line-clamp-2 text-balance">
                {{ repo?.description }}
            </p>
            <p v-else class="text-black/50 dark:text-white/30 line-clamp-2">
                This Repo has no Description
            </p>
        </div>
    </div>
</template>
<style scoped>

</style>