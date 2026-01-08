import axios from "axios";
import router from "./router";

export default function configureAxios(){
    axios.defaults.baseURL = 'http://localhost:7060/api';

    axios.defaults.validateStatus = status => {
        const statusCodes = [500]; 
        return !statusCodes.includes(status);

    }
    axios.interceptors.response.use(
        response => {
            return response;
        },
        error => {
            if (error.response.status === 500) {
                router.push({ name: 'ServerError' });
                return Promise.reject(error);
            }
            return Promise.reject(error); 
        }
    );
}