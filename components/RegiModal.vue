<template>
  <LayoutModal modal-classes="max-w-xl">
    <template #modal-title> {{ $t("signup") }} </template>

    <template #modal-body>
      <form id="login-form" @submit.prevent="otpStage ? signInOTP : sendOTP()">
        <!-- phone login  -->
        <section class="grid grid-cols-2 gap-y-2 gap-x-6" v-if="!otpStage">
          <ThemeInput title="first_name" v-model="form.first_name" />
          <ThemeInput title="father_name" v-model="form.father_name" />
          <ThemeInput
            title="grandfather_name"
            v-model="form.grand_father_name"
          />
          <ThemeInput title="family_name" v-model="form.family_name" />
          <ThemeInput title="email" v-model="form.email" />
          <ThemeInput
            title="phone_number"
            maxlength="10"
            v-model="form.phone"
          />
        </section>

        <!-- otp stage -->
        <section class="grid grid-cols-1 gap-2" v-else>
          <div class="mb-6 text-center">
            <IconsBasePasswordLockIcon class="mx-auto mb-4 w-14 h-14" />
            <h2
              class="text-xl font-semibold text-slate-800"
              v-t="'enterOTP'"
            ></h2>
            <p class="text-slate-600" v-t="'enter_6_degit_otp'"></p>
          </div>
          <ThemeOTP />
        </section>
      </form>
    </template>

    <template #modal-footer>
      <footer class="gap-2 px-2 modal-action">
        <button
          class="w-1/2 btn h-9 btn-primary"
          :disabled="loading"
          v-if="!otpStage"
          form="login-form"
          type="submit"
        >
          <span v-if="loading" class="loading loading-spinner"></span>
          {{ $t("login") }}
        </button>
        <button
          class="w-1/2 btn h-9 btn-primary"
          form="login-form"
          :disabled="loading"
          type="submit"
          v-else
        >
          <span v-if="loading" class="loading loading-spinner"></span>
          {{ $t("submit") }}
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
const { signIn, token } = useAuth();
const otpStage = ref(false);
const loginForm = ref(null); // Add ref for the form

const sendOTP = () => {
  let payload = { ...form, "g-recaptcha-response": "" };

  // payload = useObjToFormData(payload);
  loading.value = true;
  $http("/auth/login", {
    method: "post",
    body: payload,
  })
    .then(() => {
      useToast().showSuccess();
      otpStage.value = true;
    })
    .catch((err) => {
      useToast().errorHandler(err);
    })
    .finally(() => {
      loading.value = false;
    });
};

const signInOTP = async () => {
  alert("signInOTP");
  let payload = { email_phone: "0599999999", otp: "123456", password: null };
  loading.value = true;
  try {
    await signIn(payload);
    useToast().showSuccess();
    useNuxtApp().$closeModal();
  } catch (err) {
    useToast().errorHandler(err);
  } finally {
    loading.value = false;
  }
};
</script>
