<template>
	<v-dialog v-model="internalDialog" fullscreen @click="closeBackground" class="background">
		<v-card class="pa-0 ma-0 d-flex justify-center background"
			style="display: flex; justify-content: center; align-items: center;">
			<div v-if="internalDialog" class="content-container" style="max-width: 1200px; width: 100%;">
				<v-card-title class="d-flex justify-space-between align-center">
					<span class="headline">{{ currentProject.title }}</span>
					<v-btn icon @click="close">
						<v-icon>mdi-close</v-icon>
					</v-btn>
				</v-card-title>
				<v-card-text class="pa-0 ma-0">
					<ScreenshotCarousel ref="carousel" :screenshots="currentProject.screenshots"
						:active-slide="activeSlide" @update:activeSlide="updateActiveSlide" />
					<div class="thumbnail-container">
						<div class="thumbnail-row">
							<div v-for="(screenshot, index) in currentProject.screenshots" :key="index"
								class="thumbnail-col">
								<v-img :src="screenshot" class="thumbnail" @click="goToSlide(index)"
									:class="{ 'selected-thumbnail': index === activeSlide }"
									:ref="'thumbnail-' + index"></v-img>
							</div>
						</div>
					</div>
					<p class="mt-4 ml-2">{{ currentProject.description }}</p>
				</v-card-text>
				<v-card-actions class="d-flex justify-space-between pa-0 ma-0">
					<v-btn text @click="prev">Previous Project</v-btn>
					<v-btn text @click="next">Next Project</v-btn>
				</v-card-actions>
			</div>
		</v-card>
		<ScreenshotDialog v-model="screenshotDialog" :src="selectedScreenshot" />
	</v-dialog>
</template>

<script>
import ScreenshotCarousel from '../components/projects/ScreenshotCarousel.vue';
import ScreenshotDialog from './ScreenshotDialog.vue';

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
				return this.modelValue;
			},
			set(value) {
				this.$emit('update:modelValue', value);
			},
		},
	},
	data() {
		return {
			screenshotDialog: false,
			selectedScreenshot: '',
			activeSlide: 0,
		};
	},
	methods: {
		closeBackground(event) {
			if (event.target.classList.contains('background')) {
				this.internalDialog = false;
			}
		},
		close() {
			this.internalDialog = false;
		},
		next() {
			this.$emit('next');
		},
		prev() {
			this.$emit('prev');
		},
		goToSlide(index) {
			this.$refs.carousel.goTo(index);
			this.activeSlide = index;
			this.scrollThumbnailIntoView(index);
		},
		updateActiveSlide(index) {
			this.activeSlide = index;
			this.scrollThumbnailIntoView(index);
		},
		scrollThumbnailIntoView(index) {
			this.$nextTick(() => {
				const thumbnail = this.$refs[`thumbnail-${index}`];
				if (thumbnail && thumbnail[0]) {
					thumbnail[0].$el.scrollIntoView({
						behavior: 'smooth',
						block: 'nearest',
						inline: 'center',
					});
				}
			});
		},
	},
	watch: {
		activeSlide(newIndex) {
			this.scrollThumbnailIntoView(newIndex);
		},
		currentProject() {
			this.activeSlide = 0;
			if (this.$refs.carousel && typeof this.$refs.carousel.goTo === 'function') {
				this.$refs.carousel.goTo(0);
			}
		},
	},
};
</script>

<style scoped>
.headline {
	flex: 1;
}

.v-dialog .v-card {
	background-color: #24242498;
	margin: 0 !important;
	padding: 0 !important;
}

.v-card-text p {
	color: #ffffff;
}

.content-container {
	background-color: #242424;
	border-radius: 5px;
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
	height: 52px;
	object-fit: cover;
	cursor: pointer;
	border: 2px solid transparent;
	transition: border 0.3s;
}

.selected-thumbnail {
	border: 2px solid #cfb0ff;
}
</style>
