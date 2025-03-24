<template>
  <LayoutModal modal-classes="max-w-sm">
    <template #modal-title> {{ $t("login") }} </template>

    <template #modal-body>
      <section class="grid grid-cols-1 gap-2">
        <ThemeInput title="phone" v-model="form.title" />
      </section>
    </template>

    <template #modal-footer>
      <footer class="gap-2 px-2 modal-action">
        <button
          class="w-1/2 btn h-9 btn-primary"
          :disabled="loading"
          @click="activeItem ? edit() : submit()"
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
const days = useGlobalData().days;
let rewaya = ref({});
let user = ref({});
let sessions_details = reactive([{}]);
const activeItem = useGlobalStore().activeItem;

// init component
if (activeItem?.id) {
  // form.title = activeItem.title;
  // form.title = activeItem.desc;
  form.title = activeItem.title;
  form.desc = activeItem.desc;

  form.student_count = activeItem.student_count;
  sessions_details = activeItem.session_details;
  rewaya.value = activeItem.rewaya;
  user.value = activeItem.teacher;
}
// const submit = () => {
//   let payload = { ...form };
//   for (let i in sessions_details) {
//     payload[`sessions_details[${i}][day]`] = sessions_details[i].day;
//     payload[`sessions_details[${i}][start_time]`] =
//       sessions_details[i]["start_time"];
//     payload[`sessions_details[${i}][duration_per_student]`] =
//       sessions_details[i]["duration_per_student"];
//   }
//   payload = useObjToFormData(payload);
//   loading.value = true;
//   $http("/admin/course", {
//     method: "post",
//     body: payload,
//   })
//     .then(() => {
//       useCourseStore().fetchData();
//       useToast().showSuccess("تمت العملية بنجاح");
//       useNuxtApp().$closeModal();
//     })
//     .catch((err) => {
//       loading.value = false;
//       useToast().errorHandler(err);
//     });
// };

// const edit = () => {
//   let payload = { ...form };
//   for (let i in sessions_details) {
//     payload[`sessions_details[${i}][day]`] = sessions_details[i].day;
//     payload[`sessions_details[${i}][start_time]`] =
//       sessions_details[i]["start_time"];
//     payload[`sessions_details[${i}][duration_per_student]`] =
//       sessions_details[i]["duration_per_student"];
//   }

//   payload = useObjToFormData(payload);
//   loading.value = true;
//   $http(`/admin/course/${activeItem.id}`, {
//     method: "post",
//     body: payload,
//   })
//     .then(() => {
//       useCourseStore().fetchData();
//       useToast().showSuccess("تمت العملية بنجاح");
//       useNuxtApp().$closeModal();
//     })
//     .catch((err) => {
//       loading.value = false;
//       useToast().errorHandler(err);
//     });
// };
</script>
