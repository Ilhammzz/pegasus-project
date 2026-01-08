<template>
    <base-dialog :header="'Delete Passenger on Board'" :closeDialog="closeDialog">
       <p>
            Are you sure you want to delete this passenger on board? 
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
import usePassengerOnBoardStore from '../store/passengerOnBoard/passenger-onboard-store';
const props = defineProps(['username', 'id'])

const store = usePassengerOnBoardStore();
const router = useRouter();
const closeDialog = () => router.push(`/passengersOnBoard/${props.id}`);

const deletePassengerOnBoard = async() => {
    await store.deletePassengerOnBoard(props.id, props.username);
    store.refreshContent(props.id);
    closeDialog();
}
</script>
