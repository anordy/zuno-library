<template>
  <div id="book-shelf">
    <v-container>
      <v-row >
        <v-col cols="12">
          <v-card style="background-color: #FBFBFB;border-color: #98A3A1;" height="70px" :elevation="0" variant="outlined">
            <v-row>
             
              <v-card-text>
                <v-row justify="center">
                  <v-col cols="3" class="dropdown">
                    <v-select class="mr-auto" :items="items" placeholder="All Categories" density="categories" :elevetion="0" variant="plain"></v-select>

                     </v-col>
                  <v-col cols="7">
                    <!-- <v-divider vertical></v-divider> -->
                    <v-text-field :elevetion="0" label="Find the Book you like..."
                  variant="plain"></v-text-field>
                 
                  </v-col>
                  <v-col cols="2" class="rigthColumnn">
                    <v-btn x-small class="searchButton ml-auto mt-3">
                      search
                      <v-icon class="ml-3">mdi-magnify</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card-text>

            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="ml-1">
        <v-img src="book-shelf.png" class="mt-2" max-height="25" max-width="25" alt="Book Shelf"></v-img>
        <h4 style="color: #1E1E1E;font-size: 28px;font-family: 'Gill Sans',font-weight: 300" class="ml-2">Book
          Shelf</h4>
      </v-row>

      <v-row justify="center" class="space">
        <v-col cols="12" xs="12" sm="4" md="3" lg="3" v-for="(book, i) in books" :key="i">
          <v-card :elevation="0" class="text-left" max-width="200">
            <div class="img-container">
              <v-img class="book-img" src="rect.png" alt="book" max-height="100%" max-width="100%" contain></v-img>
              <v-icon class="book-mark" size="sm">mdi-bookmark</v-icon>
            </div>
            <v-card-title class="card-title">{{ book.title
            }}</v-card-title>
            <v-card-subtitle class="card-subtitle">{{ book.author }}</v-card-subtitle>
            <v-card-actions>
              <v-icon size="sm" style="color: #F8921C;">mdi-star</v-icon>
              <p style="color: #000000;font-size: 15px;font-family: 'Gill Sans', 'Gill Sans;" class="ml-2">5.0</p>
            </v-card-actions>

          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
/* eslint-disable vue/multi-word-component-names */
export default {
  name: 'book',
  data: () => ({
    bpm: 1,
    books: [
      { img: "../assets/book.png", title: "A tale of two friends / adapted by Ellie O'Ryan ; illustrated by Tom Caulfield, Frederick Gardner, Megan Petasky, and Allen Tam.", author: "O'Ryan, Ellie", price: "$13" },
      { img: "../assets/book.png", title: "Perry's Ice Cream lorem ipsum direcs fsfsf", author: "1O'Ryan, Ellie", price: "$23" },
      { img: "../assets/book.png", title: "The Sandcastle Empire / Kayla Olson.", author: "1O'Ryan, Ellie", price: "$17" },
      { img: "../assets/book.png", title: "Peace, love & Wi-Fi : a ZITS treasury / by Jerry Scott and Jim Borgman.", author: "Potato, Papaya, Oil, Cabbage", price: "$40" },
      { img: "../assets/book.png", title: "The Sandcastle Empire / Kayla Olson.", author: "1O'Ryan, Ellie", price: "$20" },
      { img: "../assets/book.png", title: "The Sandcastle Empire / Kayla Olson.", author: "1O'Ryan, Ellie", price: "$10" },
      { img: "../assets/book.png", title: "Peace, love & Wi-Fi : a ZITS treasury / by Jerry Scott and Jim Borgman.", author: "1O'Ryan, Ellie", price: "$10" },
      { img: "../assets/book.png", title: "The Sandcastle Empire / Kayla Olson.", author: "1O'Ryan, Ellie", price: "$10" },
      { img: "../assets/book.png", title: "The Sandcastle Empire / Kayla Olson.", author: "1O'Ryan, Ellie", price: "$20" },
      { img: "../assets/book.png", title: "The Sandcastle Empire / Kayla Olson.", author: "1O'Ryan, Ellie", price: "$10" },
      { img: "../assets/book.png", title: "Peace, love & Wi-Fi : a ZITS treasury / by Jerry Scott and Jim Borgman.", author: "1O'Ryan, Ellie", price: "$10" },
      { img: "../assets/book.png", title: "The Sandcastle Empire / Kayla Olson.", author: "1O'Ryan, Ellie", price: "$10" },
    ],
    items: ['Categories', 'Colorado', 'Florida', 'Georgia']
  }),
  methods: {
    decrement() {
      this.bpm--
    },
    increment() {
      this.bpm++
    },

  },
};
</script>

<style scoped>
#book-shelf {
  background-color: #ffffff;
  padding-top: 50px;
  padding-left: 100px;
  padding-right: 90px;
}

.rigthColumnn {
  /* margin-left: -90px; */
  /* background-color: red; */
}
.dropdown {
  display: flex;
  align-items: center;
  /* background-color: green; */
}

.searchButton {
  background-color: #1C3F3A;
  color: #ffffff;
  text-transform: capitalize;
  padding-left: 30px;
  padding-right: 30px;
}

#book-shelf h4 {
  color: #1E1E1E;
  font-size: 20px;
  font-style: normal;
  font-family: 'Gill Sans';
  letter-spacing: 0.2;
}

#book-shelf .img-container {
  height: 100%;
  width: 100%;
  /* background-color: lightgreen; */
  position: relative;
  /* background-color: red; */
}


#book-shelf .book-mark {
  position: absolute;
  top: 0;
  right: 0;
  padding-right: 8px;
  padding-top: 8px;
  color: #0F172A;
  /* background-color: red; */
}



.card-title {
  color: #1E1E1E;
  text-transform: capitalize;
  padding: 0%;
  font-size: 22px;
  font-family: 'Times New Roman', Times, serif;
  font-weight: 600;
}

#book-shelf .card-subtitle {
  color: #000000;
  padding: 0%;
}
</style>