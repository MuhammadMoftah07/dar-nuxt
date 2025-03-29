<template>
  <LayoutModal modal-classes="max-w-md">
    <template #modal-title> {{ $t("login") }} </template>

    <!-- <template #modal-body>
      <section class="grid grid-cols-1 gap-2">
        <ThemeInput title="phone" v-model="form.email_phone" />
      </section>
    </template> -->

    <template #modal-body>
      <section class="grid grid-cols-1 gap-2">
        <div class="mb-6 text-center">
          <IconsBasePasswordLockIcon class="mx-auto mb-4 w-14 h-14" />
          <h2 class="text-xl font-semibold text-slate-800">Enter OTP</h2>
          <p class="text-slate-600">Please enter the 6-digit code</p>
        </div>
        <ThemeOTP />
      </section>
    </template>

    <template #modal-footer>
      <footer class="gap-2 px-2 modal-action">
        <button
          class="w-1/2 btn h-9 btn-primary"
          :disabled="loading"
          @click="submit()"
        >
          <span v-if="loading" class="loading loading-spinner"></span>
          {{ $t("login") }}
        </button>
        <button
          @click="$modal.value = false"
          class="w-1/2 font-medium btn h-9 btn-secondary"
        >
          {{ $t("create_account") }}
        </button>
      </footer>
    </template>
  </LayoutModal>
</template>

<script lang="ts" setup>
let form = reactive({});
const loading = ref(false);

const submit = () => {
  let payload = { ...form, "g-recaptcha-response": "" };

  payload = useObjToFormData(payload);
  loading.value = true;
  $http("/auth/login", {
    method: "post",
    body: payload,
  })
    .then(() => {
      useToast().showSuccess();
      useNuxtApp().$closeModal();
    })
    .catch((err) => {
      loading.value = false;
      useToast().errorHandler(err);
    });
};
</script>
