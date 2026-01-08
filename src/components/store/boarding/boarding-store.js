import { defineStore } from "pinia";
import actions from "./actions";

const useBoardingStore = defineStore('boardingStore', {
    state(){
        return {
            content : [],
            page : 1,
            totalPages : 0,
            username : '',
            fullName: '',
            trainList: {},
            stationList: {},
            passengerList: {},
            classCodeList: {},
            isFirst: false,
            isLast: false,
            trainName: '',
            departureStation: '',
            departureTime: '',
            classCode: '',
            classDropdown : [],
            trainDropdown : [],
            stationDropdown : []
        }
    },
    actions
})

export default useBoardingStore;