<template>
  <v-app>
    <Header />
    <Hero />
    <Carousel/>
    <Category/>
    <Footer />
    
  </v-app>
</template>

<script>

import Hero from "./components/Hero.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Carousel from "./components/Carousel.vue";
import Category from "./components/Category.vue";


export default {
  name: 'App',
  components: {
    Header,
    Hero,
    Carousel,
    Category,
    Footer
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
