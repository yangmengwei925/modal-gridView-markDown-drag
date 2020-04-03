import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './components'
import {Button} from "element-ui";

Vue.use(Button);

// import 'element-ui/lib/theme-chalk/index.css'

let vm = new Vue({
  el: '#app',
  template: '<App/>',
  components: {App},
  router
});

window.$vm = vm;