<template>
  <v-container>
    <FeaturedProject :project="featuredProject" v-if="featuredProject" />
    <v-divider v-if="featuredProject"></v-divider>
    <TileContainer :projects="otherProjects" />
  </v-container>
</template>

<script>
import { getProjects } from '../services/mockApi'
import FeaturedProject from '../components/projects/FeaturedProject.vue'
import TileContainer from '../components/projects/TileContainer.vue'

export default {
  name: 'Projects',
  components: {
    FeaturedProject,
    TileContainer,
  },
  data() {
    return {
      projects: [],
    }
  },
  computed: {
    featuredProject() {
      return this.projects.find((project) => project.featured)
    },
    otherProjects() {
      return this.projects.filter((project) => !project.featured)
    },
  },
  created() {
    getProjects().then((data) => {
      this.projects = data
    })
  },
}
</script>