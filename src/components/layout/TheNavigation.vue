<template>
    <nav class="navigation base-card">
        <div class="logo">
            <img src="../../assets/image/logo.png" alt="pegasus">
            <span>PEGASUS</span>
        </div>
        <div>
            <base-button :isLink="true" :link="'/schedule'">Schedules</base-button>
            <base-button :isLink="true" :link="'/passenger'">Passengers</base-button>
            <base-button :isLink="true" :link="'/train'">Trains</base-button>
        </div>
    </nav>
</template>

<script setup>

</script>

<style scoped>
.navigation{
    width: 65%;
    margin: 20px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.base-card{
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    background-color: white;
    box-sizing: border-box;
    padding: 15px;
    border-radius: 8px;
}
.logo{
    color: #006266;
    font-weight: bold;
    font-size: 24px;
    display: flex;
    align-items: center;
    gap: 12px;
}
.logo img{
    height: 40px;
}

@media screen and (max-width: 1300px) {
    .navigation {
        width: 90%;
        margin: 10px auto;
    }
}
@media screen and (max-width: 1024px) {
    .navigation{
        width: 100%;
        margin-top: 0;
        border-bottom:solid 1px #bdc3c7;
    }
    .base-card{
        box-shadow: none;
        border-radius: 0;
    }
}
@media screen and (max-width: 840px) {
    .navigation{
        flex-direction: column;
        row-gap: 10px;
    }
}

</style>