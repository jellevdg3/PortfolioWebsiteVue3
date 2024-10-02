<template>
	<v-row justify="center">
		<v-col cols="auto" v-for="project in projects" :key="project.id">
			<ProjectTile :project="project" :width="this.width" @project-clicked="handleProjectClicked" />
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
		width: {
			type: [String, Number],
			required: true,
		}
	},
	methods: {
		handleProjectClicked(project) {
			this.$emit('project-clicked', project);
		},
	},
}
</script>