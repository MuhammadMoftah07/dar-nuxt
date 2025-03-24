<template>
  <div class="grid divide-y-2 divide-slate-400">
    <section class="relative w-1/2 h-40 bg-slate-400">
      <LayoutLoader />
    </section>
    <section class="gap-3 py-6">
      <header class="p-3">
        <p class="text-xl font-bold capitalize">{{ themeColor }}</p>
      </header>
      <div class="space-x-3">
        <button class="btn" @click="changeTheme('cupcake')">cupcake</button>
        <button class="btn" @click="changeTheme('dark')">dark</button>
        <button class="btn" @click="changeTheme('light')">light</button>
        <button class="btn" @click="changeTheme('nord')">nord</button>
        <button class="btn" @click="changeTheme('emerald')">emerald</button>
        <button class="btn" @click="changeTheme('dim')">dim</button>
        <button class="btn" @click="changeTheme('winter')">winter</button>
        <button class="btn" @click="changeTheme('silk')">silk</button>
        <button class="btn" @click="changeTheme('lofi')">lofi</button>
        <button class="btn" @click="changeTheme('wireframe')">wireframe</button>
      </div>
    </section>

    <section class="gap-3 py-6">
      <header class="p-3">
        <p class="flex-wrap w-full text-xl font-bold">Fav</p>
      </header>
      <div class="space-x-3">
        <button class="btn" @click="changeTheme('emerald')">emerald</button>
        <button class="btn" @click="changeTheme('dim')">dim</button>
      </div>
    </section>

    <section class="flex gap-3 py-6">
      <button class="btn bg-base-100">Base 100</button>
      <button class="btn bg-base-200">base 200</button>
      <button class="btn bg-base-200">base 300</button>
      <button class="btn btn-neutral">Neutral</button>
      <button class="btn btn-primary">Primary</button>
      <button class="btn btn-secondary">Secondary</button>
      <button class="btn btn-accent">Accent</button>
      <button class="btn btn-info">Info</button>
      <button class="btn btn-success">Success</button>
      <button class="btn btn-warning">Warning</button>
      <button class="btn btn-error">Error</button>
      <button class="btn btn-ghost">Ghost</button>
      <button class="btn btn-link">Link</button>
      <button class="btn btn-square">
        <span class="loading loading-spinner"></span>
      </button>

      <button class="btn">
        <span class="loading loading-spinner"></span>
        loading
      </button>
    </section>
  </div>
</template>

<script lang="ts" setup>
const themeColor = ref("light");
function changeTheme(theme) {
  themeColor.value = theme;
  document.documentElement.setAttribute("data-theme", theme);
}
</script>

<style></style>
