import { createRouter, createWebHistory } from 'vue-router'
import Projects from './views/Projects.vue'
import About from './views/About.vue'

const routes = [
	{ path: '/', name: 'Home', component: About },
	{ path: '/projects', name: 'Projects', component: Projects },
]

const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior() {
		return { left: 0, top: 0 }
	},
})

export default router