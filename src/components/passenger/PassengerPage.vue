<template>
    <base-title :title="'Passengers'"></base-title>
    <base-button :isLink="true" :link="'/passenger/form'">
        <i class="fas fa-plus"></i>
        <span>Insert New</span>
    </base-button>
    <base-card>
        <base-filter-container>
            <base-labeled-item :label="'First Name'">
                <base-text-search v-model="firstName" @keyup.enter="searchBy"></base-text-search>
            </base-labeled-item>
            <base-labeled-item :label="'Last Name'">
                <base-text-search v-model="lastName" @keyup.enter="searchBy"></base-text-search>
            </base-labeled-item>
        </base-filter-container>
    </base-card>
    <passenger-tile v-for="item in content" 
        :key="item.username"
        :username="item.username"
        :firstName="item.firstName"
        :lastName="item.lastName"
        :gender="item.gender"
        :birthDate="item.birthDate"
        :idNumber="item.idNumber"
        :address="item.address">
    </passenger-tile>
    <base-card>
        <base-pagination
            :page="page"
            :totalPages="totalPages"
            :selectPage="selectPage"
            :firstPage="firstPage"
            :lastPage="lastPage"></base-pagination>
    </base-card>
    <teleport to="body">
        <router-view></router-view>
    </teleport>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import usePassengerStore from '../store/passenger/passenger-store';
import PassengerTile from './PassengerTile.vue';
import { onBeforeMount } from 'vue';

const store = usePassengerStore();

const {content, firstName, lastName, page, totalPages} = storeToRefs(store);

const searchBy = () => {
    store.setPage(1);
    store.refreshContent();
}

const selectPage = page => {
    store.setPage(page);
    store.refreshContent();
}
const firstPage = () => selectPage(1);
const lastPage = () => selectPage(totalPages.value);

onBeforeMount(()=> store.refreshContent())
</script>
