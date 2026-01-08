<template>
    <base-title :title="'Passenger of'" :header="`${trainName} to ${arrStation}`"></base-title>
    <base-card>
        <base-table :headers="['Action', 'Username', 'FullName']">
                <passenger-on-board-row v-for="item in content" 
                    :key="item.username"
                    :id="props.id"
                    :username="item.username"
                    :firstName="item.firstName"
                    :lastName="item.lastName">
                </passenger-on-board-row>
        </base-table>
    </base-card>
    <base-card>
         <base-pagination
            :page="page"
            :totalPages="totalPages"></base-pagination>
    </base-card>
    <teleport to="body">
        <router-view></router-view>
    </teleport>
    
</template>

<script setup>
import PassengerOnBoardRow from './PassengerOnBoardRow.vue';
import { storeToRefs } from 'pinia';
import usePassengerOnBoardStore from '../store/passengerOnBoard/passenger-onboard-store';
import { onBeforeMount } from 'vue';
const props = defineProps(['id', 'username']);

const store = usePassengerOnBoardStore();

const {content, page, totalPages, trainName, arrStation} = storeToRefs(store)

onBeforeMount(()=> {
    store.refreshContent(props.id)
})

</script>
