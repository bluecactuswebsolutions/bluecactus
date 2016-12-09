const Vue = require('vue');
const VueRouter = require('vue-router');
const vueResource = require('vue-resource');
const ui = require('./ui');

Vue.use(VueRouter);
Vue.use(vueResource);

const home = require('./home/home.vue');
const portfolio = require('./showcase/showcase.vue');
const contact = require('./contact/contact.vue');

// routes
const routes = [
  {
    path:'/',
    component: home,
    name: 'home'
  },
  {
    path:'/portfolio',
    component: portfolio,
    name: 'portfolio'
  },
  {
    path: '/contact',
    component: contact,
    name: 'contact'
  }
];

let router = new VueRouter({
  routes,
  history: true
});

router.push('/');

let app = new Vue({
  router
}).$mount('#app');

const attachFastClick = require('fastclick');
attachFastClick(document.body);
ui();
