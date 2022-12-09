<script setup lang="ts">
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: "id",
  addSeoAttributes: true,
});

const route = useRoute();
const { t } = useI18n();

const pageLayout = `layout.${route.meta.layout ?? "default"}.titleTemplate`;
const pageTitle = `page.${route.meta.title ?? "unknown"}.title`;

// Dynamically change the page title based on the locale.
const title = computed(() => t(pageLayout, { title: t(pageTitle) }));
</script>

<template>
  <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
    <Head>
      <Title>{{ title }}</Title>
      <Link v-for="link in head.link" :key="link.id" :rel="link.rel" :href="link.href" :hreflang="link.hreflang" />
      <Meta v-for="meta in head.meta" :key="meta.id" :property="meta.property" :content="meta.content" />
    </Head>
    <Body>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>
