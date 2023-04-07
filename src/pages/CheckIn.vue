<template>
    <div>
        <img class="img" :src="ticket" alt="ticket">
        <!-- <div v-for="(item, index) in BuyingTicketVocabulary" :key='index'>
            <Translation :word='item.word' :translation="item.translation" />
        </div> -->
        <Dialog title="Dialog 1" :dialogs="CheckInDialog" :audio="audio1"></Dialog>
    </div>
</template>
<script setup lang="ts">
import audio1 from "./../audio/chaeck-in/t4p1.mp3"
import ticket from "./../assets/check-in/check-in.jpg"
import CheckInDialog from "./../data/check-in/Dialog1"
import Dialog from "./../components/Dialog.vue"
</script>
  
<style scoped>
.img {
    width: 100%;
}
</style>
  