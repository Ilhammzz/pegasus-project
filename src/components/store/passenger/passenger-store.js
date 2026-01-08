import { defineStore } from "pinia";
import actions from "./actions";

const usePassengerStore = defineStore('passengerStore', {
    state(){
        return {
            content: [],
            page: 1,
            totalPages: 0,
            firstName: '',
            lastName: '',
            gender: []
        }
    },
    actions,
})

export default usePassengerStore;