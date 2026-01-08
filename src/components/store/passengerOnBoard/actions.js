import axios from "axios"

export default {
    setContent(content) {
        this.content = !content ? [] : content;
    },
    setPage(page){
        this.page = !page ? 1 : page;
    },
    setTotalPage(totalPages){
        this.totalPages = !totalPages ? 0 : totalPages;
    },
    setTrainName(trainName) {
        this.trainName = trainName;
    },
    setArrivalStation(arrStation) {
        this.arrStation = arrStation;
    },

    async refreshContent(scheduleId) {
        const response = await axios.get(`passenger/onBoard/${scheduleId}?page=${this.page}`)
        const {content, number, totalPages} = response.data;
        this.content = content;
        this.setPage(number + 1);
        this.setTotalPage(totalPages)

    },

    async deletePassengerOnBoard(scheduleId, username) {
        const response = await axios.delete(`board?scheduleId=${scheduleId}&username=${username}`);
        return response
    }
}