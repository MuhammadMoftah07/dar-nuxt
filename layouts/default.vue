<template>
  <main>
    <LayoutMainHeader />
    <section class="flex">
      <div>
        <slot />
      </div>
    </section>
    <LayoutMainFooter />
    <TestComp />
    <!-- modals -->
    <LoginModal />
  </main>
</template>

<script lang="ts" setup></script>

<style></style>
