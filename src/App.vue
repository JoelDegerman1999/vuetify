<template>
  <v-app>
    <Navbar/>

    <v-content class="grey lighten-4">
        <router-view />
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "App",

  components: {
    Navbar
  },

  data: () => ({})
};
</script>
