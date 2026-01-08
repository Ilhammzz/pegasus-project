<template>
    <base-dialog :header="'Passenger Form'" :closeDialog="closeDialog">
        <base-labeled-item :label="'Username *'">
            <base-text-input :disabled="!!username" v-model="payload.username" :validation="validationMessage.username" ></base-text-input>
        </base-labeled-item>
        <base-labeled-item :label="'First Name *'">
            <base-text-input v-model="payload.firstName" :validation="validationMessage.firstName"></base-text-input>
        </base-labeled-item>
        <base-labeled-item :label="'Last Name'">
            <base-text-input v-model="payload.lastName" :validation="validationMessage.lastName"></base-text-input>
        </base-labeled-item>
        <base-labeled-item :label="'Gender *'">
            <base-dropdown-input 
                :options="[{value: 'M', text: 'Male'}, {value: 'F', text: 'Female'}]"
                v-model="payload.gender" :validation="validationMessage.gender"></base-dropdown-input>
        </base-labeled-item>
        <base-labeled-item :label="'Birth Date *'">
            <base-date-input v-model="payload.birthDate" :validation="validationMessage.birthDate"></base-date-input>
        </base-labeled-item>
        <base-labeled-item :label="'Id Number *'">
            <base-text-input v-model="payload.idNumber" :validation="validationMessage.idNumber"></base-text-input>
        </base-labeled-item>
        <base-labeled-item :label="'Address'">
            <base-text-area v-model="payload.address" :validation="validationMessage.address"></base-text-area>
        </base-labeled-item>
        <base-button-container>
            <base-button :event="insertPassenger">
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
import usePassengerStore from '../store/passenger/passenger-store';
import { onBeforeMount, ref } from 'vue';

const {username} = defineProps(['username']);
const store = usePassengerStore();
const router = useRouter();  
const payload = ref({});
const validationMessage = ref({});

console.log(payload.value);
const closeDialog = () => {router.push('/passenger')};

const setValidation = data => {
    const errors = {};

    for(let error of data) {
        if(error.field) {
            errors[error.field] = error.defaultMessage
        }
    }
    validationMessage.value = errors;
} //PAHAMI LAGI

const insertPassenger = async() => {
    validationMessage.value = {};
    let {data, status} = await store.upsertPassenger(payload.value, username);
    if(status === 422) {
        setValidation(data);
    } else if(status >= 200 || status <= 299){
        closeDialog();
        store.refreshContent();
    }
}

onBeforeMount(async()=>{
    payload.value =  (username !== '') ? await store.findOne(username) : {}
})
</script>
