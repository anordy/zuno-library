<template>
  <div id="category">
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-card style="background-color: #FBFBFB;border-color: #98A3A1;" height="70px" :elevation="0"
            variant="outlined">
            <v-row>

              <v-card-text>
                <v-row justify="center">
                  <v-col cols="3" class="dropdown">
                    <v-select class="mr-auto" :items="items" placeholder="All Categories" density="categories"
                      :elevetion="0" variant="plain"></v-select>

                  </v-col>
                  <v-col cols="7">
                    <!-- <v-divider vertical></v-divider> -->
                    <v-text-field :elevetion="0" label="Find the Book you like..." variant="plain"></v-text-field>

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
      <v-row class="ml-1 mb-3">
        <v-img src="book-shelf.png" class="mt-2" max-height="25" max-width="25" alt="Book Shelf"></v-img>
        <h4 class="ml-2">Book
          Shelf</h4>
      </v-row>
      <v-col class="grid-container">
        <v-card v-for="(book, i) in books" :key='i' class="grid-item" flat>
          <div class="img-container">
            <v-img class="book-img" src="rect.png" alt="book" max-height="260" max-width="170" contain></v-img>
            <v-icon class="book-mark" size="x-small">mdi-bookmark</v-icon>
          </div>
          <v-card-title class="card-title">{{ book.title }}</v-card-title>
          <v-card-subtitle class="card-subtitle">{{ book.author }} </v-card-subtitle>
          <v-card-actions style="padding: 2px;">
            <v-icon size="x-small" class="card-icon">mdi-star</v-icon>
            <p class="ml-2">{{ book.rate }}</p>
          </v-card-actions>
        </v-card>
      </v-col>
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
      { img: "../assets/book.png", title: "A tale of two friends / adapted by Ellie O'Ryan ; illustrated by Tom Caulfield, Frederick Gardner, Megan Petasky, and Allen Tam.", author: "O'Ryan, Ellie", rate: "5.0" },
      { img: "../assets/book.png", title: "Peace, love & Wi-Fi : a ZITS treasury / by Jerry Scott and Jim Borgman.", author: "Scott, Jerry, 1955-", rate: "4.5" },
      { img: "../assets/book.png", title: "The Sandcastle Empire / Kayla Olson.", author: "Flinn, Kathleen", rate: "3.0" },
      { img: "../assets/book.png", title: "The aromatherapy garden : growing fragrant plants for happiness and well-being / Kathi Keville.", author: "Olson, Kayla", rate: "3.0" },
      { img: "../assets/book.png", title: "The Jolley-Rogers and the monster's gold / Jonny Duddle", author: "Pyper, Andrew", rate: "4.0" },
      { img: "../assets/book.png", title: "The Alchemists' Council / Cynthea Masson", author: "Duddle, Jonny", rate: "2.5" },
      { img: "../assets/book.png", title: "Naked '76 / Kevin Brooks.", author: "Keville, Kathi", rate: "2.5" },
      { img: "../assets/book.png", title: "Abakada ng pag-ibig : Paula / Maia Jose.", author: "Masson, Cynthea, 1962-", rate: "3.5" },
      { img: "../assets/book.png", title: "Broadcasting yearbook--marketbook issue.", author: "Brooks, Kevin", rate: "3.5" },
      { img: "../assets/book.png", title: "The great powers outage / William Boniface ; illustrations by Stephen Gilpin", author: "Jose, Maia", rate: "2.0" },
      { img: "../assets/book.png", title: "Last day, hooray! / Nancy Poydar.", author: "Picoult, Jodi, 1966-", rate: "5.0" },
      { img: "../assets/book.png", title: "Lone wolf [text (large print)] / Jodi Picoult.", author: "Boniface, William", rate: "3.5" },
      { img: "../assets/book.png", title: "Promise land : my journey through America's self-help culture / Jessica Lamb-Shapiro.", author: "Poydar, Nancy", rate: "4.5" },
      { img: "../assets/book.png", title: "A small hotel / Robert Olen Butler", author: "Lamb-Shapiro, Jessica", rate: "3.5" },
      { img: "../assets/book.png", title: "Haiti / Rosalie Ng Cheong-Lum & Leslie Jermyn.", author: "Butler, Robert Olen", rate: "2.0" },
      { img: "../assets/book.png", title: "The English daughter / Maggie Wadey.", author: "NgCheong-Lum, Roseline, 1962-", rate: "4.0" },
      { img: "../assets/book.png", title: "Curious George rides a bike [videorecording] : and a lot more monkeying around / Weston Woods", author: "Nestor, Sandy", rate: "5.0" },
      { img: "../assets/book.png", title: "Acid precipitation : hearings before the Subcommittee on Health and the Environment of the Committee on Energy and Commerce, House of Representatives, Ninety-seventh Congress, first session, on effects and solutions to combat acid precipitation.", author: "Froeschner, Richard C.", rate: "2.0" },
      { img: "../assets/book.png", title: "On Noam Chomsky; critical essays.", author: "Wadey, Maggie", rate: "3.5" },
      { img: "../assets/book.png", title: "Our Native American legacy : Northwest towns with Indian names / Sandy Nestor.", author: "Froeschner, Richard C.", rate: "4.5" },
    ],
    items: ['Categories', 'Popular', 'My picks']
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
#category {
  /* background-color: red; */
  /* padding-top: 50px; */
  padding-left: 100px; 
   padding-right: 90px;
}

#category h4 {
  color: #1E1E1E;
  font-size: 28px;
  font-family: 'Gill Sans';
  font-weight: 300
}

#category p {
  color: #000000;
  font-size: 15px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
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

.img-container {
  position: relative;
}

.book-img {
  display: block;
  position: relative;
}

.book-mark {
  position: absolute;
  top: 0;
  right: 0;
  padding-right: 8px;
  padding-top: 8px;
  font-size: 20px;
  color: #0F172A;

  /* background-color: red; */
}

.grid-container {
  display: grid;
  gap: 20px 20px;
  grid-template-columns: auto auto auto auto auto;
  /* background-color: #2196F3; */
  padding: 10px;
}

.grid-item {
  /* background-color: rgba(255, 255, 255, 0.8); */
  /* border: 1px solid rgba(0, 0, 0, 0.8); */
  padding: 0px;
  font-size: 30px;
  text-align: left;
  height: 350px;
  background-color: transparent;
  width: 170px;
}

.card-title {
  padding: 2px;
  padding-top: 10px;
  font-size: 18px;
  font-weight: 550;
  text-transform: capitalize;
  color: #1E1E1E;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
;
  /* background-color: aqua; */
}

.card-subtitle {
  padding-left: 2px;
}

.card-icon {
  color: #F8921C;
  font-size: 20px;
}</style>