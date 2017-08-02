import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue';
import User from './Components/User.vue';
import Blog from './Components/Blog.vue';
import Account from './Components/Account.vue';

Vue.use(VueRouter);

const routes  = [
    {
        path: '/blog', component: Blog
    },
    {
        path: '/account', component: Account
    },
    {
        path: '/', component: User
    }
]

const router = new VueRouter({
    routes: routes
});

Vue.component('app-user', User);

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
