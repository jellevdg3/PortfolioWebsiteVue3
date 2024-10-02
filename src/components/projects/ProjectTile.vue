<template>
	<v-card :to="`/projects/${project.id}`" hover>
		<v-img :src="project.image" :width="this.width">
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
		},
		height: {
			type: [String, Number],
			required: true,
		},
	},
}
</script>