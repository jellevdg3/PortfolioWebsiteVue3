<template>
	<v-app-bar app color="primary" dark>
		<v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
		<v-toolbar-title>Jelle's Portfolio</v-toolbar-title>
		<v-spacer></v-spacer>
		<v-btn text class="d-none d-md-flex" @click="scrollTo('about')">About Me</v-btn>
		<v-btn text class="d-none d-md-flex" @click="scrollTo('projects')">Projects</v-btn>
		<v-btn text class="d-none d-md-flex" @click="scrollTo('work-experience')">Work Experience</v-btn>
	</v-app-bar>

	<v-navigation-drawer v-model="drawer" app temporary>
		<v-list>
			<v-list-item link @click="scrollTo('about')">
				<v-list-item-title>About Me</v-list-item-title>
			</v-list-item>
			<v-list-item link @click="scrollTo('projects')">
				<v-list-item-title>Projects</v-list-item-title>
			</v-list-item>
			<v-list-item link @click="scrollTo('work-experience')">
				<v-list-item-title>Work Experience</v-list-item-title>
			</v-list-item>
		</v-list>
	</v-navigation-drawer>
</template>

<script>
export default {
	name: 'NavBar',
	data() {
		return {
			drawer: false,
		}
	},
	methods: {
		scrollTo(section) {
			const element = document.getElementById(section);
			if (element) {
				element.scrollIntoView();
				this.drawer = false;
			}
		},
	},
}
</script>
