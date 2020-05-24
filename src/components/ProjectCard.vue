<template>
  <div>
    <v-card flat :key="project.name" :class="`project ${project.status}`">
      <v-row wrap class="pa-3">
        <v-col cols="12" md="6">
          <div class="caption grey--text">Project title</div>
          <div>{{ project.title }}</div>
        </v-col>
        <v-col cols="6" sm="4" md="2">
          <div class="caption grey--text">Person</div>
          <div>{{ project.person }}</div>
        </v-col>
        <v-col cols="6" sm="4" md="2">
          <div class="caption grey--text">Due by</div>
          <div>{{ project.due }}</div>
        </v-col>
        <v-col cols="2" sm="4" md="2">
          <div class="caption grey--text">Status</div>
          <div>{{ project.status }}</div>
        </v-col>
      </v-row>
      <v-divider></v-divider>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    project: Object,
  },
};
</script>

<style>
.project.complete {
  border-left: 4px solid #3cd1c2;
}
.project.overdue {
  border-left: 4px solid orange;
}

.project.ongoing {
  border-left: 4px solid tomato;
}
</style>
