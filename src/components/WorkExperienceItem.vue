<template>
	<v-card class="mb-2 fixed-width-card">
		<v-card-text class="d-flex">
			<v-avatar size="150">
				<img src="https://via.placeholder.com/150" alt="Job Icon">
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
	}
}
</script>

<style scoped>
.v-card-text {
	display: flex;
}
.fixed-width-card {
	width: 100%;
}
</style>