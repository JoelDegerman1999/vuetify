<template>
  <v-container>
    <v-row>
      <v-col class="text-center grey--text text--darken-3">
        <h1 class>My Projects</h1>
      </v-col>
    </v-row>
    <ProjectsInfo/>
  </v-container>
</template>

<script>
import ProjectsInfo from '@/components/ProjectsInfo'

export default {
  name: "Dashboard",
  components: {
    ProjectsInfo
  },
  data: () => ({
  }),
  
};
</script>