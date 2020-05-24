<template>
  <v-container class="grey--text text--darken-3">
    <v-row>
      <v-col class="text-center">
        <h1 class="display-1">My ongoing projects</h1>
      </v-col>
    </v-row>
    <ProjectsInfo ongoingProjects />
    <AddProjectDialog class="my-10" />
    <v-row>
      <v-col class="text-center"
        ><h1 class="display-1">My completed projects</h1></v-col
      >
    </v-row>
    <ProjectsInfo />
  </v-container>
</template>

<script>
import ProjectsInfo from "@/components/ProjectsInfo";
import AddProjectDialog from "@/components/AddProjectDialog";

export default {
  name: "Dashboard",
  components: {
    ProjectsInfo,
    AddProjectDialog,
  },
  data: () => ({
    dialog: false,
  }),
};
</script>
