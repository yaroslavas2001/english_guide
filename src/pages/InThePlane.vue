<template>
    <div>
        <img class="img" :src="ticket" alt="ticket">
        <TextComponent :text="Text"></TextComponent>
        <!-- <Translation :translation-list="BuyingTicketVocabulary" /> -->

        <!-- <Dialog title="Dialog 1" :dialogs="Dialog1" :audio="audio1"></Dialog> -->
    </div>
</template>
<script setup lang="ts">
import ticket from "./../assets/in-the-plane/in-the-plane.webp"
import Text from "./../data/in-the-plane/Text"

import TextComponent from "../components/TextComponent.vue";
</script>
  
<style scoped>
.img {
    width: 100%;
}
</style>
  