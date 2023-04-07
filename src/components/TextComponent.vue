<template>
    <div v-for="(item, index) in text" :key="index" class="text_block">
        <p class="text">{{ item.text }}</p>
        <p class="translation"> {{ item.translation }} </p>
    </div>
</template>
<script setup lang="ts">
import TextTranslationModel from "../models/TextTranslationModel";
defineProps<{ text: Array<TextTranslationModel>, }>()

</script>
  
<style scoped>
.text_block {
    margin: 5px 0px;
}

.text {
    color: #000;
    font-weight: bold;

}

.translation {
    color: rgb(109, 104, 104);
}
</style>
  