import { request } from '@/network/axios'
import type { IuserInfo } from '@/type'

export async function validateToken(token: string) {
    return request<String>('http://localhost:5173/api/auth/validatetoken', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
}

export async function login({ email, password }: IuserInfo) {
    return request<String>('http://localhost:5173/api/auth/login', {
        method: 'POST',
        data: {
            email,
            password
        }
    })
}