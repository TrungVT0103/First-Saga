import { ListParams, ListResponse, Student } from "interface"
import axiosClient from "./axiosClient"

const studentAPI = {
    // hiện tại res của api này đang có type là: responst của axios, chứ k phải là 1 mảng các obj gì gì đó
    getAll(params:ListParams): Promise<ListResponse<Student>> {
        const url = '/student'
        return axiosClient.get(url,{params})
    },
    getById(id:string): Promise<any> {
        const url = `/student/${id}`
        return axiosClient.get(url)
    },
    add(params:Student): Promise<Student> {
        const url = '/student'
        return axiosClient.post(url,params)
    },
    update(params:Student): Promise<Student> {
        const url = '/student'
        return axiosClient.patch(url,params)
    },
    remove(id:string): Promise<any> {
        const url = `/student/${id}`
        return axiosClient.delete(url)
    }
}

export * from './studentAPI'