<template>
    <textarea class="base-textarea" v-model="model"><slot></slot></textarea>
</template>

<script setup>
const model = defineModel();
</script>

<style scoped>
.base-textarea {
    resize: none;
    width: 250px;
    height: 70px;
    border: solid #95a5a6 1px;
    border-radius: 4px;
}

@media screen and (max-width: 440px) {
    .base-textarea{
        width: 160px;
    }
}
</style>