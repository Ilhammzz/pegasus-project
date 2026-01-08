<template>
    <div class="base-card">
        <slot></slot>
    </div>
</template>

<style scoped>
.base-card {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    background-color: white;
    box-sizing: border-box;
    padding: 15px;
    border-radius: 8px;
    margin-top: 15px;
}
@media screen and (max-width: 1024px) {
    .base-card{
        box-shadow: none;
        border-radius: 0;
        border-top:solid 1px #bdc3c7;
        border-bottom:solid 1px #bdc3c7;
        margin-top: 5px;
    }
}
</style>