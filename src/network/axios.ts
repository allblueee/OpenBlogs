import axios from 'axios'
import type { AxiosRequestConfig } from 'axios'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

const axiosInstance = axios.create({
    timeout: 10000,
})

axiosInstance.interceptors.request.use(
    config => {
        return config
    },
    error => {
        return Promise.reject(error)
    },
)

axiosInstance.interceptors.response.use(
    response => {
        // 这个怎么便捷的设置
        if (response?.status <= 205) {
            return Promise.resolve(response.data)
        } else {
            return Promise.reject(response)
        }
    },
    error => {
        if (error?.message?.includes?.('timeout')) {
            console.log('timeout')
        } else {
            console.log(error)
        }
        return Promise.reject(error)
    },
)

const request = <ResponseType = unknown>(
    url: string,
    options?: AxiosRequestConfig<any>,
): Promise<ResponseType> => {
    return new Promise((resolve, reject) => {
        axiosInstance({
            url,
            ...options,
        })
            .then(res => {
                resolve(res as any)
            })
            .catch(err => reject(err))
    })
}
export { axiosInstance, request }
