<template>
  <div class="h-20 fixed w-full bg-white z-20 border-b border-gray-200">
    <div class="container mx-auto flex items-center h-full px-5 sm:px-0">
        <router-link :to="config.routes.home" class="min-w-[178px]">
          <img src="@/assets/images/logo-dark.svg" alt="brand" class="w-[178px]" />
        </router-link>
        <div 
            class="sm:hidden flex justify-end flex-1 cursor-pointer text-xl"
            @click="toggleMobileNav"
        >
            <font-awesome-icon :icon="openMobileNav ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'" />
        </div>
        <div 
            class="flex-1 flex flex-col sm:flex-row items-center w-full sm:w-auto justify-between fixed sm:relative top-20 sm:top-auto sm:left-auto bg-white sm:bg-transparent transition-all duration-500 py-5 sm:pl-5"
            :class="openMobileNav ? 'left-0' : '-left-full'"
        >
          <div>Search</div>
          <div>
            <Button title="Free Sign Up" @click-event="onClick" />
          </div>
        </div>
    </div>
  </div>
</template>

<script setup>
import config from "@/config"
</script>

<script>
import Button from "./Button.vue"

export default {
    data() {
        return {
            openMobileNav: false
        }
    },
    components: {
        Button
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
