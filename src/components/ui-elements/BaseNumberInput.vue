<template>
    <input class="base-textbox" type="number" v-model="model" :class="{'not-valid' : validation}">
    <div v-if="validation" class="validation-message">{{ validation }}</div>
</template>

<script setup>
const model = defineModel();
const props = defineProps({
  validation: {
    type: String,
    default: null
  }
});
</script>

<style scoped>
.base-textbox {
    width: 200px;
    height: 22px;
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

@media screen and (max-width: 440px) {
    .base-textbox{
        width: 160px;
    }
}
</style>