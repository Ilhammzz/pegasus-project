<template>
    <tr>
        <td>
            <base-button :isLink="true" :link="`/passengersOnBoard/${id}/delete/${username}`">Remove</base-button>
        </td>
        <td>{{ username }}</td>
        <td>{{ firstName }} {{ lastName }}</td>
    </tr>
</template>

<script setup>
defineProps(['id', 'username', 'firstName', 'lastName'])
</script>
