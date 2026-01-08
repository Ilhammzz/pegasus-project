<template>
    <tr>
        <td>
            <base-button :isLink="true" :link="`/train/form/${code}`">Update</base-button>
            <base-button :isLink="true" :link="`/train/delete/${code}`">Remove</base-button>
        </td>
        <td>{{code}}</td>
        <td>{{ name }}</td>
        <td>{{ maxPassengers }}</td>
        <td>{{ description }}</td>
    </tr>
</template>

<script setup>
defineProps(['code', 'name', 'maxPassengers', 'description'])
</script>

