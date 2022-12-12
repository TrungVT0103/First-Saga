import axios, {AxiosRequestConfig, AxiosResponse} from "axios";

const axiosClient = axios.create({
    baseURL: 'http://js-post-api.herokuapp.com/api',
    headers: {
        'Content-Type': 'application/json',
    },
    // interceptor: muon lam gi do trc khi gui api len serve
    // vd: muon gan token cho tat ca cac request
    // Add a request interceptor
})

axiosClient.interceptors.request.use(function (config:AxiosRequestConfig) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axiosClient.interceptors.response.use(function (response:AxiosResponse) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // bình thường trả về res giờ sẽ trả về res.data luôn
    return response.data
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

export default axiosClient