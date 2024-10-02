<template>
	<v-card :to="`/projects/${project.id}`" hover>
		<v-img :src="project.image" height="400">
			<v-card-title class="fill-height align-end">
				<span class="white--text text-h4">{{ project.title }}</span>
			</v-card-title>
		</v-img>
	</v-card>
</template>

<script>
export default {
	name: 'FeaturedProject',
	props: {
		project: {
			type: Object,
			required: true,
		},
	},
}
</script>