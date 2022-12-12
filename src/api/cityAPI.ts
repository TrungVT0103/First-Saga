import { city, ListResponse } from 'interface'
import axiosClient from './axiosClient'

const cityAPI = {
    // hiện tại res của api này đang có type là: responst của axios, chứ k phải là 1 mảng các obj gì gì đó
    getAll(): Promise<ListResponse<city>> {
        const url = '/cities'
        return axiosClient.get(url,{
            params: {
                _page: 1,
                _limit: 10
            }
        })
    }
}

export default cityAPI

export * from './cityAPI'