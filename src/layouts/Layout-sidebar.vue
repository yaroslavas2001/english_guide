<template>
  <nav class="navbar navbar-default" role="navigation">
    <div v-for="(item, index) in sideBarItems" :key="index" class="router-link">
      <router-link  :to="{ name: item.path }">
        {{ item.name }} 
      </router-link>
    </div>


  </nav>
</template>

<script  setup  lang="ts">

import { INTRODUCTION, BUYING_TICKET } from "../router/routerNames"
interface SideBarItem {
  path: string,
  name: string
}
let sideBarItems: Array<SideBarItem> = [
  { path: INTRODUCTION, name: "Introduction" },
  { path: BUYING_TICKET, name: "Buying a plane ticket" }

]
</script>
<style scoped lang="less">
nav {
  // width: 20%;
  // max-width: 400px;
  width: fit-content;
  background-color: #107dbd;
  padding: 20px 10px;
}

.router-link a{
  color: #fff;
  text-decoration: none;
  transition: 0.2s all ease;
  margin: 10px 0px;
  font-size: 17px;
}

.router-link-active {
  color: #2f8db9 !important;
  background: #fff;
  font-weight: bold;
}
</style>
