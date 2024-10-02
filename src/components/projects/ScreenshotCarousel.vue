<template>
	<v-carousel hide-delimiters :show-arrows="true" v-model="activeSlide" ref="carousel">
		<v-carousel-item v-for="(screenshot, index) in screenshots" :key="index">
			<v-img :src="screenshot" @click="$emit('screenshot-clicked', screenshot)"></v-img>
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
	},
	data() {
		return {
			activeSlide: 0,
		};
	},
	methods: {
		goTo(index) {
			this.activeSlide = index;
		},
	},
};
</script>

<style scoped>
.v-carousel-item {}
</style>