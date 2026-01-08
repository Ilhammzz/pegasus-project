<template>
    <base-double-column-card>
        <template #left>
            <base-labeled-item :label="'Username'">{{ username }}</base-labeled-item>
            <base-labeled-item :label="'FullName'">{{ firstName }} {{ lastName }}</base-labeled-item>
            <base-labeled-item :label="'Gender'">{{ formattedGender }}</base-labeled-item>
        </template>
        <template #right>
            <base-labeled-item :label="'BirthDate'">{{ formattedBirthDate }}</base-labeled-item>
            <base-labeled-item :label="'ID Number'">{{ idNumber }}</base-labeled-item>
            <base-labeled-item :label="'Address'">{{ address }}</base-labeled-item>
            <base-button-container>
                <base-button :isLink="true" :link="`/passenger/form/${username}`">
                    <i class="fas fa-edit"></i>
                    <span>Update</span>
                </base-button>
                <base-button :isLink="true" :link="`/passenger/delete/${username}`">
                    <i class="fas fa-trash"></i>
                    <span>Remove</span>
                </base-button>
                <base-button 
                    :event="goToBoarding">
                    <i class="fas fa-train"></i>
                    <span>Board</span>
                </base-button>
            </base-button-container>
        </template>
    </base-double-column-card>
</template>

<script setup>
import { useRouter } from 'vue-router';
import useBoardingStore from '../store/boarding/boarding-store';
import { computed } from 'vue';

const props = defineProps(['username', 'firstName', 'lastName', 'gender', 'birthDate', 'idNumber', 'address'])
const router = useRouter();
const store = useBoardingStore();

const birthDateFormatter = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-UK', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    }).format(date);
}

const formattedGender = computed(() => {
    if(props.gender == 'M') {
        return 'Male'
    } else {
        return 'Female'
    }
});

const formattedBirthDate = computed(() => birthDateFormatter(props.birthDate))

const goToBoarding = () => {
    store.setUsername(props.username);
    store.setFullName(props.firstName, props.lastName)
    router.push(`/boarding/${props.username}`)
}
</script>
