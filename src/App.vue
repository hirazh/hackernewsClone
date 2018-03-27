<template>
  <div id="app">
    <div class="appWrapper">
      <Navigation></Navigation>
      <router-view></router-view>
    </div>
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

</style>
