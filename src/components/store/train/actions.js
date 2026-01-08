import axios from "axios";

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

    async refreshContent(){
        const response = await axios.get(`train?name=${this.name}&page=${this.page}`);
        const {content, number, totalPages} = response.data;
        this.setContent(content);
        this.setPage(number + 1);
        this.setTotalPage(totalPages)
    },

    async upsertTrain(payload, urlProps){
        let method = 'post'
        if(urlProps !== ''){
            method ='put'
        }

        const response = await axios[method]('train', payload)
        return response;
    },
    async findOne(code){
        const response = await axios.get(`train/one/${code}`);
        return response.data;
    },
    async deleteByCode(code){
        const response = await axios.delete(`train/${code}`)
        return response;
    }
}