<template>
<v-container grid-list-xl>
  <!--  
  <ol>
      <li v-for="(newsitem, index) in newsItems" :key="index">{{newsitem.title}}</li>
  </ol>
  -->
  
  <v-layout row>
    <v-flex>
        <v-card light>
            <v-list two-line v-for="(newsitem, index) in newsItems" :key="index">
                <v-list-tile>
                    <v-list-tile-content>
                        <v-list-tile-title>{{newsitem.title}}</v-list-tile-title>
                        <v-list-tile-sub-title><a v-bind:href="newsitem.url">{{newsitem.url}}</a></v-list-tile-sub-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-card>
      </v-flex>
  </v-layout>
  
</v-container> 
</template>

<script>

import axios from 'axios'

export default {
    name: 'News',
    data () {
        return {
            newsID: [],
            newsItems: [],
        }
    },

    created: function() {
        axios.get('https://hacker-news.firebaseio.com/v0/topstories.json')
        .then(response => {
            this.newsID = response.data.slice(0, 10)
            this.newsID.map(topstoriesId => {
                axios.get('https://hacker-news.firebaseio.com/v0/item/'+topstoriesId+'.json')
                .then(response => {
                    console.log(response)
                    return this.newsItems.push(response.data)
                })
            })
        })
    }
}
</script>

<style>

</style>
