<template>
 <div class="base-dialog">
    <div class="open-dialog">
        <div class="header">
            <h3>{{ header }}</h3>
            <button type="button" class="close-button" @click="closeDialog">
                <i class="fas fa-times"></i>
            </button>
        </div>
        <slot></slot>
    </div>
 </div>
</template>

<script setup>
defineProps(['header', 'closeDialog'])
</script>

<style scoped>
.base-dialog {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    justify-content: center;
    align-items: center;
    padding: 15px;
    min-width: 300px;
    border-radius: 6px;
}
.open-dialog {
    display: block;
    background-color: white;
    padding: 15px;
    min-width: 300px;
    border-radius: 6px;
}
.base-dialog .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}
.base-dialog .header > h3 {
    margin: 0;
    color: #006266;
}
.close-button {
    background-color: #c0392b;
    color: white;
    border: none;
    cursor: pointer;
    display: inline-flex;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
}
.base-dialog :deep(p) {
    color: #006266;
    font-size: 16px;
}
.row {
    margin-bottom: 10px;
    display: flex;
    align-items: flex-start;
}
.row > .label {
    color: #16a085;
    font-weight: bold;
    min-width: 110px;
    padding-right: 15px;
}
.row > .value {
    padding: 0 15px;
    min-width: 150px;
}
</style>