<template>
<v-container grid-list-xl>
  <v-layout row>
    <v-flex>
        <v-card light>
            <v-list two-line v-for="(newsitem, index) in newsItems" :key="index">
                <v-list-tile>
                    <v-list-tile-content>
                        <v-list-tile-title>{{newsitem.title}}</v-list-tile-title>
                        <v-list-tile-sub-title>link: <a v-bind:href="newsitem.url">{{newsitem.url}}</a></v-list-tile-sub-title>
                        <span><small>Score: {{newsitem.score}} | by: {{newsitem.by}} | {{newsItemDate(newsitem.time)}}</small></span>
                        <span><small></small></span>
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
    // Change the date format from unix_timestamp
    methods: {
        newsItemDate: function(unixtimestamp) {
            let date = new Date(unixtimestamp*1000)
            return date.toDateString()
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
