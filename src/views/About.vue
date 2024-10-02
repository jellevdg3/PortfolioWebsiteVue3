<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4" class="text-center">
        <v-avatar size="150">
          <v-img src="https://via.placeholder.com/150" alt="Profile Picture"></v-img>
        </v-avatar>
      </v-col>
      <v-col cols="12" md="8">
        <h2>About Me</h2>
        <p>
          I'm a passionate developer experienced in building web applications with modern technologies.
        </p>
        <h3>Skills</h3>
        <v-chip-group multiple column>
          <v-chip>Vue.js</v-chip>
          <v-chip>JavaScript</v-chip>
          <v-chip>HTML5</v-chip>
          <v-chip>CSS3</v-chip>
          <v-chip>Vuetify</v-chip>
        </v-chip-group>
        <v-btn color="primary" class="mt-4" href="#" target="_blank">Download Resume</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'About',
}
</script>