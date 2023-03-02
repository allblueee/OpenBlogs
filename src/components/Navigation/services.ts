import { request } from '@/network/axios'
import type { IuserInfo } from '@/type'

export async function SValidateToken(token: string) {
    return request<String>('http://localhost:5173/api/auth/validatetoken', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
}

export async function SLogin({ email, password }: IuserInfo) {
    return request<{"access_token":''}>('http://localhost:5173/api/auth/login', {
        method: 'POST',
        data: {
            email,
            password
        }
    })
}

