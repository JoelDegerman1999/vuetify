<template>
  <v-container>
    <v-row>
      <v-col class="text-center grey--text text--darken-3">
        <h1 class>Projects</h1>
      </v-col>
    </v-row>
    <v-row v-for="project in getAllProjects" :key="project.title">
      <v-col>
        <ProjectCard :project="project" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProjectCard from "@/components/ProjectCard";

export default {
  name: "Dashboard",
  components: {
    ProjectCard,
  },
  data: () => ({}),
  computed: {
    getAllProjects() {
      return this.$store.state.projects;
    },
  },
};
</script>

<style lang="scss" scoped></style>
