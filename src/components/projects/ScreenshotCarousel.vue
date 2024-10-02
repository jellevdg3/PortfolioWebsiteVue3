<template>
	<v-carousel hide-delimiters :show-arrows="true" v-model="localActiveSlide" ref="carousel">
		<v-carousel-item v-for="(screenshot, index) in screenshots" :key="index">
			<v-img :src="screenshot"></v-img>
		</v-carousel-item>
	</v-carousel>
</template>

<script>
export default {
	name: 'ScreenshotCarousel',
	props: {
		screenshots: {
			type: Array,
			required: true,
		},
		height: {
			type: Number,
			default: 200,
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
			this.$emit('update:activeSlide', newVal)
		},
		activeSlide(newVal) {
			if (newVal !== this.localActiveSlide) {
				this.localActiveSlide = newVal
			}
		},
	},
	methods: {
		goTo(index) {
			this.localActiveSlide = index;
		},
	},
};
</script>

<style scoped>
.v-carousel {
	height: 100%;
}

.v-carousel-item {
	height: 100%;
}

.v-img {
	object-fit: contain;
	height: 100%;
}
</style>