<template>
  <v-app-bar app color="primary" dark>
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    <v-toolbar-title>My Portfolio</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text class="d-none d-md-flex" :to="{ name: 'Home' }">Home</v-btn>
    <v-btn text class="d-none d-md-flex" :to="{ name: 'Projects' }">Projects</v-btn>
    <v-btn text class="d-none d-md-flex" :to="{ name: 'About' }">About Me</v-btn>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" app temporary>
    <v-list>
      <v-list-item link :to="{ name: 'Home' }">
        <v-list-item-title>Home</v-list-item-title>
      </v-list-item>
      <v-list-item link :to="{ name: 'Projects' }">
        <v-list-item-title>Projects</v-list-item-title>
      </v-list-item>
      <v-list-item link :to="{ name: 'About' }">
        <v-list-item-title>About Me</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      drawer: false,
    }
  },
}
</script>