import { request } from "@/network/axios";

export async function SLogin({ email, password }: IuserInfo) {
    return request<String>('http://localhost:5173/api/article/create', {
        method: 'POST',
        data: {
            email,
            password
        }
    })
}

