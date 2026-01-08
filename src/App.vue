<template>
  <router-view></router-view>
</template>

<script setup>

</script>

<style>
@font-face {
    font-family: 'Quicksand';
    src: url('./assets/fonts/Quicksand-Regular.ttf') format('truetype');
  }
body{
    font-family: 'Quicksand';
    font-size: 14px;
    background-color: #dfe4ea;
    min-width: 1280px;
  }
@media screen and (max-width: 1300px) {
    body{
        min-width: 1000px;
    }
  }
@media screen and (max-width: 1024px) {
    body{
        min-width: 750px;
    }
  }
@media screen and (max-width: 840px) {
    body{
        min-width: 400px;
    }
  }
@media screen and (max-width: 440px) {
    body{
        min-width: 340px;
    }
  }

</style>
