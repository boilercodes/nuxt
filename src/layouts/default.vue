<script setup lang="ts">
useHead({
  titleTemplate: "Nuxt - %s",
  htmlAttrs: { lang: "en" },
});
</script>

<template>
  <div class="min-h-screen bg-transparent">
    <slot />
  </div>
</template>
