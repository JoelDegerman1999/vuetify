<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="400px">
      <template v-slot:activator="{ on }">
        <v-btn
          color="accent"
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
                    prepend-icon="mdi-clipboard-text-outline"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" lg="6">
                  <v-select
                    label="Person"
                    prepend-icon="mdi-account"
                    :items="personSelect"
                    v-model="newProject.person"
                  ></v-select>
                </v-col>
                <v-col cols="12" lg="6">
                  <v-menu
                    transition="scale-transition"
                    :close-on-content-click="false"
                    offset-y
                    max-width="290px"
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="newProject.due"
                        label="Date"
                        persistent-hint
                        prepend-icon="mdi-calendar"
                        readonly
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      reactive
                      v-model="newProject.due"
                      no-title
                    ></v-date-picker>
                  </v-menu>
                </v-col>
              </v-row>
            </v-form>
          </v-container>
          <!-- <small>*indicates required field</small> -->
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="reset">Close</v-btn>
          <v-btn color="blue darken-1" :disabled="!valid" text @click="validate"
            >Create</v-btn
          >
        </v-card-actions>
      </v-card>
      <div class="text-center">
        <Loader />
      </div>
    </v-dialog>
  </v-row>
</template>

<script>
import Loader from "../components/partials/_loader";
export default {
  components: {
    Loader,
  },
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
    personSelect: ["Joel Degerman", "Helena Degerman"],
  }),
  methods: {
    addProject() {
      this.newProject.status = "ongoing";
      this.$store.dispatch("addProject", this.newProject);
      this.newProject = {};
    },
    validate() {
      this.$refs.form.validate();
      this.addProject();
      this.reset();
    },
    reset() {
      this.dialog = false;
      this.$refs.form.reset();
    },
  },
};
</script>

<style></style>
