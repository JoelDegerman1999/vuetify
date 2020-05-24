<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="400px">
      <template v-slot:activator="{ on }">
        <v-btn
          color="accent"
          @click="reset"
          class="grey--text text--darken-4 darken-1"
          v-on="on"
          >Create project</v-btn
        >
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Create project</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form ref="form" v-model="valid">
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    label="Project title"
                    required
                    v-model="newProject.title"
                    :rules="titleRule"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Person"
                    required
                    v-model="newProject.person"
                    :rules="personRule"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Due by"
                    required
                    v-model="newProject.due"
                    :rules="dueRule"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-form>
          </v-container>
          <!-- <small>*indicates required field</small> -->
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false"
            >Close</v-btn
          >
          <v-btn color="blue darken-1" :disabled="!valid" text @click="validate"
            >Create</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    newProject: {
      title: "",
      person: "",
      due: "",
      status: "",
    },
    titleRule: [(v) => !!v || "Title required"],
    personRule: [(v) => !!v || "Person required"],
    dueRule: [(v) => !!v || "Due date required"],
    valid: true,
  }),
  methods: {
    addProject() {
      this.dialog = false;
      this.newProject.status = "ongoing";
      this.$store.commit("addProject", this.newProject);
      this.newProject = {};
    },
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>

<style></style>
