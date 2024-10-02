<template>
	<v-container>
		<v-row>
			<v-col cols="12" md="4" class="text-center">
				<v-avatar size="350" class="mb-12">
					<v-img :src="aboutData.profileImage" alt="Profile Picture"></v-img>
				</v-avatar>
			</v-col>
			<v-col cols="12" md="8">
				<h2>About Me</h2>
				<p>
					{{ aboutData.aboutText }}
				</p>

				<h3 class="mt-6">Skills</h3>
				<v-chip-group multiple column>
					<v-chip v-for="(skill, index) in aboutData.skills" :key="index">{{ skill }}</v-chip>
				</v-chip-group>

				<h3 class="mt-6">Education</h3>
				<v-card class="mb-4 education-container d-flex" v-for="(edu, index) in aboutData.education"
					:key="index">
					<v-avatar size="150" class="ma-4">
						<img src="https://via.placeholder.com/150" alt="Education Icon">
					</v-avatar>
					<div class="my-4">
						<div>
							<strong>{{ edu.title }}</strong>
							<div class="grey--text text--lighten-1">{{ edu.institution }}, {{ edu.duration }}</div>
						</div>
						<p>
							{{ edu.description }}
						</p>
					</div>
				</v-card>

				<v-btn color="primary" class="mt-4" :href="aboutData.cvLink" target="_blank">Download Resume</v-btn>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import { getAboutData } from '@/services/mockApi';

export default {
	name: 'About',
	data() {
		return {
			aboutData: {
				profileImage: '',
				aboutText: '',
				skills: [],
				education: [],
				cvLink: ''
			},
		}
	},
	async mounted() {
		this.aboutData = await getAboutData();
	}
}
</script>

<style scoped>
.mt-6 {
	margin-top: 1.5rem;
}

.mb-4 {
	margin-bottom: 1rem;
}

.education-container {
	max-width: 800px;
	width: 100%;
}
</style>