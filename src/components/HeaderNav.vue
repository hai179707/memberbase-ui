<template>
  <div
    class="flex flex-col md:flex-row text-base md:text-sm w-full md:w-auto px-5 md:px-0"
  >
    <ul
      class="flex gap-4 md:px-3 pb-4 md:pb-0 flex-col md:flex-row items-center font-medium text-secondary"
    >
      <li
        v-for="nav in navs"
        :key="nav.id"
        class="hover:text-primary transition-colors duration-500"
      >
        <router-link :to="nav.url">
          {{ nav.text }}
        </router-link>
      </li>
    </ul>
    <Button title="Free Sign Up" @click-event="onClick" />
  </div>
</template>
<script>
import Button from "./Button.vue";

export default {
  components: {
    Button,
  },
  // setup() {
  //   return {
  //     onClick: () => console.log("Free Sign Up"),
  //   };
  // },
  methods: {
    onClick: () => console.log("Free Sign Up"),
  }
};
</script>

<script setup>
import { navs } from "@/data";
</script>
