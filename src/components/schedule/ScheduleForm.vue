<template>
    <base-dialog :header="'Schedule Form'" :closeDialog="closeDialog">
        <base-labeled-item :label="'Train *'">
            <base-dropdown-input :options="store.trainDropdown" v-model="payload.trainCode" :validation="validationMessage.trainCode"></base-dropdown-input>
        </base-labeled-item>
        <base-labeled-item :label="'Class *'">
            <base-dropdown-input :options="store.classDropdown" v-model="payload.trainClassCode" :validation="validationMessage.trainClassCode"></base-dropdown-input>
        </base-labeled-item>
        <base-labeled-item :label="'Dept Station *'">
            <base-dropdown-input :options="store.stationDropdown" v-model="payload.departureStationId" :validation="validationMessage.departureStationId"></base-dropdown-input>
        </base-labeled-item>
        <base-labeled-item :label="'Arr Station *'">
            <base-dropdown-input :options="store.stationDropdown" v-model="payload.arrivalStationId" :validation="validationMessage.arrivalStationId"></base-dropdown-input>
        </base-labeled-item>
        <base-labeled-item :label="'Dept Time *'">
            <base-date-time-input v-model="payload.departureTime" :validation="validationMessage.departureTime"></base-date-time-input>
        </base-labeled-item>
        <base-labeled-item :label="'Duration(min) *'">
            <base-number-input v-model="payload.duration" :validation="validationMessage.duration"></base-number-input>
        </base-labeled-item>
        <base-labeled-item :label="'Cost *'">
            <base-text-input v-model="payload.cost" :validation="validationMessage.cost"></base-text-input>
        </base-labeled-item>
        <base-button-container>
            <base-button :event="insertSchedule"><i class="fas fa-save"></i> Save</base-button>
            <base-button :event="closeDialog"><i class="fas fa-times"></i> Cancel</base-button>
        </base-button-container>
    </base-dialog>
</template>

<script setup>
import { useRouter } from 'vue-router';
import useScheduleStore from '../store/schedule/schedule-store';
import { onBeforeMount, ref } from 'vue';

const {id} = defineProps(['id'])
const store = useScheduleStore();
const router = useRouter();
const closeDialog = () => {router.push('/schedule')};

const payload = ref({});
const validationMessage = ref({});

const setValidation = data => {
    const errors = {};

    for(let error of data) {
        if(error.field) {
            errors[error.field] = error.defaultMessage
        }
    }
    validationMessage.value = errors;
} //PAHAMI LAGI

const insertSchedule = async() => {
    validationMessage.value = {};
    if(id) {
            payload.value.id = id;
        }
    let {data, status} = await store.upsertSchedule(payload.value, 'id');
    // let tes = await store.upsertSchedule(payload.value, 'id');
    // console.log(tes);
    if(status === 422) {
        setValidation(data);
    } else if(status >= 200 || status <= 299){
        closeDialog();
        store.refreshContent();
    }
}

onBeforeMount(async()=> {
    await Promise.all([
        store.fetchTrainDropdown(),
        store.fetchStationDropdown(),
        payload.value =  (id !== '') ? await store.findOne(id) : {}
    ])

})

</script>
