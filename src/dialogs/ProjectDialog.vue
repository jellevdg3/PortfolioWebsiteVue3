<template>
	<v-dialog v-model="internalDialog" max-width="800px">
		<v-card>
			<v-card-title class="d-flex justify-space-between align-center">
				<span class="headline">{{ currentProject.title }}</span>
				<v-btn icon @click="close">
					<v-icon>mdi-close</v-icon>
				</v-btn>
			</v-card-title>
			<v-card-text>
				<ScreenshotCarousel :screenshots="currentProject.screenshots" />
				<p class="mt-4">{{ currentProject.description }}</p>
			</v-card-text>
			<v-card-actions class="justify-end">
				<v-btn icon @click="prev">
					<v-icon>mdi-chevron-left</v-icon>
				</v-btn>
				<v-btn icon @click="next">
					<v-icon>mdi-chevron-right</v-icon>
				</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script>
import ScreenshotCarousel from '../components/projects/ScreenshotCarousel.vue'

export default {
	name: 'ProjectDialog',
	components: {
		ScreenshotCarousel,
	},
	props: {
		modelValue: {
			type: Boolean,
			required: true,
		},
		currentProject: {
			type: Object,
			default: () => ({}),
		},
	},
	computed: {
		internalDialog: {
			get() {
				return this.modelValue
			},
			set(value) {
				this.$emit('update:modelValue', value)
			},
		},
	},
	methods: {
		close() {
			this.internalDialog = false
		},
		next() {
			this.$emit('next')
		},
		prev() {
			this.$emit('prev')
		},
	},
}
</script>

<style scoped>
.headline {
	flex: 1;
}

.v-dialog .v-card {
	background-color: #242424;
}

.v-card-text p {
	color: #ffffff;
}
</style>