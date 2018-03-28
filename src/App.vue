<template>
  <div id="app">
    <div class="appWrapper">
      <Navigation></Navigation>
      <router-view></router-view>
    </div>
    <footer>
      <a href="https://news.ycombinator.com/">HackerNews</a>
    </footer>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import News from './components/News.vue'
import NewStories from './components/NewStories.vue'

export default {
  name: 'App',
  components: {
    Navigation,
    News,
    NewStories
  }
}
</script>

<style>

body {
  margin: 0;
  padding: 0;
  border: 0;
  background-color: #E64A19;
}
 
#app {
  color: #FAFAFA;
}

.appWrapper {
  margin: 5% 10% 5% 10%;
}

footer {
   text-align: center;
   padding: 20px;
   font-family: 'Roboto', sans-serif;
   color: #fafafa;
   letter-spacing: 2px;
 }

 footer a {
   color: #fafafa;
 }
</style>
