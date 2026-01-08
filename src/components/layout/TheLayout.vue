<template>
    <body>
        <the-navigation></the-navigation>
        <main class="main-content">
            <router-view></router-view>
        </main>
    </body>
</template>

<script setup>
import TheNavigation from './TheNavigation.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<style scoped>
.main-content{
    width: 65%;
    margin: 20px auto;
}
@media screen and (max-width: 1300px) {
    .main-content{
        width: 90%;
        margin: 10px auto;
    }
}
@media screen and (max-width: 1024px) {
    .main-content{
        width: 100%;
    }
}
</style>