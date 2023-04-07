<template>
    <div v-for="(item, index) in translationList" :key='index'>
        <p class="translation_block">
            <span class="word">{{ item.word }} </span>
            <span class="translation">{{ item.translation }}</span>
        </p>
    </div>
</template>
<script setup lang="ts">
import WordModel from '../models/WordModel';

defineProps<{ translationList: Array<WordModel>, }>()

</script>
  
<style scoped>
.translation_block {
    margin: 5px 0px;
}

.word {
    font-size: 16px;
    font-weight: bold;
    color: #000;
    margin-right: 4px;
}

.translation {
    color: #423d3d;
}
</style>
  