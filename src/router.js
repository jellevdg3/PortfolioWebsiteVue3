// src/router.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Projects from './views/Projects.vue'
import About from './views/About.vue'
import ProjectDetails from './views/ProjectDetails.vue'

const routes = [
	{ path: '/', name: 'Home', component: Home },
	{ path: '/projects', name: 'Projects', component: Projects },
	{ path: '/about', name: 'About', component: About },
	{ path: '/projects/:id', name: 'ProjectDetails', component: ProjectDetails },
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
