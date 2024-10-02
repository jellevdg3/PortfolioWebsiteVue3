<template>
	<v-container class="d-flex flex-column align-center work-experience-container">
		<h2 class="text-center">Work Experience</h2>
		<WorkExperienceItem v-for="job in workExperience" :key="job.id" :job="job" />
	</v-container>
</template>

<script>
import { getWorkExperience } from '@/services/mockApi';
import WorkExperienceItem from '@/components/WorkExperienceItem.vue';

export default {
	name: 'WorkExperience',
	components: {
		WorkExperienceItem
	},
	data() {
		return {
			workExperience: [],
		}
	},
	async mounted() {
		this.workExperience = await getWorkExperience();
	}
}
</script>

<style scoped>
.work-experience-container {
	max-width: 900px;
	width: 100%;
}

.mb-4 {
	margin-bottom: 1rem;
}
</style>