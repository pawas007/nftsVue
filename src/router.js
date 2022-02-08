import Vue from "vue";
import VueRouter from "vue-router";

import formRed from "@/components/formRed";
import list from "@/components/list";
import nftConcept from "@/components/nftConcept";
import nfts from "@/components/nfts";
import ntfDetails from "@/components/ntfDetails";
import ntfsBigger from "@/components/ntfsBigger";
import App from "@/App";


Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: formRed,
    },
    {
        path: '/formRed',
        name: 'formRed',
        component: formRed,
    },
    {
        path: '/list',
        name: 'list',
        component: list,
    },
    {
        path: '/nftConcept',
        name: 'nftConcept',
        component: nftConcept,
    },
    {
        path: '/nfts',
        name: 'nfts',
        component: nfts,
    },

    {
        path: '/ntfDetails',
        name: 'ntfDetails',
        component:  ntfDetails,
    },
    {
        path: '/ntfsBigger',
        name: 'ntfsBigger',
        component:  ntfsBigger,
    },








]

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;
