<template>
    <base-dialog :header="'Delete Train'" :closeDialog="closeDialog">
       <p>
            Are you sure you want to delete this train? 
       </p>
       <base-button-container>
            <base-button :event="deleteTrain">
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
import useTrainStore from '../store/train/train-store';
import Swal from 'sweetalert2';
const props = defineProps(['code'])

const store = useTrainStore();
const router = useRouter();
const closeDialog = () => router.push(`/train`);

const deleteTrain = async() => {
    const response = await store.deleteByCode(props.code);
    console.log(response);
    if(response.status === 200) {
        store.refreshContent();
        closeDialog();
    } 
    else if(response.status === 409) {
        Swal.fire(response.data, '', 'error');
        closeDialog();
    }
}
</script>
