<template>
  <div class="flex flex-col md:flex-row text-base md:text-sm w-full md:w-auto px-5 md:px-0">
    <ul class="flex gap-4 md:px-3 pb-4 md:pb-0 flex-col md:flex-row items-center font-medium text-secondary">
      <li v-for="nav in navs" :key="nav.id">
        <router-link :to="nav.url">
          {{ nav.text }}
        </router-link>
      </li>
    </ul>
    <Button title="Free Sign Up" @click-event="onClick" />
  </div>
</template>
<script>
import config from "@/config"
import Button from "./Button.vue"

export default {
  data() {
    return {
      navs: [
        {
          id: 1,
          url: config.routes.resources,
          text: "All Resources",
        },
        {
          id: 2,
          url: config.routes.logIn,
          text: "Log In",
        },
      ],
    };
  },
  components: {
    Button,
  },
  methods: {
    onClick() {
      console.log("Action");
    },
  },
}
</script>
