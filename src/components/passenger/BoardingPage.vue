<template>
    <base-title :title="'Boarding for'" :header="`${fullName} (${username})`"></base-title>
    <base-card>
        <base-filter-container>
         <base-labeled-item :label="'Train name'">
                <base-text-search v-model="trainName" @keyup.enter="searchBy"></base-text-search>
            </base-labeled-item>
            <base-labeled-item :label="'Dept. Station'">
                <base-text-search v-model="departureStation" @keyup.enter="searchBy"></base-text-search>
            </base-labeled-item>
            <base-labeled-item :label="'Dept. Time'">
                <base-date-search v-model="departureTime" @change="searchBy"></base-date-search>
            </base-labeled-item>
            <base-labeled-item :label="'Class'">
                <base-dropdown-search
                    v-model="classCode" 
                    :placeholder="'All class'"
                    :options="classDropdown">
                </base-dropdown-search>
            </base-labeled-item>
        </base-filter-container>
    </base-card>
    <boarding-tile v-for="schedule in formattedSchedule" 
        :key="schedule.id"
        :username="props.username"
        :id="schedule.id"
        :train-name="schedule.trainName"
        :train-class="schedule.trainClass" 
        :dept-station="schedule.deptStationName"
        :arr-station="schedule.arrStationName"
        :cost="schedule.cost"
        :dept-time="schedule.departureTime"
        :duration="schedule.duration"
        :max-passengers="schedule.maxPassengers"
        :passenger-on-board="schedule.passengerOnBoard">
    </boarding-tile>
    <base-card>
        <base-pagination
            :page="page"
            :totalPages="totalPages"
            :isFirst="isFirst"
            :isLast="isLast"
            :selectPage="selectPage"
            :firstPage="firstPage"
            :lastPage="lastPage">
        </base-pagination>
    </base-card>
    <teleport to="body">
        <router-view></router-view>
    </teleport>
</template>

<script setup>
import useBoardingStore from '../store/boarding/boarding-store';
import BoardingTile from './BoardingTile.vue';
import { onBeforeMount, computed } from 'vue';
import { storeToRefs } from 'pinia';
const props = defineProps(['username', 'fullName', 'id']);
const boardingStore = useBoardingStore();
const {isFirst, isLast, content, trainList, stationList, classCode, classDropdown, passengerList, page, totalPages, trainName, departureStation, departureTime, classCodeList} = storeToRefs(boardingStore)

const {fullName, username} = storeToRefs(boardingStore);

const selectPage = page => {
    boardingStore.setPage(page);
    boardingStore.refreshContent();
}
const firstPage = () => selectPage(1);
const lastPage = () => selectPage(totalPages.value);

const searchBy = () => {
    boardingStore.setPage(1);
    boardingStore.refreshContent();
}

const formattedSchedule = computed(()=>{
    return content.value.map(item => {
        const train = trainList.value[item.trainCode] || {};
        const trainClass = classCodeList.value[item.trainClassCode] || {};
        const deptStation = stationList.value[item.departureStationId] || {};
        const arrStation = stationList.value[item.arrivalStationId] || {};
        const passenger = passengerList.value[item.id] || {};

        return {
            ...item,
            trainName : train.name,
            trainClass : trainClass.name,
            maxPassengers : train.maxPassengers,
            deptStationName : deptStation.name,
            arrStationName : arrStation.name,
            passengerOnBoard : passenger.totalElements,
        }
    })
})

onBeforeMount(()=> {
    boardingStore.refreshContent();
    boardingStore.fetchClassDropdown();
    })
</script>
