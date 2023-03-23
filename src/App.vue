<template>
  <v-app>
    <Navbar/>
    <Home/>
    <Carousel/>
    <Book/>
    <Footer /> 
    
  </v-app>
</template>

<script>

import Navbar from "./components/Navbar.vue";
import Home from "./components/Home.vue";
import Book from "./components/Book.vue";
import Carousel from "./components/Carousel.vue";
import Footer from "./components/Footer.vue";


export default {
  name: 'App',
  components: {
    Navbar,
    Home,
    Carousel,
    Book,
    Footer
  },

}
</script>

<style>

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    border: none;
    outline: none;
    scroll-behavior: smooth;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

:root {
  --bg-color: #EAE6D7;
  --second-bg-color: #1C3F3A;
    --text-color: #ffffff;
    --main-color: #1E1E1E;
}
html {
    font-size: 62.5%;
    overflow-x: hidden;
}

body {
    background: var(--bg-color);
    color: var(--text-color);
}

section {
    min-height: 100vh;
    padding: 10rem 9% 2rem;
}

@media (max-width: 1200px) {
    html {
        font-size: 55%;
    }
}

@media (max-width: 991px) {

    section {
        padding: 10rem 3% 2rem;
    }



}

@media (max-width: 768px) {
    #menu-icon {
        display: block;
    }

    .navbar {
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        padding: 1rem 3%;
        background: var(--bg-color);
        border-top: 1rem 3%;
        background: var(--bg-color);
        border-top: .1rem solid rgba(0,0,0,.2);
        box-shadow: 0 .5rem 1rem rgba(0,0,0,.2) ;
        display: none;
    }

    .navbar.active {
        display: block;
         
    }

    .navbar a {
        display: block;
        font-size: 2rem;
        margin: 3rem 60;
    }

    .home {
        flex-direction: column;
    }

    .home-content h3 {
        font-size: 2.6rem;
    }
    .home-content h1 {
        font-size: 5rem;
    }

    .home-img img {
        width: 70vw;
        margin-top: 4rem;
    }
    .book {
     margin-bottom: 3rem;   
    }
    .book-container {
     grid-template-columns: repeat(2, 1fr);
    } 
}

@media (max-width: 617px) {
    .book-container {
        grid-template-columns: 1fr;
    } 
}

@media (max-width: 450px) {
    html {
        font-size: 50%;
    }
   
}

@media (max-width: 350px) {
    .home-img img {
        width: 90vw;
    }
    #footer {
        flex-direction: column-reverse;
    }
    /* .img-footer {
        display: none;
    } */
    #footer p {
        text-align: center;
        margin-top: 2rem;
    }
}


</style>
