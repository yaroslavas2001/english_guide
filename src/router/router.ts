//#region import
import { createRouter, createWebHistory, RouteRecordRaw, RouterView } from "vue-router";
import layout from "../layouts/Layout.vue";
import { INTRODUCTION, BUYING_TICKET } from "./routerNames"
// pages
import Introduction from "./../pages/Introduction.vue"
import BuyingTicket from "./../pages/BuyingTicket.vue"
//#endregion
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: layout,
    redirect: INTRODUCTION,
    meta: {
      title: "English guide",
      allowAnonymous: true,
    },
    children: [
      {
        name: INTRODUCTION,
        path: '/introduction',
        component: Introduction,
      },
      {
        name: BUYING_TICKET,
        path: '/buying_ticket',
        component: BuyingTicket,
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});


export default router;
