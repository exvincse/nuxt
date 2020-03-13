import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export const routes = [{
        path: "/",
        name: "index",
        component: () => import( /* webpackChunkName: "index" */ "../pages/index.vue").then(m => m.default)
    },
    {
        path: "/people",
        name: "people",
        component: () => import( /* webpackChunkName: "people" */ "../pages/people.vue").then(m => m.default)
    },
    {
        path: "*",
        redirect: "/"
    }
];

export function createRouter() {
    return new VueRouter({
        mode: "history",
        routes
    });
}