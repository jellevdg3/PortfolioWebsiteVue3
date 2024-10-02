<template>
	<v-app>
		<NavBar />
		<v-main>
			<div class="half-empty-space"></div>
			<div id="about" class="mt-16 scroll-offset">
				<About />
			</div>
			<div class="full-empty-space"></div>
			<v-divider class="my-6"></v-divider>
			<div id="projects" class="scroll-offset">
				<Projects />
			</div>
			<div class="full-empty-space"></div>
			<v-divider class="my-6"></v-divider>
			<div id="work-experience" class="scroll-offset">
				<WorkExperience />
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
import WorkExperience from './components/WorkExperience.vue' // Import WorkExperience as a component

export default {
	name: 'App',
	components: {
		NavBar,
		Footer,
		About,
		Projects,
		WorkExperience, // Register WorkExperience component
	},
}
</script>

<style>
.scroll-offset {
	scroll-margin-top: 64px;
}

.full-empty-space {
	height: 10vw;
}

.half-empty-space {
	height: 5vw;
}
</style>