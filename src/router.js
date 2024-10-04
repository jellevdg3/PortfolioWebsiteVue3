import { createRouter, createWebHistory } from 'vue-router'

const routes = [
]

const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior() {
		return { left: 0, top: 0 }
	},
})

export default router