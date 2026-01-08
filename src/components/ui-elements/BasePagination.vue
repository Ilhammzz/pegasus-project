<template>
    <div class="base-pagination">
        <div class="info">Page {{ page }} of {{ totalPages }}</div>
        <div>
            <base-button v-if="!isFirst" :event="firstPage">
                <i class="fas fa-angle-double-left"></i>
                <span>First</span>
            </base-button>
            <base-button v-if="page - 1 >= 1" :event="() => selectPage(page - 1)">
                {{page - 1}}
            </base-button>
            <base-button class="selected" :event="() => selectPage(page)">
                {{page}}
            </base-button>
            <base-button v-if="page + 1 <= totalPages" :event="() => selectPage(page + 1)">
                {{page + 1}}
            </base-button>
            <base-button v-if="!isLast" :event="lastPage">
                <i class="fas fa-angle-double-right"></i>
                <span>Last</span>
            </base-button>
        </div>
    </div>
</template>

<script setup>
defineProps(['page', 'totalPages', 'isFirst', 'isLast', 'selectPage', 'firstPage', 'lastPage'])
</script>

<style scoped>
.base-pagination {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.base-pagination > .info {
    color: #006266;
    font-weight: bold;
}
</style>