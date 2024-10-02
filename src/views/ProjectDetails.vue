<template>
	<v-container>
		<v-row>
			<v-col cols="12">
				<div v-if="project">
					<h1>{{ project.title }}</h1>
					<ScreenshotCarousel :screenshots="project.screenshots" />
					<p class="mt-4">{{ project.description }}</p>
				</div>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import { getProjectById } from '../services/mockApi'
import ScreenshotCarousel from '../components/projects/ScreenshotCarousel.vue'

export default {
	name: 'ProjectDetails',
	components: {
		ScreenshotCarousel,
	},
	data() {
		return {
			project: null,
		}
	},
	created() {
		getProjectById(this.$route.params.id).then((data) => {
			this.project = data
		})
	},
}
</script>