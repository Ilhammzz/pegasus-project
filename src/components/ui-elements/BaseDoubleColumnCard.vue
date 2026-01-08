<template>
    <div class="double-column">
        <div>
                <slot name="left"></slot>
        </div>
        <div>
                <slot name="right"></slot>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.double-column {
    display: flex;
    justify-content: flex-start;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    background-color: white;
    box-sizing: border-box;
    padding: 15px;
    border-radius: 8px;
    margin-top: 15px;
}
.double-column > div {
    flex-grow: 1;
}

@media screen and (max-width: 840px) {
    .double-column{
        flex-direction: column;
        row-gap: 10px;
    }
}



</style>