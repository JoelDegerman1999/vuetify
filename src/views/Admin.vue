<template>
  <v-container>
    <v-btn color="success" @click="startLoader">Click me</v-btn>
    <Loader />
  </v-container>
</template>

<script>
import Loader from "../components/partials/_loader";
export default {
  components: {
    Loader,
  },
  methods: {
    startLoader() {
      this.$store.state.loader = !this.$store.state.loader;
      console.log(this.$store.state.loader);
    },
  },
};
</script>
