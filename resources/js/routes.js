import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import HomeComp from './components/partials/pages/HomeComp';
import AboutComp from './components/partials/pages/AboutComp';
import ContactsComp from './components/partials/pages/ContactsComp';
import BlogComp from './components/partials/pages/BlogComp';


const router = new VueRouter({
    mode:'history',
    linkExactActiveClass: 'active',
    routes:[
        {
            path:'/',
            name:'home',
            component :HomeComp
        },
        {
            path:'/chi-siamo',
            name:'about',
            component :AboutComp
        },
        {
            path:'/contatti',
            name:'contacts',
            component :ContactsComp
        },
        {
            path:'/blog',
            name:'blog',
            component :BlogComp
        }
    ]
});
export default router;
