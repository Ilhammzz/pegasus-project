<template>
    <select class="base-dropdown" v-model="model" :class="{'not-valid' : validation}">
        <option v-for="option in options" 
            :key="option.value" 
            :value="option.value"
            >{{option.text}}</option>
    </select>
    <div v-if="validation" class="validation-message">{{ validation }}</div>
</template>

<script setup>
const model = defineModel();
defineProps({
    options : {
        required: true
    },
    validation : {
        type: String,
        default: null
    }
})
</script>

<style scoped>
.base-dropdown {
    width: 206px;
    height: 26px;
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
   .base-dropdown{
        width: 166px;
    }
}
</style>