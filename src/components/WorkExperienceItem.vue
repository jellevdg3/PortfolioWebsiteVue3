<template>
	<v-card class="mb-2 fixed-width-card">
		<v-card-text class="d-flex">
			<v-avatar :size="avatarSize">
				<img src="https://via.placeholder.com/150" alt="Job Icon" />
			</v-avatar>
			<div class="ml-4">
				<strong>{{ job.title }}</strong> at {{ job.company }}
				<div class="grey--text text--lighten-1">{{ job.duration }}</div>
				<v-card-text>
					<ul>
						<li v-for="(responsibility, index) in job.responsibilities" :key="index">
							{{ responsibility }}
						</li>
					</ul>
				</v-card-text>
			</div>
		</v-card-text>
	</v-card>
</template>

<script>
export default {
	name: 'WorkExperienceItem',
	props: {
		job: {
			type: Object,
			required: true
		}
	},
	data() {
		return {
			avatarSize: 150, // Default size
		};
	},
	mounted() {
		this.setAvatarSize();
		window.addEventListener('resize', this.setAvatarSize);
	},
	beforeDestroy() {
		window.removeEventListener('resize', this.setAvatarSize);
	},
	methods: {
		setAvatarSize() {
			const width = window.innerWidth;
			if (width < 600) {
				this.avatarSize = 80;
			} else if (width < 1000) {
				this.avatarSize = 100;
			} else {
				this.avatarSize = 150;
			}
		}
	}
};
</script>

<style scoped>
.v-card-text {
	display: flex;
}

.fixed-width-card {
	width: 100%;
}
</style>
