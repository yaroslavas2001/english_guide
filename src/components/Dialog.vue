<template>
    <div class="">
        <h2>{{ title }}</h2>
        <div v-if="audio">
            <audio controls :src="audio">
                <!-- <a href="/media/cc0-audio/t-rex-roar.mp3">
                Download audio
            </a> -->
            </audio>
        </div>
        <div v-for="(item, index) in dialogs" :key="index">
            <p><span class="speacer"> {{ item.speaker }}: </span><span class="text">{{ item.text }}</span> </p>
        </div>
    </div>
</template>
<script setup lang="ts">
import DialogModel from "./../models/DialogModel"
defineProps<{ dialogs: Array<DialogModel>, audio?: any, title: string }>()

</script>
  
<style scoped>
h2 {
    font-size: 20px;
    font-weight: bold;
}

.speacer {
    font-weight: bold;
}

.text {
    color: grey;
}
</style>
  