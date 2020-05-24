import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    projects: [
      {
        title: "Design a new website",
        person: "Joel Degerman",
        due: "1st Jan 2019",
        status: "ongoing",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
      },
      {
        title: "Code up the homepage",
        person: "Chun Li",
        due: "10th Jan 2019",
        status: "complete",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
      },
      {
        title: "Design video thumbnails",
        person: "Joel Degerman",
        due: "20th Dec 2018",
        status: "complete",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
      },
      {
        title: "Create a community forum",
        person: "Gouken",
        due: "20th Oct 2018",
        status: "overdue",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
      },
    ],
  },
  getters: {
    getUnCompletedProjectsByUsername: (state) => (name) => {
      return state.projects.filter((project) => {
        if (project.person == name && project.status != "complete")
          return project;
      });
    },
    getCompletedProjectsByUsername: (state) => (name) => {
      return state.projects.filter((project) => {
        if (project.person == name && project.status == "complete") {
          return project;
        }
      });
    },
  },
  mutations: {
    changeStatus(state, payload) {
      state.projects.map((project) => {
        if (project == payload.project) {
          project.status = payload.status;
        }
      });
    },
    addProject(state, project) {
      state.projects.push(project);
    },
    deleteProject(state, project) {
      state.projects = state.projects.filter((p) => p != project);
    },
  },
  actions: {},
  modules: {},
});
