<template>
  <nav>
    <v-app-bar flat app color="primary" dark>
      <v-toolbar-title>
        <span class="font-weight-light">Time</span>
        <span class="font-weight-bold">reporting</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text to="/">
          <v-icon left>mdi-view-dashboard</v-icon>Dashboard
        </v-btn>
        <v-btn text to="/projects">
          <v-icon left>mdi-folder</v-icon>Projects
        </v-btn>
        <v-btn text to="/admin">
          <v-icon left>mdi-gavel</v-icon>Admin
        </v-btn>
      </v-toolbar-items>
      <v-btn class="ml-5" color="secondary" @click="drawer = !drawer">Menu</v-btn>
    </v-app-bar>

    <v-navigation-drawer right app v-model="drawer" temporary>
      <v-row class="mt-5">
        <v-col cols="6" offset="3">
          <v-avatar size="100">
            <img src="https://randomuser.me/api/portraits/men/81.jpg" alt="alt" />
          </v-avatar>
          <p class="subheading mb-0 mt-2">Joel Degerman</p>
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
      { title: "Admin", icon: "mdi-gavel", route: "/admin" }
    ]
  })
};
</script>

<style>
</style>