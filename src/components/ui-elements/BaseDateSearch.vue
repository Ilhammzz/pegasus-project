<template>
    <input class="base-date-search" type="date" v-model="model">
</template>

<script setup>
const model = defineModel();
</script>

<style scoped>
.base-date-search {
    width: 203px;
    height: 24px;
    border: solid #95a5a6 1px;
    border-radius: 4px;
}
@media screen and (max-width: 440px) {
    .base-date-search{
        width: 163px;
    }
}
</style>