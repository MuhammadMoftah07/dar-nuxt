<template>
  <main>
    <LayoutMainHeader />
    <section class="flex">
      <div>
        <slot />
      </div>
    </section>
    <LayoutMainFooter />

    <!-- modals -->
    <LoginModal v-if="$modal.value == 'loginModal'" />
  </main>
</template>

<script lang="ts" setup></script>

<style></style>
