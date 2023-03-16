<template>
    <div id="hero">
        <v-container class="ma-0 pa-0" style="padding-top: 0px;">
            <v-row>
                <v-col lg="6" class="side-home">
                    <p class="intro-text">Get Your <strong> favourite books </strong> all in <strong>one Place</strong></p>
                
                    <v-btn style="background-color: #1C3F3A;color: #ffffff;text-transform: capitalize"
                        class="white--text mr-10" rounded>View Categories</v-btn>
                </v-col>

                <v-col class="rafiki-img" lg="6" style="overflow-x: hidden;">
                    <img alt="Home image" src="../assets/rafiki.png">
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
#hero {
    background-color: #EAE6D7;
    padding-left: 130px;
    padding-right: 130px;
}

.side-home {
    text-align: left;
    padding-top: 50px;

}

p.intro-text {
    font-size: 50px;
    margin-bottom: 30px;
    line-height: 1;
    letter-spacing: normal;
    /* font-weight: 200; */
    font-family: 'Gill Sans';
    color: #1C3F3A;
}
.rafiki-img img {
    /* background-color: red; */
   max-width: 100%;
   max-height: 100%;
}

</style>