<template>
    <div class="filter-container">
        <h2>Filter By</h2>
        <slot></slot>
    </div>
</template>

<script setup>

</script>

<style scoped>
.filter-container > h2 {
    font-size: 14px;
    font-style: italic;
    color: #006266;
    margin: 10px 0 20px 0;
}

</style>