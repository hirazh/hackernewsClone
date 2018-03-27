import Vue from 'vue'
import Router from 'vue-router'
import News from '@/components/News'
import NewStories from '@/components/NewStories'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'News',
            component: News
        },

        {
            path: '/newstories',
            name: 'NewStories',
            component: NewStories
        }
    ]
})