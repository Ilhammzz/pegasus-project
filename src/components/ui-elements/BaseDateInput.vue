<template>
    <input class="base-date-input" type="date" v-model="model" :class="{'not-valid' : validation}">
    <div v-if="validation" class="validation-message">{{ validation }}</div>
</template>

<script setup>
const model = defineModel();
defineProps({
    validation: {
        type: String,
        default: null
  }
})
</script>

<style scoped>
.base-date-input {
    width: 203px;
    height: 24px;
    border: solid #95a5a6 1px;
    border-radius: 4px;
}
.validation-message {
    background-color: #e74c3c;
    color: white;
    margin: 5px 0;
    padding: 6px;
    border-radius: 4px;
    font-size: 12px;
}
</style>