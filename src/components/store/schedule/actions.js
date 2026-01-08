import axios from "axios"

export default {
    setContent(content) {
        this.content = !content ? [] : content;
    },
    setPage(page){
        this.page = !page ? 1 : page;
    },
    setTotalPage(totalPages){
        this.totalPages = !totalPages ? null : totalPages;
    },
    async fetchTrain(trainCode) {
        const response = await axios.get(`/train/one/${trainCode}`);
        this.trainList[trainCode] = response.data;
    },
    async fetchStation(stationId) {
        const response = await axios.get(`/trainStation/${stationId}`)
        this.stationList[stationId] = response.data 
    },
    async fetchPassengerOnBoard(scheduleId) {
        const response = await axios.get(`/passenger/onBoard/${scheduleId}`)
        this.passengerList[scheduleId] = response.data
    },
    async fetchClassDropdown(){
        const response = await axios.get(`/trainClass`);
        this.classDropdown = response.data;
    },
    async fetchClassName(code){
        const response = await axios.get(`/trainClass/${code}`);
        this.classCodeList[code] = response.data;
    },
    async fetchTrainDropdown(){
        const response = await axios.get('/train/dropdown');
        this.trainDropdown = response.data
    },
    async fetchStationDropdown(){
        const response = await axios.get('/trainStation');
        this.stationDropdown = response.data
    },

    async refreshContent() {
        const response = await axios.get(`/schedule?trainName=${this.trainName}&departureStation=${this.departureStation}&departureTime=${this.departureTime}&classCode=${this.classCode}&page=${this.page}`)
        const {content, totalPages, first, last, number} = response.data

        this.setContent(content)
        this.setPage(number + 1)
        this.setTotalPage(totalPages)
        this.isFirst = first;
        this.isLast = last;
        
        const uniqueTrainCodes = [...new Set(content.map(item => item.trainCode))];
        const uniqueClassCodes = [...new Set(content.map(item => item.trainClassCode))]
        const uniqueStationIds = [...new Set([
            ...content.map(item => item.departureStationId),
            ...content.map(item => item.arrivalStationId)
        ])];
        const uniqueScheduleId = content.map(item => item.id);

        const trainsToLoad = uniqueTrainCodes.filter(code => !this.trainList[code]);
        const classToLoad = uniqueClassCodes.filter(id => !this.classCodeList[id])
        const stationsToLoad = uniqueStationIds.filter(id => !this.stationList[id]);

        await Promise.all([
            ...trainsToLoad.map(code => this.fetchTrain(code)),
            ...classToLoad.map(code => this.fetchClassName(code)),
            ...stationsToLoad.map(id=> this.fetchStation(id)),
            ...uniqueScheduleId.map(code => this.fetchPassengerOnBoard(code))
        ])
    },
    async upsertSchedule(payload, keyName){
        let method = 'post';
        if(payload[keyName]) {
            method = 'put'
        }
        const response = await axios[method]('schedule', payload)
            .catch(error =>{
                return error
            });
        return response;
    },
    async deleteById(id) {
        const response = await axios.delete(`schedule/${id}`);
        return response;
    },
    async findOne(id){
        const response = await axios.get(`schedule/one/${id}`);
        return response.data;
    },
}