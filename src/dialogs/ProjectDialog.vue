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
				<ScreenshotCarousel ref="carousel" :height="carouselHeight" :screenshots="currentProject.screenshots"
					:active-slide="activeSlide" @update:activeSlide="updateActiveSlide" />

				<div class="thumbnail-container">
					<div class="thumbnail-row">
						<div v-for="(screenshot, index) in currentProject.screenshots" :key="index"
							class="thumbnail-col">
							<v-img :src="screenshot" class="thumbnail mr-4" @click="goToSlide(index)"
								:class="{ 'selected-thumbnail': index === activeSlide }"
								:ref="'thumbnail-' + index"></v-img>
						</div>
					</div>
				</div>

				<p class="mt-4">{{ currentProject.description }}</p>
			</v-card-text>
			<v-card-actions class="d-flex justify-space-between">
				<v-btn text @click="prev">Previous Project</v-btn>
				<v-btn text @click="next">Next Project</v-btn>
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
			carouselHeight: 200, // Default height
			activeSlide: 0, // Track the active slide
		}
	},
	mounted() {
		this.updateCarouselHeight()
		window.addEventListener('resize', this.updateCarouselHeight)
	},
	beforeDestroy() {
		window.removeEventListener('resize', this.updateCarouselHeight)
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
			this.activeSlide = index
			this.scrollThumbnailIntoView(index)
		},
		updateCarouselHeight() {
			const width = window.innerWidth
			if (width < 600) {
				this.carouselHeight = 200
			} else if (width < 1000) {
				this.carouselHeight = 300
			} else if (width < 1921) {
				this.carouselHeight = 400
			} else {
				this.carouselHeight = 500
			}
		},
		updateActiveSlide(index) {
			this.activeSlide = index
			this.scrollThumbnailIntoView(index)
		},
		scrollThumbnailIntoView(index) {
			this.$nextTick(() => {
				const thumbnail = this.$refs[`thumbnail-${index}`]
				if (thumbnail && thumbnail[0]) {
					thumbnail[0].$el.scrollIntoView({
						behavior: 'smooth',
						block: 'nearest',
						inline: 'nearest',
					})
				}
			})
		},
	},
	watch: {
		activeSlide(newIndex) {
			this.scrollThumbnailIntoView(newIndex)
		},
		currentProject(newProject) {
			this.activeSlide = 0
			if (this.$refs.carousel && typeof this.$refs.carousel.goTo === 'function') {
				this.$refs.carousel.goTo(0)
			}
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
}

.thumbnail-row {
	display: flex;
	flex-wrap: nowrap;
}

.thumbnail-col {
	padding-right: 8px;
}

.thumbnail {
	width: 100px;
	height: 60px;
	object-fit: cover;
	cursor: pointer;
	border: 2px solid transparent;
	transition: border 0.3s;
}

.selected-thumbnail {
	border: 2px solid #ff5722;
	/* Highlight color */
}
</style>