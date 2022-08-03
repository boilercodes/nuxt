<script setup lang="ts">
useHead({
  titleTemplate: "%s",
  htmlAttrs: { lang: "en" },
});
</script>

<template>
  <div class="min-h-screen bg-transparent">
    <slot />
  </div>
</template>
