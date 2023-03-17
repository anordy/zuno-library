<template>
  <v-app>
    <Header />
    <Hero />
    <BookShelf />
    <Footer />
    
  </v-app>
</template>

<script>

import Hero from "./components/Hero.vue";
import Header from "./components/Header.vue";
import BookShelf from "./components/BookShelf.vue";
import Footer from "./components/Footer.vue";
// import Hotbook from "./components/Hotbook.vue";


export default {
  name: 'App',
  components: {
    Header,
    Hero,
    BookShelf,
    Footer
    // Hotbook
  },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
