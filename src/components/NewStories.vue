<template>
 
  <v-layout row>
    <v-flex>
        <v-card light>
            <v-list two-line v-for="(newNewsitem, index) in newNewsItems" :key="index">
                <v-list-tile>
                    <v-list-tile-content class="news-text">
                        <v-list-tile-title>{{newNewsitem.title}}</v-list-tile-title>
                        <v-list-tile-sub-title><label>link: </label><a v-bind:href="newNewsitem.url">{{newNewsitem.url}}</a></v-list-tile-sub-title>
                        <span><small>Score: {{newNewsitem.score}} | by: {{newNewsitem.by}} | {{newsItemDate(newNewsitem.time)}}</small></span>
                        <span><small></small></span>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-card>
      </v-flex>
  </v-layout>

</template>

<script>
import axios from 'axios'

export default {
  name: 'NewStories',
  data () {
      return {
          newNewsId: [],
          newNewsItems: []
      }
  },

  methods: {
      newsItemDate: function(unixtimestamp) {
          let date = new Date(unixtimestamp*1000)
          return date.toDateString()
        }
    },

  created: function() {
      axios.get('https://hacker-news.firebaseio.com/v0/newstories.json')
      .then(response => {
          this.newNewsId = response.data.slice(0, 10)
          this.newNewsId.map(newstoriesId => {
              axios.get('https://hacker-news.firebaseio.com/v0/item/'+newstoriesId+'.json')
              .then(response => {
                  return this.newNewsItems.push(response.data)
              })
          })
      })
  }
}
</script>

<style>
.news-text {
    font-family: 'Roboto', sans-serif;
}

.news-text span, label {
    color: #90A4AE;
}

.news-text a {
    color: #E64A19;
}
</style>
