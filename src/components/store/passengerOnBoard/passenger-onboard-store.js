import { defineStore } from "pinia";
import actions from "./actions";

const usePassengerOnBoardStore = defineStore('passengerOnBoardStore', {
    state() {
        return {
            totalPages: 0,
            page: 1,
            content: [],
            trainName: '',
            arrStation: ''
        }
    },
    actions
})
export default usePassengerOnBoardStore;