<template>
  <v-expansion-panels>
    <div class="headline" v-if="getAllOngoingProjects.length == 0">
      No active projects
    </div>
    <v-expansion-panel
      v-for="project in ongoingProjects
        ? getAllOngoingProjects
        : getAllCompletedProjects"
      :key="project.title"
      class="grey lighten-4 mb-2"
    >
      <v-expansion-panel-header class="primary white--text">
        <!-- <ProjectCard :project="project" /> -->
        <div class="title">{{ project.title }}</div>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-card flat class="grey lighten-4">
          <v-card-title>
            <div class="subheading">Project Information</div>
          </v-card-title>
          <v-card-actions> </v-card-actions>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
// import ProjectCard from "@/components/ProjectCard";
// import DeleteDialog from "@/components/DeleteDialog";
export default {
  components: {
    // ProjectCard,
    // DeleteDialog,
  },
  props: {
    ongoingProjects: Boolean,
  },
  data: () => ({
    items: ["ongoing", "complete", "overdue"],
  }),
  methods: {
    completeProject(project) {
      let payload = {
        project: project,
        status: "complete",
      };
      this.$store.dispatch("changeStatus", payload);
    },
    makeActive(project) {
      let payload = {
        project: project,
        status: "ongoing",
      };
      this.$store.dispatch("changeStatus", payload);
    },
    deleteProject(project) {
      this.$store.commit("deleteProject", project);
    },
  },
  computed: {
    getAllOngoingProjects() {
      return this.$store.getters.getUnCompletedProjectsByUsername(
        "Joel Degerman"
      );
    },
    getAllCompletedProjects() {
      return this.$store.getters.getCompletedProjectsByUsername(
        "Joel Degerman"
      );
    },
  },
};
</script>

<style></style>
