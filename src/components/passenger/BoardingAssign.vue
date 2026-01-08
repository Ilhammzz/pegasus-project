<template>
    <base-dialog :header="'Assign passenger '" :closeDialog="closeDialog">
       <p>
            Are you sure you want to assign this passenger to this schedule? 
       </p>
       <base-button-container>
            <base-button :event="assignPassenger">
                <i class="fas fa-plus"></i>
                <span>Assign</span>
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
import useBoardingStore from '../store/boarding/boarding-store';
const props = defineProps(['username', 'id'])

const store = useBoardingStore();
const router = useRouter();
const closeDialog = () => router.push(`/boarding/${props.username}`);

const assignPassenger = async() => {
    await store.assignPassenger(props.id, props.username);
    store.refreshContent();
    closeDialog();
}
</script>
