<template>
    <div>
        <h1>Вступление</h1>
        <Translation :translation-list="Vocabulary" />

        <h2>Основные знаки</h2>
        <img class="introduction_img" :src="introduction" alt="introduction">
    </div>
</template>
<script setup lang="ts">
import Translation from "./../components/Translation.vue"
import Vocabulary from "./../data/Vocabulary"
import introduction from "./../assets/introduction/introduction.jpg"

</script>
  
<style scoped>
h1 {
    font-size: 26px;
    font-weight: bold;
    margin: 10px 0px;
}

h2 {
    font-size: 20px;
    font-weight: bold;
    margin: 20px 0px 5px;
}

.introduction_img {
    width: 100%
}
</style>
  