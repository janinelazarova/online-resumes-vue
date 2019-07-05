import Vue from 'vue';
import Router from 'vue-router';
import Index from './views/Index.vue';
import Show from './views/Show.vue';
import Twitter from './views/Twitter.vue'


Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/resumes/:id',
      name: 'show',
      component: Show
    },
    {
      path: '/twitter',
      name: 'resumes-twiter',
      component: Twitter
    }
  ]
});
