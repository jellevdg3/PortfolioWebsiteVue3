<template>
	<v-container>
		<h2>Work Experience</h2>
		<v-card class="mb-4" v-for="job in workExperience" :key="job.id">
			<v-card-title>
				<div>
					<strong>{{ job.title }}</strong> at {{ job.company }}
					<div class="grey--text text--lighten-1">{{ job.duration }}</div>
				</div>
			</v-card-title>
			<v-card-text>
				<ul>
					<li v-for="(responsibility, index) in job.responsibilities" :key="index">
						{{ responsibility }}
					</li>
				</ul>
			</v-card-text>
		</v-card>
	</v-container>
</template>

<script>
export default {
	name: 'WorkExperience',
	data() {
		return {
			workExperience: [
				{
					id: 1,
					title: 'Software Engineer',
					company: 'Innovatielab (iLab) Politie',
					duration: 'Apr 2024 - Present',
					responsibilities: [
						'Develop and maintain software solutions for law enforcement applications.',
						'Collaborate with cross-functional teams to define and implement new features.',
						'Ensure the scalability and performance of enterprise-level systems.'
					]
				},
				{
					id: 2,
					title: 'Software Engineer',
					company: 'Centric',
					duration: 'Aug 2023 - Present',
					responsibilities: [
						'Work on developing web and mobile applications for various clients.',
						'Implement best practices in software development and code reviews.',
						'Integrate Azure services to enhance application capabilities.'
					]
				},
				{
					id: 3,
					title: 'Lead Developer',
					company: 'ChimpWorks',
					duration: 'Apr 2022 - Sep 2023',
					responsibilities: [
						'Led a team of 10 developers in the development of large-scale gaming projects.',
						'Managed iterative releases and feature implementations for a user base of 100+ million players.',
						'Focused on user experience, optimization, and detailed code quality assurance.'
					]
				},
				{
					id: 4,
					title: 'Medior Software Engineer',
					company: 'Talespin',
					duration: 'Nov 2019 - Mar 2022',
					responsibilities: [
						'Developed immersive training simulations using Unreal Engine.',
						'Collaborated with designers and other engineers to create interactive user experiences.',
						'Optimized application performance and integrated feedback from users.'
					]
				},
				{
					id: 5,
					title: 'Junior Software Engineer',
					company: 'Talespin',
					duration: 'Oct 2018 - Nov 2019',
					responsibilities: [
						'Assisted in the development of game mechanics and features.',
						'Participated in code reviews and contributed to improving coding standards.',
						'Supported senior engineers in debugging and troubleshooting issues.'
					]
				},
				{
					id: 6,
					title: 'Software Engineer Intern',
					company: 'Philips Lighting',
					duration: 'Sep 2017 - Mar 2018',
					responsibilities: [
						'Developed tools for lighting system management and control.',
						'Collaborated with the engineering team to enhance product features.',
						'Conducted testing and documentation for developed software modules.'
					]
				},
				{
					id: 7,
					title: 'Game Developer Intern',
					company: 'Astute Monkey Studio',
					duration: 'May 2013 - Nov 2013',
					responsibilities: [
						'Assisted in the development of mobile games using Unity.',
						'Implemented gameplay features and user interface elements.',
						'Worked closely with designers to bring game concepts to life.'
					]
				}
			]
		}
	}
}
</script>

<style scoped>
.mb-4 {
	margin-bottom: 1rem;
}
</style>