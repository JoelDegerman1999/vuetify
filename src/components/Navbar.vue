<template>
  <nav>
    <v-app-bar flat app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Page Title</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer">
      <v-list >
        <v-list-item class="primary--text" v-for="item in items" :key="item.title" link router :to="item.route">
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
      { title: "Account", icon: "mdi-account-box", route: "/account" },
      { title: "Admin", icon: "mdi-gavel", route: "/admin" }
    ]
  })
};
</script>

<style>
</style>