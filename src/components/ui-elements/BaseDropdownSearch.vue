<template>
    <select class="base-dropdown" v-model="model">
        <option value="">{{placeholder}}</option>
        <option v-for="option in options" 
            :key="option.value" 
            :value="option.value"
            >{{option.text}}</option>
    </select>
</template>

<script setup>
defineProps(['placeholder', 'options'])
const model = defineModel();
</script>

<style scoped>
.base-dropdown {
    width: 206px;
    height: 26px;
    border: solid #95a5a6 1px;
    border-radius: 4px;
}
@media screen and (max-width: 440px) {
   .base-dropdown{
        width: 166px;
    }
}
</style>