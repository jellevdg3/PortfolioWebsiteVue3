<template>
	<v-card @click="handleClick" hover class="project-tile">
		<v-img :src="project.image" :width="width">
			<v-card-title class="fill-height align-end">
				<span class="white--text">{{ project.title }}</span>
			</v-card-title>
		</v-img>
	</v-card>
</template>

<script>
export default {
	name: 'ProjectTile',
	props: {
		project: {
			type: Object,
			required: true,
		},
		width: {
			type: [String, Number],
			required: true,
		}
	},
	methods: {
		handleClick() {
			this.$emit('project-clicked', this.project);
		},
	},
}
</script>

<style scoped>
.project-tile {
	cursor: pointer;
}
</style>