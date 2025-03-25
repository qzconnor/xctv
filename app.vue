<script setup lang="ts">
  useHead({
    htmlAttrs: {
      class: "max-h-screen"
    },
    bodyAttrs: {
      class: "relative"
    }
  })
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
    <Wave />
  </NuxtLayout>
</template>
<style>
:root {
  --nav-height: calc(40px + 2.5rem);
}
nav.big {
  --nav-height: calc(75px + 2.5rem);
}
nav{
    height: var(--nav-height);
}

html {
    -webkit-text-size-adjust: 100%;
    font-family: Inter,ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,"Noto Sans","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    line-height: 1.5;
}
.nuxt-icon svg{
  margin-bottom: 0 !important;
}

/* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: #262626 rgb(23 23 23 / 1);
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 10px;
  }

  *::-webkit-scrollbar-track {
    background: rgb(23 23 23 / 1);
  }

  *::-webkit-scrollbar-thumb {
    background-color: #262626;
    border-radius: 12px;
    border: 0px none #ffffff;
  }


.responsive-screen {
    margin-left: auto;
    margin-right: auto;
    max-width: 1024px;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
}
.dark .card-base {
    --tw-bg-opacity: 0.3;
    --tw-border-opacity: 1;
    --tw-text-opacity: 0.8;
    background-color: rgba(38,38,38,.3);
    background-color: rgba(38,38,38,var(--tw-bg-opacity));
    border-color: #262626;
    border-color: rgba(38,38,38,var(--tw-border-opacity));
    color: hsla(0,0%,100%,.8);
    color: rgba(255,255,255,var(--tw-text-opacity));
}
.card-base {
    --tw-bg-opacity: 1;
    --tw-bg-opacity: 0.25;
    --tw-border-opacity: 1;
    background-color: hsla(0,0%,96%,.25);
    background-color: rgba(245,245,245,var(--tw-bg-opacity));
    border-color: #e5e5e5;
    border-color: rgba(229,229,229,var(--tw-border-opacity));
    border-width: 0.1px;
    transition-duration: .15s;
    transition-property: background-color,border-color,color,fill,stroke;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
}
.dark .card-base.active {
    --tw-bg-opacity: 0.7;
    --tw-text-opacity: 1;
    color: #fff;
    color: rgba(255,255,255,var(--tw-text-opacity));
}
.dark .card-base:hover {
    --tw-bg-opacity: 0.4;
    --tw-text-opacity: 1;
    color: #fff;
    color: rgba(255,255,255,var(--tw-text-opacity));
}

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.2s;
}
.slide-left-enter-from {
  opacity: 0;
  transform: translate(50px, 0);
}
.slide-left-leave-to {
  opacity: 0;
  transform: translate(-50px, 0);
}
.slide-right-enter-from {
  opacity: 0;
  transform: translate(-50px, 0);
}
.slide-right-leave-to {
  opacity: 0;
  transform: translate(50px, 0);
}
</style>