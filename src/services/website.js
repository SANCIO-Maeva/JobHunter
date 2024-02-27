// src/services/website.js

import instance from "./api";

export async function websiteGetAll(){
    //@todo : gestion fine des erreurs
    const response = await instance.get(`/website/`, {
        params: {
            offset: "0",
            limit: "150",
            where:"",
        }
    });
    return response.data;
}
