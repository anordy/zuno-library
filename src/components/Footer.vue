<template>
  <v-footer id="footer" padless>
    <v-container>
      <v-row>
        <v-img src="footer.png" max-height="120" max-width="150" contain alt="footer image"></v-img>
        <v-spacer></v-spacer>
        <p style="color: #ffffff;font-size: 13px; font-family: 'Gill Sans', 'Gill Sans; padding-top: 15px;">All right
          reserved. Copyright Zuno Library. {{ currentYear }}</p>

      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
/* eslint-disable vue/multi-word-component-names */

export default {
  name: 'Footer',
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
#footer {
  background-color: #1C3F3A;
  margin-top: 100px;
  height: 10vh;
  padding-left: 100px;
  padding-right: 100px;
}
</style>