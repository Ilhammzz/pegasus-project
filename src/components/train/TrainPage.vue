<template>
    <div class="trains">
        <base-title :title="'Trains'"></base-title>
        <base-button :isLink="true" :link="'/train/form'">Insert New</base-button>
        <base-card>
            <base-filter-container>
                <base-labeled-item :label="'Name'">
                    <base-text-search v-model="name" @keyup.enter="searchBy"></base-text-search>
                </base-labeled-item>
            </base-filter-container>
        </base-card>
        <base-card>
            <base-table :headers="['Action', 'Code', 'Name', 'Max Passengers', 'Description']">
            <train-row v-for="item in content" 
                :key="item.code"
                :code="item.code"
                :name="item.name"
                :max-passengers="item.maxPassengers"
                :description="item.description">
            </train-row>       
            </base-table>
        </base-card>
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
    </div>
    
</template>

<script setup>
import { storeToRefs } from 'pinia';
import useTrainStore from '../store/train/train-store';
import TrainRow from './TrainRow.vue';
import { onBeforeMount } from 'vue';

const store = useTrainStore();

const {content, name, page, totalPages} = storeToRefs(store);

const selectPage = page => {
    store.setPage(page);
    store.refreshContent();
}
const firstPage = () => selectPage(1);
const lastPage = () => selectPage(totalPages.value);

const searchBy = () =>{
    store.setPage(1);
    store.refreshContent();
}

onBeforeMount(()=> store.refreshContent())
</script>
