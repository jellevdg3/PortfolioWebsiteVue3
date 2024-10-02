<template>
	<v-row justify="center">
		<v-col cols="auto" v-for="project in projects" :key="project.id">
			<ProjectTile :project="project" :width="width" :height="height" />
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
		},
		height: {
			type: [String, Number],
			required: true,
		},
	},
}
</script>