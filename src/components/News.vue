<template>

  <v-layout row>
    <v-flex>
        <v-card light>
            <v-list two-line v-for="(newsitem, index) in newsItems" :key="index">
                <v-list-tile>
                    <v-list-tile-content class="news-text">
                        <v-list-tile-title>{{newsitem.title}}</v-list-tile-title>
                        <v-list-tile-sub-title><label>link: </label><a v-bind:href="newsitem.url">{{newsitem.url}}</a></v-list-tile-sub-title>
                        <span><small>Score: {{newsitem.score}} | by: {{newsitem.by}} | {{newsItemDate(newsitem.time)}}</small></span>
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
            this.newsID = response.data.slice(0, 20)
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
