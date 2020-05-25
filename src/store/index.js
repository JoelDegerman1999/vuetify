import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loader: false,
    projects: [],
    fetchUrl: "http://localhost:8080/",
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
  actions: {
    getAllProjects(context) {
      fetch(`${context.state.fetchUrl}/projects`)
        .then((response) => response.json())
        .then((data) => {
          context.state.projects = data._embedded.projects;
        });
    },
    addProject(context, project) {
      context.state.loader = true;
      fetch(`${context.state.fetchUrl}/projects`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(project),
      })
        .then((resp) => resp.json())
        .then((data) => {
          context.state.projects.push(data);
          context.state.loader = false;
        });
    },
    changeStatus(context, payload) {
      payload.project.status = payload.status;
      fetch(`${context.state.fetchUrl}/projects/${payload.project.id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }).then(context.commit("changeStatus", payload));
    },
  },
  modules: {},
});
