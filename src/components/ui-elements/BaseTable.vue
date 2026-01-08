<template>
    <table class="base-table">
                <thead>
                <tr>
                    <th v-for="header in headers" :key="header">{{header}}</th>
                </tr>
                </thead>
                <tbody>
                    <slot></slot>
                </tbody>
    </table>
</template>

<script setup>
defineProps(['headers'])
</script>

<style scoped>
.base-table {
    width: 100%;
    border-collapse: collapse;
}
.base-table thead th {
    text-align: left;
    padding: 10px;
    color: #16a085;
}
.base-table tbody :deep(td:first-child) {
    border-bottom: none;
}
.base-table tbody :deep(td) {
    padding: 10px;
    border-bottom: #16a085 solid 1px;
}

@media screen and (max-width: 1024px) {
    .base-table,
    .base-table tbody,
    .base-table th,
    .base-table td{
        display: block;
    }
    .base-table tr{
        display: block;
        margin-top: 30px;
    }
    .base-table thead{
        display: none;
    }
    :deep(.trains) .base-table td{
        display: flex;
        justify-content:space-between;
        column-gap: 20px;
    }
    .base-table tbody tr:last-child td{
        border-bottom: #16a085 solid 1px;
    }
    .base-table tbody tr:last-child td:first-child{
        border-bottom: none;
    }
    :deep(.trains) .base-table td::before{
        color: #16a085;
        font-weight: bold;
    }
    :deep(.trains) .base-table td:nth-child(2)::before{
        content: 'Code';
    }
    :deep(.trains) .base-table td:nth-child(3)::before{
        content: 'Name';
    }
    :deep(.trains) .base-table td:nth-child(4)::before{
        content: 'Max Passengers';
    }
    :deep(.trains) .base-table td:nth-child(5)::before{
        content: 'Description';
    }
}
</style>