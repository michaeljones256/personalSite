import Vue from 'vue';
import VueRouter from 'vue-router';
import LanderPage from './../components/LanderPage.vue'
Vue.use(VueRouter);
let router = new VueRouter({
    mode: 'history',
    routes:[
        {path:'/', name:"Landing", component: LanderPage},  
    ]
});
export default router;