<template>
    <h1 class="title">{{ title }}  <span class="header">{{ header }}</span>
    </h1>
</template>

<script setup>
defineProps(['title', 'header'])
</script>

<style scoped>
.title {
    color: #006266;
    text-align: center;
    display: block;
    margin: 30px 0;
}
.title > .header {
    color: #EE5A24;
}

@media screen and (max-width: 440px) {
    .title{
        font-size: 18px;
    }
}
</style>

