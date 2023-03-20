import axios from "axios"

export const service = axios.create({
        baseURL:"https://6416e7c747092b8b61378576.mockapi.io/api/job"
    })