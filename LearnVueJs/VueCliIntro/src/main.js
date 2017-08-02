import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import User from './Components/User.vue';

Vue.component('app-user', User);

new Vue({
  el: '#app',
  render: h => h(App)
})
