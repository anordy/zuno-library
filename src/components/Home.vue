<template>
    <div id="home">
      <v-row>
        <v-col class="home-content">
            <p class="intro-text">Get your <strong> favourite <br> books </strong> all in <strong>one place</strong></p>
         <a href="#" class="btn">View Categories</a>
        </v-col>
        <v-col class="home-img">
            <img src="rafiki.png" alt="profile">
        </v-col>
      </v-row>
    </div>
</template>


<script>
/* eslint-disable vue/multi-word-component-names */
export default {
    name: 'Home'
}


</script>


<style scoped>
/* @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@600&display=swap'); */
#home {
    background-color: #EAE6D7;
    padding-left: 10%;
    padding-right: 2%;
    padding-top: 6%;
    height: 83vh;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    /* align-items: center; */
}


.home-img img{
    width: 35vw;
    height: 70vh;
    animation: floatImage 4s ease-in-out infinite;
}

.btn {
    display: inline-block;
    padding-left: 25px;
    padding-right: 25px;
    background: var(--second-bg-color);
    border-radius: 4rem;
    font-size: 1rem;
    color: var(--text-color);
    font-weight: 200;
}

p.intro-text {
    font-size: 50px;
    margin-bottom: 30px;
    margin-top: 70px;
    line-height: 1;
    letter-spacing: normal;
    font-weight: 500;
    color: #1C3F3A;
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
    .home {
        flex-direction: column;
    }

    .home-content p {
        font-size: 2.6rem;
        padding-top: 5rem;
    }
 

    .home-img img {
        width: 70vw;
        padding-bottom: 13rem;
    }
}

@media (max-width: 617px) {
    .home-content p {
        font-size: 2.6rem;
        padding-top: 5rem;
    }
 

    .home-img img {
        width: 70vw;
        padding-bottom: 13rem;
    }
}

@media (max-width: 450px) {
    .home-content p {
        font-size: 2.6rem;
        padding-top: 5rem;
    }
 

    .home-img img {
        width: 100vw;
        padding-bottom: 15rem;
    }
   
}

@media (max-width: 350px) {
  
}
</style>