<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" class="text-center">
        <h1 class="display-1">Welcome to My Portfolio</h1>
        <p class="subtitle-1">Showcasing my projects and skills.</p>
        <v-btn color="primary" large :to="{ name: 'Projects' }">View Projects</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
}
</script>