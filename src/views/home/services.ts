import { request } from '@/network/axios'
import type { IuserInfo } from '@/type'

export async function getUserInfo(userInfo: IuserInfo){
    return request('http://localhost:5173/api/auth/login', {
        method: 'POST',
        data: {
            email: userInfo.email,
            password: userInfo.password
        }
    })
}
