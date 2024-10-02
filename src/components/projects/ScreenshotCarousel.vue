<template>
	<div class="carousel-wrapper">
		<v-carousel hide-delimiters :show-arrows="false" v-model="localActiveSlide" ref="carousel" @click="handleClick">
			<v-carousel-item v-for="(screenshot, index) in screenshots" :key="index">
				<v-img :src="screenshot"></v-img>
			</v-carousel-item>
		</v-carousel>

		<!-- Left Arrow -->
		<v-btn class="carousel-arrow left-arrow" icon @click.stop="prev" aria-label="Previous Slide">
			<v-icon>mdi-chevron-left</v-icon>
		</v-btn>

		<!-- Right Arrow -->
		<v-btn class="carousel-arrow right-arrow" icon @click.stop="next" aria-label="Next Slide">
			<v-icon>mdi-chevron-right</v-icon>
		</v-btn>
	</div>
</template>

<script>
export default {
	name: 'ScreenshotCarousel',
	props: {
		screenshots: {
			type: Array,
			required: true,
		},
		activeSlide: {
			type: Number,
			default: 0,
		},
	},
	data() {
		return {
			localActiveSlide: this.activeSlide,
		};
	},
	watch: {
		localActiveSlide(newVal) {
			this.$emit('update:activeSlide', newVal);
		},
		activeSlide(newVal) {
			if (newVal !== this.localActiveSlide) {
				this.localActiveSlide = newVal;
			}
		},
	},
	methods: {
		goTo(index) {
			this.localActiveSlide = index;
		},
		handleClick(event) {
			const carouselWidth = this.$refs.carousel.$el.clientWidth;
			const clickX = event.clientX - this.$refs.carousel.$el.getBoundingClientRect().left;
			if (clickX < carouselWidth / 2) {
				this.prev();
			} else {
				this.next();
			}
		},
		prev() {
			if (this.localActiveSlide > 0) {
				this.localActiveSlide -= 1;
			} else {
				this.localActiveSlide = this.screenshots.length - 1;
			}
		},
		next() {
			if (this.localActiveSlide < this.screenshots.length - 1) {
				this.localActiveSlide += 1;
			} else {
				this.localActiveSlide = 0;
			}
		},
	},
};
</script>

<style scoped>
.carousel-wrapper {
	position: relative;
	height: 100%;
}

.v-carousel {
	height: 100%;
	cursor: pointer;
}

.v-carousel-item {
	height: 100%;
}

.v-img {
	object-fit: contain;
	height: 100%;
}

/* Arrow Button Styles */
.carousel-arrow {
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	background-color: rgba(255, 255, 255, 0.5);
	/* Semi-transparent background */
	border-radius: 50%;
	padding: 8px;
	transition: background-color 0.3s;
}

.carousel-arrow:hover {
	background-color: rgba(255, 255, 255, 0.8);
}

.left-arrow {
	left: 16px;
}

.right-arrow {
	right: 16px;
}

/* Optional: Adjust icon color */
.carousel-arrow .v-icon {
	color: rgba(0, 0, 0, 0.7);
}
</style>
