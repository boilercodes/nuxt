<script setup lang="ts">
const head = useLocaleHead({
  identifierAttribute: "id",
  addSeoAttributes: true,
});

const route = useRoute();
const { t } = useI18n();

const pageLayout = `layout.${route.meta.layout ?? "default"}.titleTemplate`;
const pageTitle = `page.${route.meta.title ?? "unnamed"}.title`;

// Dynamically change the page title based on the locale.
const title = computed(() => t(pageLayout, { title: t(pageTitle) }));
</script>

<template>
  <Html :lang="head.htmlAttrs.lang">
    <Head>
      <Title>{{ title }}</Title>
    </Head>
    <Body>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>
