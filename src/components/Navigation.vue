<template>
  <v-toolbar color="grey lighten-5" class="navigation">
      <v-toolbar-title class="navtitle">HackerNews</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat router-link to="/"><span class="nav-text">Top Stories</span></v-btn>
          <v-btn flat router-link to="/newstories"><span class="nav-text">New Stories</span></v-btn>
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
    margin-bottom: 3%;
    color: #E64A19;
    font-family: 'Roboto', sans-serif;
}

.nav-text {
    color: #E64A19;
}

.navtitle {
    font-weight: bolder;
    letter-spacing: 1px;
}
</style>
