import axios from "axios";


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

    async refreshContent(){
        const response = await axios.get(`passenger?firstName=${this.firstName}&lastName=${this.lastName}&page=${this.page}`)
        const {content, number, totalPages} = response.data;

        this.setContent(content);
        this.setPage(number + 1);
        this.setTotalPage(totalPages);
    },
    async upsertPassenger(payload, urlProps) {
        let method = 'post'
        if(urlProps !== '') {
            method = 'put'
        }
        const response = await axios[method]('passenger', payload)
            .catch(error => {
                return error
            });
        return response;
    },
    async findOne(username) {
        const response = await axios.get(`passenger/one/${username}`)
        return response.data;
    },
    async deleteByUsername(username) {
        const response = await axios.delete(`passenger/${username}`)
        return response;
    }
}