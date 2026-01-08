<template>
    <base-title :title="'Schedules'"></base-title>
    <base-button :isLink="true" :link="'/schedule/form'">
        <i class="fas fa-plus"></i> Insert new
    </base-button>
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
                    :options="classDropdown"
                    @change="searchBy">
                </base-dropdown-search>
            </base-labeled-item>
        </base-filter-container>
    </base-card>
    <schedule-tile v-for="schedule in formattedSchedule" 
        :key="schedule.id"
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
    </schedule-tile>
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
import ScheduleTile from './ScheduleTile.vue';
import { computed, onBeforeMount } from 'vue';
import useScheduleStore from '../store/schedule/schedule-store';
import { storeToRefs } from 'pinia';

const store = useScheduleStore();

const {isFirst, isLast, content, trainList, stationList, classCode, classDropdown, passengerList, page, totalPages, trainName, departureStation, departureTime, classCodeList} = storeToRefs(store)

const selectPage = page => {
    store.setPage(page);
    store.refreshContent();
}
const firstPage = () => selectPage(1);
const lastPage = () => selectPage(totalPages.value);

const searchBy = () => {
    store.setPage(1);
    store.refreshContent();
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
    store.refreshContent();
    store.fetchClassDropdown();
})
</script>
