<template>
  <v-container>
    <v-row>
      <v-col class="text-center grey--text text--darken-3">
        <h1 class>Projects</h1>
      </v-col>
    </v-row>
    <ProjectCard :projects="getAllProjects"/>
  </v-container>
</template>

<script>
import ProjectCard from '@/components/ProjectCard'

export default {
  name: "Dashboard",
  components: {
    ProjectCard
  },
  data: () => ({
  }),
  computed: {
    getAllProjects() {
      return this.$store.state.projects
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
