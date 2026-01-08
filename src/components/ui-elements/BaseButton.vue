<template>
    <button v-if="!isLink" @click="event" class="base-button">
        <slot></slot>
    </button>
    <router-link v-else :to="link" class="base-button">
        <slot></slot>
    </router-link>
</template>

<script setup>
    const props = defineProps({
        isLink: {default: false},
        link: {default: "javascript:;"},
        event: {required: false}
    })
</script>

<style scoped>
.base-button:hover,
a.activated-base-button,
button.activated-base-button{
    color:#006266;
    background-color: white;
}

    .base-button {
    display: inline-flex;
    background-color: #006266;
    color: white;
    text-decoration: none;
    height: 32px;
    align-items: center;
    padding: 0 12px;
    border-radius: 6px;
    cursor: pointer;
    box-sizing: border-box;
    border: solid 1px #006266;
    margin-right: 5px;
}

.base-button > :deep(i:first-child) {
    margin-right: 10px;
}


@media screen and (max-width: 1024px) {
    .base-button:first-of-type{
        margin-left: 5px;
    }
}

@media screen and (max-width: 840px) {
    .base-button{
        font-size: 12px;
        border-radius: 4px;
        height: 28px;
        padding: 0 8px;
    }
}

</style>