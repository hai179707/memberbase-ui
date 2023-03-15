<template>
  <div class="h-20 fixed w-full bg-white z-20 border-b border-gray-200 text-sm">
    <div class="ct-container flex items-center h-full">
        <router-link :to="config.routes.home" class="min-w-[178px]">
          <img src="@/assets/images/logo-dark.svg" alt="brand" class="w-[178px]" />
        </router-link>
        <div 
            class="md:hidden flex justify-end flex-1 cursor-pointer text-xl"
            @click="toggleMobileNav"
        >
            <font-awesome-icon :icon="openMobileNav ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'" />
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

<script setup>
import config from "@/config"
</script>

<script>
import HeaderNav from "./HeaderNav.vue"
import HeaderSearch from "./HeaderSearch.vue"

export default {
    data() {
        return {
            openMobileNav: false
        }
    },
    components: {
        HeaderNav,
        HeaderSearch
    }, 
    methods: {
        toggleMobileNav() {
            this.openMobileNav = !this.openMobileNav
        },
        onClick() {
            console.log('Action')
        }
    }
}
</script>
