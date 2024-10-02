<template>
	<v-container class="align-center" style="max-width: 1200px;">
		<TileContainer :projects="featuredProject" v-if="featuredProject" width="826" height="400" />
		<TileContainer :projects="otherProjects" width="400" height="200" class="mt-12" />
	</v-container>
</template>

<script>
import { getProjects } from '../services/mockApi'
import TileContainer from '../components/projects/TileContainer.vue'

export default {
	name: 'Projects',
	components: {
		TileContainer,
	},
	data() {
		return {
			projects: [],
		}
	},
	computed: {
		featuredProject() {
			return this.projects.filter((project) => project.featured)
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