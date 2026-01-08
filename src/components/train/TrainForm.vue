<template>
    <base-dialog :header="'Train Form'" :closeDialog="closeDialog">
        <base-labeled-item :label="'Code *'">
            <base-text-input :disabled="!!code" v-model="payload.code" :validation="validationMessage.code"></base-text-input>
        </base-labeled-item>
        <base-labeled-item :label="'Name *'">
            <base-text-input v-model="payload.name" :validation="validationMessage.name"></base-text-input>
        </base-labeled-item>
        <base-labeled-item :label="'Max Passenger *'">
            <base-number-input v-model="payload.maxPassengers" :validation="validationMessage.maxPassengers"></base-number-input>
        </base-labeled-item>
        <base-labeled-item :label="'Description'">
            <base-text-area v-model="payload.description" :validation="validationMessage.code"></base-text-area>
        </base-labeled-item>
        <base-button-container>
            <base-button :event="insertTrain">
                <i class="fas fa-save"></i>
                <span>Save</span>
            </base-button>
            <base-button :event="closeDialog">
                <i class="fas fa-times"></i>
                <span>Cancel</span>
            </base-button>
        </base-button-container>
    </base-dialog>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref, onBeforeMount } from 'vue';
import useTrainStore from '../store/train/train-store';


const {code} = defineProps(['code'])
const store = useTrainStore();
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

const insertTrain = async() => {
    validationMessage.value = {};
    let {data, status} = await store.upsertTrain(payload.value, code);
    if(status === 422) {
        setValidation(data);
    } else if(status >= 200 || status <= 299){
        closeDialog();
        store.refreshContent();
    }
}

const router = useRouter();

const closeDialog = () => router.push('/train')

onBeforeMount(async()=>{
    payload.value =  (code !== '') ? await store.findOne(code) : {}
})
</script>

