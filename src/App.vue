<template>
  <v-app>
    <Navbar/>
   <Hero />
    <Carousel/>
    <Category/>
    <Footer /> 
    
  </v-app>
</template>

<script>

import Hero from "./components/Hero.vue";
import Navbar from "./components/Navbar.vue";
import Carousel from "./components/Carousel.vue";
import Category from "./components/Category.vue";
import Footer from "./components/Footer.vue";


export default {
  name: 'App',
  components: {
    Navbar,
    Hero,
    Carousel,
    Category,
    Footer
  },

}
</script>

<style>

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: 400;
}


</style>
