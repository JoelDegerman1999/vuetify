<template>
  <v-expansion-panels flat >
    <v-expansion-panel>
      <v-expansion-panel-header>
        <ProjectCard :projects="getAllUserProjects" />
      </v-expansion-panel-header>
      <v-expansion-panel-content>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import ProjectCard from "@/components/ProjectCard";
export default {
  components: {
    ProjectCard
  },
  computed: {
    getAllUserProjects() {
      return this.$store.getters.getProjectsByUserName("Joel Degerman");
    }
  }
};
</script>

<style>
</style>