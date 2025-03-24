<template>
  <nav class="shadow-sm navbar bg-base-100">
    <!-- Logo / Brand -->
    <div class="flex-1">
      <a
        @click="navigateTo('/')"
        class="text-xl border-0 cursor-pointer hover:bg-emerald-50 btn btn-ghost"
      >
        <img src="/public/logoFull.svg" />
      </a>
    </div>

    <!-- Navigation Links -->
    <div class="flex-none">
      <ul class="px-1 capitalize menu menu-horizontal">
        <li>
          <a @click="navigateTo('/components')" class="cursor-pointer">
            components
          </a>
        </li>

        <li>
          <button @click="$modal.value = 'loginModal'" class="btn btn-sm ghost">
            {{ $t("login") }}
          </button>
        </li>

        <li>
          <button class="btn btn-sm btn-primary">
            {{ $t("signIn") }}
          </button>
        </li>
        <li>
          <details>
            <summary>Parent</summary>
            <ul class="p-2 rounded-t-none bg-base-100">
              <li>
                <a @click="navigateTo('/link1')" class="cursor-pointer"
                  >Link 1</a
                >
              </li>
              <li>
                <a @click="navigateTo('/link2')" class="cursor-pointer"
                  >Link 2</a
                >
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts" setup>
const router = useRouter();
const localePath = useLocalePath();

const navigateTo = (path) => {
  router.push(localePath(path));
};
</script>

<style></style>
