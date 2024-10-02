<template>
  <v-container class="align-center" style="max-width: 1200px;">
    <TileContainer
      :projects="featuredProject"
      v-if="featuredProject.length"
      width="826"
      @project-clicked="openDialog"
    />
    <TileContainer
      :projects="otherProjects"
      width="400"
      class="mt-12"
      @project-clicked="openDialog"
    />

    <ProjectDialog
      v-model="dialog"
      :currentProject="currentProject"
      @next="nextProject"
      @prev="prevProject"
    />
  </v-container>
</template>

<script>
import { getProjects } from '../services/mockApi'
import TileContainer from '../components/projects/TileContainer.vue'
import ProjectDialog from '../dialogs/ProjectDialog.vue'

export default {
  name: 'Projects',
  components: {
    TileContainer,
    ProjectDialog,
  },
  data() {
    return {
      projects: [],
      dialog: false,
      currentProjectIndex: -1,
    }
  },
  computed: {
    featuredProject() {
      return this.projects.filter((project) => project.featured)
    },
    otherProjects() {
      return this.projects.filter((project) => !project.featured)
    },
    currentProject() {
      return this.projects[this.currentProjectIndex] || {}
    },
  },
  created() {
    getProjects().then((data) => {
      this.projects = data
    })
  },
  methods: {
    openDialog(project) {
      const index = this.projects.findIndex((p) => p.id === project.id)
      if (index !== -1) {
        this.currentProjectIndex = index
        this.dialog = true
      }
    },
    nextProject() {
      if (this.currentProjectIndex < this.projects.length - 1) {
        this.currentProjectIndex += 1
      } else {
        this.currentProjectIndex = 0 // Wrap around to first project
      }
    },
    prevProject() {
      if (this.currentProjectIndex > 0) {
        this.currentProjectIndex -= 1
      } else {
        this.currentProjectIndex = this.projects.length - 1 // Wrap around to last project
      }
    },
  },
  watch: {
    dialog(val) {
      if (!val) {
        this.currentProjectIndex = -1
      }
    },
  },
}
</script>

<style scoped>
/* Removed dialog-specific styles since they are now in ProjectDialog.vue */
</style>