<template>
	<v-app>
		<NavBar />
		<v-main>
			<div id="about" class="scroll-offset">
				<v-card>
					<div class="half-empty-space"></div>
					<h1>About Me</h1>
					<About class="mt-4" />
					<div class="full-empty-space"></div>
				</v-card>
			</div>

			<div class="half-empty-space"></div>

			<div id="projects" class="scroll-offset">
				<v-card>
					<div class="half-empty-space"></div>
					<h1>Projects</h1>
					<Projects class="mt-4" />
					<div class="full-empty-space"></div>
				</v-card>
			</div>

			<div class="half-empty-space"></div>

			<div id="work-experience" class="scroll-offset">
				<v-card>
					<div class="half-empty-space"></div>
					<h1>Work Experience</h1>
					<WorkExperience class="mt-4" />
					<div class="full-empty-space"></div>
				</v-card>
			</div>
		</v-main>
		<Footer />
	</v-app>
</template>

<script>
import NavBar from './components/common/NavBar.vue'
import Footer from './components/common/Footer.vue'
import About from './views/About.vue'
import Projects from './views/Projects.vue'
import WorkExperience from './views/WorkExperience.vue'

export default {
	name: 'App',
	components: {
		NavBar,
		Footer,
		About,
		Projects,
		WorkExperience,
	},
}
</script>

<style scoped>
.scroll-offset {
	scroll-margin-top: -40px;
}

@media (max-width: 1919px) {
	.scroll-offset {
		scroll-margin-top: 0px;
	}
}

@media (max-width: 1000px) {
	.scroll-offset {
		scroll-margin-top: 40px;
	}
}

.full-empty-space {
	height: 10vw;
}

.half-empty-space {
	height: 5vw;
}

h1 {
	text-align: center;
	font-size: 5rem;

	@media (max-width: 600px) {
		font-size: 3rem;
	}
}

.v-card {
	background-color: #181818 !important;
}
</style>