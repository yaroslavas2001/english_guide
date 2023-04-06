<template>
  <div class="layout">
    <layout-header></layout-header>
    <div class="container-custom">
      <layout-sidebar></layout-sidebar>
      <div class="content">
        <slot>
          <router-view />
        </slot>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import LayoutSidebar from "./Layout-sidebar.vue"
import LayoutHeader from "./Layout-header.vue"
</script>
<style scoped lang="less">
body {
  margin: 0;
  font-style: normal;
  font-weight: normal;
}

.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container-custom {
  flex-grow: 1;
  background: #ffffff;
  display: flex;
  overflow-x: auto;

  .content {
    margin: 15px 20px 20px 34px;
    flex-grow: 1;
  }
}
</style>
