// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

import './assets/scss/index.scss';
import VueMaterialIcon from 'vue-material-icon'
import Nav from './components/Layout/Primary-nav'
import NavS from './components/Layout/Second-nav'
import Tooltip from 'vue-directive-tooltip';
import VueCollapse from 'vue2-collapse'
import 'vue-directive-tooltip/css/index.css';

import './script/index.js';
import './script/fadeInUp.js';
import './script/animate.js';
Vue.component("nav-p",Nav)
Vue.component("navs",NavS)
Vue.component(VueMaterialIcon.name, VueMaterialIcon)
Vue.use(Tooltip)
Vue.use(VueCollapse)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',

  
  
});
