// import React from "react";
import { createRouter, createWebHistory } from "vue-router";
// import { Component } from "react";


import Ecommerce from "../views/Ecommerce.vue";
import OrderPage from "../views/OrderPage.vue";
import ProductPage from "../views/ProductPage.vue";
import BasketPage from "../views/BasketPage.vue";

// import Home from "../views/Home.vue";
// import About from "../views/About.vue";
// import Contact from "../views/Contact.vue";

const routes = [
    // {
    //     path: "/",
    //     name: "home",
    //     component: Home
    // },

    // {
    //     path: "/about",
    //     name: 'about',
    //     component: About
    // },

    // {
    //     path: "/contact",
    //     name: "contact",
    //     component: Contact
    // }
    {
        path: '/',
        name: 'ecommerce',
        component: Ecommerce
    },

    {
        path: '/product',
        name: 'product',
        component: ProductPage
    },
    {
        path: '/order',
        name: 'order',
        component: OrderPage
    },

    {
        path: '/basket',
        name: 'basket',
        component: BasketPage
    }
];

const router  = createRouter({
    history: createWebHistory(),
    routes
});

// router.beforeEach((to)) => {
//     const user = JSON.parse(localStorage.getItem("user"))
// }

export default router;
