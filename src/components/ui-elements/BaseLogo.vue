<template>
    <div class="logo">
        <img src="../../assets/image/logo.png">
        <slot></slot>
    </div>
</template>

<script setup>
</script>

<style scoped>
.logo {
    color: #006266;
    font-weight: bold;
    font-size: 24px;
    display: flex;
    align-items: center;
    gap: 12px;
}
.logo img {
    height: 40px;
}
</style>