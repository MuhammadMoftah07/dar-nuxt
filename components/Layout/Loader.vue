<template>
  <aside
    class="absolute top-0 z-20 grid w-full h-full bg-opacity-50 rounded-md start-0 place-content-center bg-slate-200 backdrop-blur-sm"
  >
    <IconsSpinnerIcon :class="iconClass" class="w-6 h-6" />
    <!-- Gif should be here  -->

    <div class="flex gap-6">
      <!-- <img class="w-full" src="/assets/logo_animation60.gif" />
      <img class="w-full" src="/assets/logo_animation30.gif" />
      <img class="w-full" src="/logo_animation60.gif" />
      <img class="w-full" src="/logo_animation30.gif" /> -->
    </div>
  </aside>
</template>

<script lang="ts" setup>
const props = defineProps(["iconClass"]);
</script>
