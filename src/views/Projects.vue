<template>
	<v-container>
		<h1 class="text-center mb-8">Projects</h1>
		<TileContainer :projects="featuredProject" v-if="featuredProject" width="826" height="400" />
		<TileContainer :projects="otherProjects" width="400" height="200" />
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