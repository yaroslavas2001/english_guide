<template>
    <div class="translation_block">
        <p> <span class="word">{{ word }} </span> <span class="translation">{{ translation }}</span> </p>
    </div>
</template>
<script setup lang="ts">

defineProps<{ word: string, translation: string }>()

</script>
  
<style scoped>
.translation_block {
    display: flex;
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
  