
<template>
  <div id="carousel">
    <v-row class="mb-3" style="margin-left: 90px;">
      <v-img src="hotlogo.png" class="mt-2" max-height="25" max-width="25" alt="Book Shelf"></v-img>
      <h4 class="ml-2">Hot Reads
      </h4>
    </v-row>
    <v-sheet class="" elevation="0" max-width="1200" color="transparent">
      <v-slide-group v-model="model" class="pa-4" selected-class="bg-primary" prev-icon="mdi-arrow-lefts"
        next-icon="mdi-arrow-right" show-arrows>
        <v-slide-group-item v-for="(book, i) in books" :key="i">
          <v-card :elevation="0" color="transparent" :class="['ma-2']" height="260" width="190">
            <v-img :src="book.img">
            </v-img>
          </v-card>
        </v-slide-group-item>
      </v-slide-group>

    </v-sheet>
  </div>
</template>

<script>



/* eslint-disable vue/multi-word-component-names */

export default {
  name: 'Carousel',
  data: () => ({
    books: [
      { 'img': 'book.png' },
      { 'img': 'book.png' },
      { 'img': 'book.png' },
      { 'img': 'book.png' },
      { 'img': 'book.png' },
      { 'img': 'book.png' },
      { 'img': 'book.png' },
      { 'img': 'book.png' },
      { 'img': 'book.png' },
      { 'img': 'book.png' },
      { 'img': 'book.png' },
      { 'img': 'book.png' },
      { 'img': 'book.png' },
      { 'img': 'book.png' },
      { 'img': 'book.png' },
      { 'img': 'book.png' },
      { 'img': 'book.png' },
      { 'img': 'book.png' },
    ],
  }),

};
</script>

<style scoped>
#carousel {
  /* z-index: 999999; */
  /* background-color: green; */
  margin-top: -200px;
  padding-left: 50px;
  /* padding-right: 90px; */
}

#carousel h4 {
  color: #1E1E1E;
  font-size: 28px;
  font-family: 'Gill Sans';
   font-weight: 300;
  margin-left: 100px;
}
</style>
