import { defineStore } from "pinia";
import actions from "./actions";

const useScheduleStore = defineStore('scheduleStore',  {
    state() {
        return {
            totalPages: 0,
            page: 1,
            content: [],
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
    actions,
});

export default useScheduleStore

