<template>
  <div class="text-primary font-inter">
    <default-layout>
      <router-view />
    </default-layout>
  </div>
</template>

<script>
import DefaultLayout from "@/layouts/DefaultLayout.vue";

export default {
  name: "App",
  components: {
    DefaultLayout,
  },
};
</script>
