//#region import
import { createRouter, createWebHistory, RouteRecordRaw, RouterView } from "vue-router";
import layout from "../layouts/Layout.vue";
import {
  INTRODUCTION, BUYING_TICKET,
  ATCUSTOMS, TAKINGTAXI, INTHEPLANE,
  CHECKIN, ROLEPLAY,
} from "./routerNames"
// pages
import Introduction from "./../pages/Introduction.vue"
import BuyingTicket from "./../pages/BuyingTicket.vue"
import AtCustoms from "./../pages/AtCustoms.vue"
import CheckIn from "./../pages/CheckIn.vue"
import InThePlane from "./../pages/InThePlane.vue"
import RolePlay from "./../pages/RolePlay.vue"
import TakingTaxi from "./../pages/TakingTaxi.vue"
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
      },
      {
        name: ATCUSTOMS,
        path: '/at_custom',
        component: AtCustoms,
      },
      {
        name: CHECKIN,
        path: '/check_in',
        component: CheckIn,
      },
      {
        name: INTHEPLANE,
        path: '/in_the_plane',
        component: InThePlane,
      },
      {
        name: ROLEPLAY,
        path: '/role_play',
        component: RolePlay,
      },
      {
        name: TAKINGTAXI,
        path: '/taking_taxi',
        component: TakingTaxi,
      },
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});


export default router;
