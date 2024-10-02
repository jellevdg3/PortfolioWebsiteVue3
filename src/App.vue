<template>
  <v-app>
    <NavBar />
    <v-main>
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import NavBar from './components/common/NavBar.vue'
import Footer from './components/common/Footer.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    Footer,
  },
}
</script>