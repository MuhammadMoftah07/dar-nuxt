<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
useHead({
  htmlAttrs: { "data-theme": "light" }, // Set default theme
});
</script>
