import { defineStore } from "pinia";
import actions from "./actions";

const useTrainStore = defineStore('trainStore', {
    state(){
        return {
            content : [],
            page : 1,
            totalPages : 0,
            name : ''
        }
    },
    actions
})

export default useTrainStore;