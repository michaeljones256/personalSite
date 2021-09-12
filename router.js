import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
const router = new VueRouter({
    routes:[
        {path:'/', redirect:'/',  name:'Landing', component: () =>import('./components/Lander')},
    ]
});
export default router;