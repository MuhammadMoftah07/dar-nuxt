<template>
  <dialog class="modal modal-open">
    <div class="overflow-y-auto modal-box bg-slate-50" :class="modalClasses">
      <h3 class="text-lg font-bold text-slate-900">
        <slot name="modal-title"></slot>
      </h3>
      <p class="py-4">
        <slot name="modal-body"></slot>
      </p>

      <slot name="modal-footer">
        <footer class="gap-2 modal-action">
          <button class="btn h-9 btn-primary" @click="$emit('submitted')">
            {{ $t("submit") }}
          </button>

          <button
            @click="$modal.value = ''"
            class="font-medium btn h-9 btn-ghost text-slate-700"
          >
            {{ $t("close") }}
          </button>
        </footer>
      </slot>
    </div>

    <!-- the dark background (close modal) -->
    <aside method="dialog" class="modal-backdrop" @click="$closeModal()">
      <button>close</button>
    </aside>
  </dialog>
</template>
<script setup lang="ts">
defineProps(["modalClasses"]);
</script>
