<template>
    <base-dialog :header="'Delete Schedule'" :closeDialog="closeDialog">
       <p>
            Are you sure you want to delete this schedule? All this schedule's passengers will also be removed.
       </p>
       <base-button-container>
            <base-button :event="deleteSchedule">
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
import useScheduleStore from '../store/schedule/schedule-store';
const props = defineProps(['id'])

const store = useScheduleStore();
const router = useRouter();
const closeDialog = () => router.push('/schedule');

const deleteSchedule = async() => {
    await store.deleteById(props.id);
    store.refreshContent();
    closeDialog();
}
</script>
