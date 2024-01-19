<template>
    <MyCustomLink :to="to" class="cursor-pointer justify-center card-base px-5 py-2 rounded-lg flex items-center space-x-2 w-max rounded-full">{{ title }}</MyCustomLink>
  </template>
  <script setup lang="ts">
  defineProps({
    to: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  });
  </script>