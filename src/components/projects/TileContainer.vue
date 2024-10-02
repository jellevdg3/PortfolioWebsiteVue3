<template>
  <v-row>
    <v-col cols="12" sm="6" md="4" v-for="project in projects" :key="project.id">
      <ProjectTile :project="project" />
    </v-col>
  </v-row>
</template>

<script>
import ProjectTile from './ProjectTile.vue'

export default {
  name: 'TileContainer',
  components: {
    ProjectTile,
  },
  props: {
    projects: {
      type: Array,
      required: true,
    },
  },
}
</script>