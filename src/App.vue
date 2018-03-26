<template>
  <div id="app">
    <div class="appWrapper">
      <Navigation></Navigation>
      <News></News>
    </div>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import News from './components/News.vue'

export default {
  name: 'App',
  components: {
    Navigation,
    News
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
