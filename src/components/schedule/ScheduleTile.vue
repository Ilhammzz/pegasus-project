<template>
    <base-double-column-card>
        <template #left>
            <base-labeled-item :label="'Train'">{{ trainName }}</base-labeled-item>
            <base-labeled-item :label="'Class'">{{ formattedClass }}</base-labeled-item>
            <base-labeled-item :label="'Passengers'">{{ passengerOnBoard }} / {{ maxPassengers }}</base-labeled-item>
            <base-labeled-item :label="'Cost'">{{ formattedCost }}</base-labeled-item>
        </template>
        <template #right>
            <base-labeled-item :label="'Dept. Station'">{{ deptStation }}</base-labeled-item>
            <base-labeled-item :label="'Dept. Time'">{{ formattedDeptTime }}</base-labeled-item>
            <base-labeled-item :label="'Arr. Station'">{{ arrStation }}</base-labeled-item>
            <base-labeled-item :label="'Arr. Time'">{{ formattedArrTime }}</base-labeled-item>
            <base-button-container>
                <base-button :isLink="true" :link="`/schedule/form/${props.id}`">
                    <i class="fas fa-edit"></i>
                    <span>Update</span>
                </base-button>
                <base-button :isLink="true" :link="`/schedule/delete/${id}`">
                    <i class="fas fa-trash"></i>
                    <span>Remove</span>
                </base-button>
                <base-button :event="goToPassenger">
                    <i class="fas fa-users"></i>
                    <span>Passengers</span>
                </base-button>
            </base-button-container>
        </template>
    </base-double-column-card>
</template>

<script setup>
import { useRouter } from 'vue-router';
import usePassengerOnBoardStore from '../store/passengerOnBoard/passenger-onboard-store';
import { computed } from 'vue';


const props = defineProps(['id', 'trainName', 'trainClass', 'deptStation', 'arrStation', 'cost', 'deptTime', 'duration', 'passengerOnBoard', 'maxPassengers'])
const store = usePassengerOnBoardStore();
const router = useRouter();

const goToPassenger = () => {
    store.setTrainName(props.trainName);
    store.setArrivalStation(props.arrStation);
    router.push(`/passengersOnBoard/${props.id}`)
}

const dateTimeFormatter = (dateString) => {
    const date = new Date(dateString);
    
    const tanggal = new Intl.DateTimeFormat('id-ID', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    }).format(date);

    const waktu = new Intl.DateTimeFormat('id-ID', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    }).format(date);

    return `${tanggal} - ${waktu.replace('.', ':')}`; 
};

const currencyFormatter = (value) => {
    const idrCurrency = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 2
    });
    return idrCurrency.format(value);
}

const formattedDeptTime = computed( ()=> dateTimeFormatter(props.deptTime));
const formattedArrTime = computed(()=>{
    const departureTime = new Date(props.deptTime);
    const arrivalTime = new Date(departureTime.getTime() + props.duration * 60000);
    return dateTimeFormatter(arrivalTime);
})

const formattedCost = computed(()=> currencyFormatter(props.cost));

const formattedClass = computed(()=> props.trainClass?.replace(' Class', ''))
</script>

<style lang="scss" scoped>

</style>