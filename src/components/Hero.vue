<template>
    <div id="hero">
        <v-container class="ma-0 pa-0" style="padding-top: 0px;" fluid>
            <v-row>
                <v-col lg="6" class="side-home">
                    <p class="intro-text">Get your <strong> favourite books </strong> all in <strong>one place</strong></p>
                
                    <v-btn style="background-color: #1C3F3A;color: #ffffff;text-transform: capitalize"
                        class="white--text" rounded>View Categories</v-btn>
                </v-col>

                <v-col lg="6" class="right-side" style="overflow-x: hidden;;">
                    <v-img alt="Home image" contain src="rafiki.png"></v-img>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>


<script>
/* eslint-disable vue/multi-word-component-names */
export default {
    name: 'Hero'
}


</script>


<style scoped>
/* @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@600&display=swap'); */
#hero {
    background-color: #EAE6D7;
    padding-left: 130px;
    padding-right: 40px;
    height: 83vh;
}

.side-home {
    text-align: left;
    padding-top: 50px;

}
.right-side {
    /* background-color: red; */
    height: 540px;
}
p.intro-text {
    font-size: 50px;
    margin-bottom: 30px;
    margin-top: 70px;
    line-height: 1;
    letter-spacing: normal;
    font-weight: 500;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        color: #1C3F3A;
}


</style>