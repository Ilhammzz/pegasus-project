<template>
    <div class="row">
        <div class="label">{{ label }}</div>
        <div class="value">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
defineProps(['label'])
</script>

<style scoped>
.label {
    color: #16a085;
    font-weight: bold;
    min-width: 110px;
    padding-right: 15px;
}
.value {
    padding: 0 15px;
    min-width: 150px;
}
.row {
    margin-bottom: 10px;
    display: flex;
    align-items: flex-start;
}
.row:last-child {
    margin-bottom: 0;
}
</style>