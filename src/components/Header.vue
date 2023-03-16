<template>
  <div class="h-20 fixed w-full bg-white z-20 border-b border-gray-200 text-sm">
    <div class="ct-container flex items-center h-full">
      <router-link to="/" class="min-w-[178px]">
        <img
          src="@/assets/images/logo-dark.svg"
          alt="brand"
          class="w-[178px]"
        />
      </router-link>
      <div
        class="md:hidden flex justify-end flex-1 cursor-pointer text-xl"
        @click="onToggleMobileNav"
      >
        <font-awesome-icon
          :icon="openMobileNav ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'"
          class="select-none"
        />
      </div>
      <div
        class="flex-1 flex flex-col md:flex-row items-center w-full md:w-auto justify-between fixed md:relative top-20 md:top-auto md:left-auto bg-white md:bg-transparent transition-all duration-500 py-5 md:pl-5"
        :class="openMobileNav ? 'left-0' : '-left-full'"
      >
        <header-search />
        <header-nav />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderNav from "./HeaderNav.vue";
import HeaderSearch from "./HeaderSearch.vue";
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  setup() {
    const store = useStore();

    const openMobileNav = computed(() => store.state.other.openMobileNav)

    const onToggleMobileNav = () => store.dispatch('onToggleMobileNav')

    return {
      openMobileNav,
      onToggleMobileNav
    };
  },
  components: {
    HeaderNav,
    HeaderSearch,
  },
};
</script>
