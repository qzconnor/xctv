<script setup lang="ts">

</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-neutral-900">
    <Navbar />
    <div class="responsive-screen">
      <NuxtLoadingIndicator />
      <slot />
    </div>
  </div>
</template>
<style scoped>
.responsive-screen{
  height: calc((100vh - var(--nav-height) - 120px));
}
</style>