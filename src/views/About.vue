<template>
	<v-container>
		<v-row>
			<v-col cols="12" md="4" class="text-center">
				<v-avatar :size="profileAvatarSize" class="mb-12">
					<v-img :src="aboutData.profileImage" alt="Profile Picture"></v-img>
				</v-avatar>
			</v-col>
			<v-col cols="12" md="8">
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
					<v-avatar :size="educationAvatarSize" class="ma-4">
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
			profileAvatarSize: 350, // Default profile avatar size
			educationAvatarSize: 150, // Default education avatar size
		};
	},
	async mounted() {
		this.aboutData = await getAboutData();
		this.setProfileAvatarSize();
		this.setEducationAvatarSize();
		window.addEventListener('resize', this.setProfileAvatarSize);
		window.addEventListener('resize', this.setEducationAvatarSize);
	},
	beforeDestroy() {
		window.removeEventListener('resize', this.setProfileAvatarSize);
		window.removeEventListener('resize', this.setEducationAvatarSize);
	},
	methods: {
		// Separate function for profile avatar resizing with 150, 250, 350 steps
		setProfileAvatarSize() {
			const width = window.innerWidth;
			if (width < 950) {
				this.profileAvatarSize = 350;
			} else if (width < 1300) {
				this.profileAvatarSize = 250;
			} else if (width < 1920) {
				this.profileAvatarSize = 350;
			}
			else {
				this.profileAvatarSize = 500;
			}
		},
		// Function for education avatar resizing with 80, 100, 150 steps
		setEducationAvatarSize() {
			const width = window.innerWidth;
			if (width < 600) {
				this.educationAvatarSize = 80;
			} else if (width < 1000) {
				this.educationAvatarSize = 100;
			} else {
				this.educationAvatarSize = 150;
			}
		}
	}
};
</script>

<style scoped>
.education-container {
	max-width: 800px;
	width: 100%;
}
</style>
