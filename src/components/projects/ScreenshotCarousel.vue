<template>
  <v-carousel hide-delimiters height="400">
    <v-carousel-item v-for="(item, i) in screenshots" :key="i">
      <v-img :src="item"></v-img>
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
}
</script>