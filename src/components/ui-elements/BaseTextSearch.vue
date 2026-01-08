<template>
    <input class="base-textbox" type="text" v-model="model">
</template>

<script setup>
const model = defineModel();
</script>

<style scoped>
.base-textbox {
    width: 200px;
    height: 22px;
    border: solid #95a5a6 1px;
    border-radius: 4px;
}

@media screen and (max-width: 440px) {
    .base-textbox{
        width: 160px;
    }
}
</style>