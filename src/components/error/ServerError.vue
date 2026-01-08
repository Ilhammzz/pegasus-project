<template>
    <div class="error">
        <base-card>
            <base-logo>
                <span>PEGASUS</span>
            </base-logo>
            <h1>500 Internal Server Error</h1>
            <p>There is a problem in our server.</p>
            <base-button :isLink="true" :link="'/'">Go Back to Landing Page</base-button>
        </base-card>
    </div>
</template>

<script setup>

</script>

<style scoped>
.error {
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
}
.error .base-card {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.error h1 {
    color: #006266;
    font-size: 20px;
    margin: 40px 0 10px 0;
}
.error p {
    color: #006266;
    font-size: 16px;
    margin: 0 0 40px 0;
}
</style>