<template>
	<v-container>
		<v-row>
			<v-col cols="12" md="4" class="text-center">
				<v-avatar size="350" class="mb-12">
					<v-img src="https://via.placeholder.com/350" alt="Profile Picture"></v-img>
				</v-avatar>
			</v-col>
			<v-col cols="12" md="8">
				<h2>About Me</h2>
				<p>
					Hi! My name is Jelle, and I am a passionate software engineer with 5 years of experience.
					I have a foundation in game development, but have always diversified my skills to encompass a wide
					range of software development projects. This has included work on mobile apps, web applications, and
					enterprise-level software systems. My experience in game development has instilled in me a strong
					focus on user experience, optimization, and an attention to detail that I bring to all of my
					projects.
					My current position is Lead Developer at ChimpWorks where I lead a small team of 10 developers to
					work on their biggest project where we iteratively release new features to keep it interesting for
					100+ million players.
				</p>

				<h3 class="mt-6">Skills</h3>
				<v-chip-group multiple column>
					<v-chip>Scaled Agile Framework</v-chip>
					<v-chip>Scrum</v-chip>
					<v-chip>Agile Methodologies</v-chip>
					<v-chip>Microsoft Azure</v-chip>
					<v-chip>Object-Oriented Programming (OOP)</v-chip>
					<v-chip>English</v-chip>
					<v-chip>Programming</v-chip>
					<v-chip>C#</v-chip>
					<v-chip>C++</v-chip>
					<v-chip>Game Development</v-chip>
					<v-chip>Software Architecture</v-chip>
					<v-chip>HTML5</v-chip>
					<v-chip>Unity</v-chip>
					<v-chip>Unreal Engine 4</v-chip>
					<v-chip>Unreal Engine</v-chip>
					<v-chip>Game Programming</v-chip>
					<v-chip>OpenGL Shading Language (GLSL)</v-chip>
					<v-chip>DirectX</v-chip>
					<v-chip>Mobile Game Development</v-chip>
					<v-chip>Parallel Programming</v-chip>
					<v-chip>Gameplay Programming</v-chip>
					<v-chip>HLSL</v-chip>
					<v-chip>OpenGL</v-chip>
				</v-chip-group>

				<h3 class="mt-6">Education</h3>
				<v-card class="mb-4">
					<v-card-title>
						<div>
							<strong>Bachelor of Science in Computer Science</strong>
							<div class="grey--text text--lighten-1">University of Your Choice, 2013 - 2017</div>
						</div>
					</v-card-title>
					<v-card-text>
						<p>
							Description of your educational background, relevant courses, projects, and achievements.
						</p>
					</v-card-text>
				</v-card>

				<v-btn color="primary" class="mt-4" :href="cvLink" target="_blank">Download Resume</v-btn>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
	name: 'About',
	data() {
		return {
			cvLink: '/documents/cv-template.pdf',
		}
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
</style>