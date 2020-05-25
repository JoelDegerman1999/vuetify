<template>
  <nav>
    <v-app-bar flat app dark>
      <v-toolbar-title>
        <span class="font-weight-light">Time</span>
        <span class="font-weight-bold">reporting</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text to="/">
          <v-icon left>mdi-view-dashboard</v-icon>Dashboard
        </v-btn>
        <v-btn text to="/projects">
          <v-icon left>mdi-folder</v-icon>Projects
        </v-btn>
      </v-toolbar-items>
      <v-btn class="ml-5" color="secondary" @click="drawer = !drawer"
        >Menu</v-btn
      >
    </v-app-bar>

    <v-navigation-drawer
      right
      app
      v-model="drawer"
      temporary
      class="grey lighten-3"
    >
      <v-row class="mt-5">
        <v-col cols="6" offset="3">
          <v-avatar size="100" color="primary">
            <span class="white--text headline">JD</span>
          </v-avatar>
        </v-col>
      </v-row>
      <v-list>
        <v-list-item
          class="primary--text"
          v-for="item in items"
          :key="item.title"
          link
          router
          :to="item.route"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    items: [
      { title: "Dashboard", icon: "mdi-view-dashboard", route: "/" },
      { title: "Projects", icon: "mdi-folder", route: "/projects" },
    ],
  }),
  computed: {},
};
</script>

<style>
@media screen and(min-width: 768px) {
  .hidden-on-mobile {
    display: none;
  }
}
</style>
