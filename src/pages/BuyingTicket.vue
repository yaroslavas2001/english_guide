<template>
    <div>
        <img class="img" :src="ticket" alt="ticket">
        <Translation :translation-list="BuyingTicketVocabulary" />
        <Dialog title="Dialog 1" :dialogs="Dialog1" :audio="audio1"></Dialog>
        <Dialog title="Dialog 2" :dialogs="Dialog2" :audio="audio2"></Dialog>

    </div>
</template>
<script  lang="ts" setup>
import BuyingTicketVocabulary from "./../data/buying_ticket/BuyingTicketVocabulary"
import audio1 from "./../audio/buying-ticket/1.mp3"
import audio2 from "./../audio/buying-ticket/2.mp3"
import ticket from "./../assets/buying_ticket/ticket.jpg"
import Translation from "./../components/Translation.vue";
import Dialog from './../components/Dialog.vue'
import Dialog1 from "./../data/buying_ticket/Dialog1"
import Dialog2 from "./../data/buying_ticket/Dialog2"

</script>
  
<style scoped>
.img {
    width: 100%;
}
</style>
  