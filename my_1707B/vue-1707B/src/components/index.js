import Drag from './drag';
import GridView from './GridView/GridView';
import Modal from './Modal/Modal';
// import GridView from '@/component/GridView/GridView';
// import Modal from '@/components/Modal/Modal'
import Vue from 'vue';

//全局注册
Vue.component('Drag', Drag);
Vue.component('GridView', GridView);
Vue.component('Modal', Modal);


//
// 发包 --npm  下载
// Vue.use({install:(Vue)=>{
//    Vue.extend()
// }})
// Vuex
// Router