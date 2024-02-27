// src/services/api.js

import axios from "axios";

const instance = axios.create({
    baseURL: import.meta.env.VITE_NOCO_URL,
});

instance.interceptors.request.use(
    function(config){
        config.headers["xc-token"] = import.meta.env.VITE_NOCO_XC_TOKEN;
        return config;
    },
    function (error){
        return Promise.reject(error);
    }
);

export default instance;
