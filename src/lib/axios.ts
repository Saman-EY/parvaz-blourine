import axios, {AxiosInstance} from 'axios';
import {env} from "@/env";

const axiosInstance: AxiosInstance = axios.create({
    baseURL: env.NEXT_PUBLIC_API_PATH,
    headers: {
        // 'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    withCredentials: false,
});

export default axiosInstance;