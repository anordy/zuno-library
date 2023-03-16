<template>
  <v-app-bar  style="padding-right: 120px;; background-color: #EAE6D7;" :elevation="0">
    <v-toolbar-title class="title-logo">
      <img src="../assets/zuno.png" alt="logo image">
    </v-toolbar-title>
    <!-- <v-spacer></v-spacer> -->
    <v-list class="d-flex align-center v-list">
      <v-list-item>
        <v-list-item-title class="active">Home</v-list-item-title>
      </v-list-item>
      <v-list-item>
        <v-list-item-title>Category</v-list-item-title>
      </v-list-item>
      <v-list-item>
        <v-list-item-title>Popular</v-list-item-title>
      </v-list-item>
      <v-list-item>
        <v-list-item-title>My Picks</v-list-item-title>
      </v-list-item>

    </v-list>
    <v-avatar class="mr-2" size="x-small">
      <img src="../assets/cart.png" alt="shopping cart">
    </v-avatar>
    <v-avatar color="surface-variant" size="x-small">
      <img src="../assets/profile.png" alt="profile">
    </v-avatar>
  </v-app-bar>
</template>


<script>
/* eslint-disable vue/multi-word-component-names */
export default {
  name: 'Header',
  data() {
    return {
      menus: [
        { title: 'Home', route: 'home' },
        { title: 'Category', route: 'category' },
        { title: 'Popular', route: 'popular' },
        { title: 'My Picks', route: 'my-picks' },
      ]
    }
  }

}

</script>

<style scoped>
.v-list {
  margin-right: 30%;
  background-color: #EAE6D7;
}
.v-list .active {
  background-color: #ffffff;
   /* background-color: #ffffff; */
  border-radius: 15px;
  width: 80px;
  padding: 3px;
  /* height: 30px; */
  display: grid;
  text-align: center;
  font-size: 13px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; 
}


</style>