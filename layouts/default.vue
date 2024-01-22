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
  padding-bottom: 8rem;
  height: unset;
}
@media (min-width: 640px) { 
  .responsive-screen {
    height: calc((100vh - var(--nav-height) - 120px));
    padding-bottom: 8rem;
  }
 }
 @media (min-width: 1280px) { 
  .responsive-screen {
    height: calc((100vh - var(--nav-height) - 120px));
    padding-bottom: 8rem;
  }
 }
</style>