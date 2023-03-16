<template>
    <div id="hotbook">
        <v-container  fluid>
            <v-row>
               <img src="../assets/hotlogo.png"  alt="Hot books">
               <h4 class="ml-2">Hot Reads</h4>
            </v-row>
        </v-container>
    </div>
</template>


<script>
/* eslint-disable vue/multi-word-component-names */
export default {
    name: 'Hotbook'
}


</script>


<style scoped>
#hotbook {
    background-color: lightblue;
    margin-top: -200px;
    padding-left: 130px;
    padding-right: 130px;
    height: 80vh;
}

#hotbook h4 {
    color: #1E1E1E;
    font-size: 20px;
    font-style: normal;
    font-family: 'Gill Sans';
    letter-spacing: 0.2;
}
</style>