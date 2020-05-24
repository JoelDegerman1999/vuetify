<template>
  <v-dialog v-model="dialog" max-width="300px">
    <template v-slot:activator="{ on }">
      <v-btn color="error" v-on="on">Delete</v-btn>
    </template>
    <v-card>
      <v-card-title primary-title>
        <v-spacer></v-spacer>
        Are you sure?
        <v-spacer></v-spacer>
      </v-card-title>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
        <v-btn color="blue darken-1" text @click="deleteProject">Delete</v-btn>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    project: Object,
  },
  data: () => ({
    dialog: false,
  }),
  methods: {
    deleteProject() {
      this.$store.commit("deleteProject", this.project);
      this.dialog = false;
    },
  },
};
</script>
