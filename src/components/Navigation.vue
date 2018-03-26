<template>
  <v-toolbar color="grey lighten-5" class="navigation">
      <v-toolbar-title>HackerNews</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat>Home</v-btn>
          <v-btn flat>New</v-btn>
          <v-btn flat>Trending</v-btn>
      </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  
}
</script>

<style>
.navigation {
    margin-top: 5%;
    color: #E64A19;
}
</style>
