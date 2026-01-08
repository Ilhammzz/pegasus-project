<template>
    <base-dialog :header="'Delete Passenger'" :closeDialog="closeDialog">
       <p>
            Are you sure you want to delete this passenger? 
       </p>
       <base-button-container>
            <base-button :event="deletePassengerOnBoard">
                <i class="fas fa-trash"></i>
                <span>Remove</span>
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
const props = defineProps(['username'])

const store = usePassengerStore();
const router = useRouter();
const closeDialog = () => router.push(`/passenger`);

const deletePassengerOnBoard = async() => {
    await store.deleteByUsername(props.username);
    store.refreshContent();
    closeDialog();
}
</script>
