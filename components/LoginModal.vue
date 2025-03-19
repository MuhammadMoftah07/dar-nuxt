<template>
  <LayoutModal modal-classes="max-w-2xl">
    <template #modal-title> Title </template>

    <template #modal-body>
      <section class="grid grid-cols-2 gap-2">
        <ThemeInput title="العنوان" v-model="form.title" />
        <ThemeInput title="الوصف" type="textarea" v-model="form.desc" />
        <ThemeNumber title="عدد الطلاب" v-model="form.student_count" />
      </section>
    </template>

    <template #modal-footer>
      <footer class="gap-2 modal-action">
        <button
          class="btn h-9 btn-theme"
          :disabled="loading"
          @click="activeItem ? edit() : submit()"
        >
          <span v-if="loading" class="loading loading-spinner"></span>
          إتمام
        </button>
        <button
          @click="$modal.value = false"
          class="font-medium btn h-9 btn-ghost text-slate-700"
        >
          اغلاق
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
