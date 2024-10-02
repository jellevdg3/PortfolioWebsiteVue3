<template>
	<v-app>
		<NavBar />
		<v-main>
			<div class="half-empty-space"></div>
			<div id="about" class="mt-16 scroll-offset">
				<About />
			</div>

			<div class="half-empty-space"></div>
			<v-divider class="my-6"></v-divider>
			<div class="half-empty-space"></div>

			<div id="projects" class="scroll-offset">
				<Projects />
			</div>

			<div class="half-empty-space"></div>
			<v-divider class="my-6"></v-divider>
			<div class="half-empty-space"></div>

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