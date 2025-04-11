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

    token: {{ token?.slice(0, 10) }}

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
          <button
            @click="signOut()"
            class="btn btn-sm ghost btn-error text-red-50"
          >
            {{ $t("logout") }}
          </button>
        </li>

        <li>
          <button
            class="btn btn-sm btn-primary"
            @click="$modal.value = 'RegiModal'"
          >
            {{ $t("register") }}
          </button>
        </li>
        <li>
          <details>
            <summary>{{ user?.phone || "NotLogin" }}</summary>
            <ul class="p-2 rounded-t-none bg-base-100">
              <li>
                <a @click="navigateTo('/link1')" class="cursor-pointer"
                  >Link 1</a
                >
              </li>
              <li>
                <a @click="navigateTo('/link2')" class="cursor-pointer"
                  >Link 2
                </a>
              </li>
            </ul>
          </details>
        </li>

        <button
          class="flex font-bold btn btn-ghost btn-sm flex-nowrap text-slate-700"
          @click="setLocale(alternateLocale.code)"
        >
          <IconsBaseLangIcon class="w-5 h-5 text-primary shrink-0" />
          <span>
            {{ alternateLocale.symbol }}
          </span>
        </button>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts" setup>
const { data: user, signOut, token } = useAuth();
const router = useRouter();
const localePath = useLocalePath();
const { locale, locales, setLocale } = useI18n();

const alternateLocale = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value)[0];
});

const navigateTo = (path) => {
  router.push(localePath(path));
};
</script>

<style></style>
