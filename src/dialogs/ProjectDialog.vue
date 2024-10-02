<template>
	<v-dialog v-model="internalDialog" max-width="1200px">
		<v-card>
			<v-card-title class="d-flex justify-space-between align-center">
				<span class="headline">{{ currentProject.title }}</span>
				<v-btn icon @click="close">
					<v-icon>mdi-close</v-icon>
				</v-btn>
			</v-card-title>
			<v-card-text>
				<ScreenshotCarousel @screenshot-clicked="openScreenshotDialog" :screenshots="currentProject.screenshots"
					ref="carousel" />

				<div class="thumbnail-container">
					<v-row no-gutters>
						<v-col v-for="(screenshot, index) in currentProject.screenshots" :key="index"
							class="thumbnail-col" cols="auto">
							<v-img :src="screenshot" class="thumbnail mr-4" @click="goToSlide(index)"></v-img>
						</v-col>
					</v-row>
				</div>

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

		<ScreenshotDialog v-model="screenshotDialog" :src="selectedScreenshot" />
	</v-dialog>
</template>

<script>
import ScreenshotCarousel from '../components/projects/ScreenshotCarousel.vue'
import ScreenshotDialog from './ScreenshotDialog.vue'

export default {
	name: 'ProjectDialog',
	components: {
		ScreenshotCarousel,
		ScreenshotDialog,
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
	data() {
		return {
			screenshotDialog: false,
			selectedScreenshot: '',
		}
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
		goToSlide(index) {
			this.$refs.carousel.goTo(index)
		},
		openScreenshotDialog(src) {
			this.selectedScreenshot = src
			this.screenshotDialog = true
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

.thumbnail-container {
	margin-top: 16px;
	overflow-x: auto;
	white-space: nowrap;
}

.thumbnail-col {
	padding-right: 8px;
}

.thumbnail {
	width: 100px;
	height: 60px;
	object-fit: cover;
	cursor: pointer;
}
</style>