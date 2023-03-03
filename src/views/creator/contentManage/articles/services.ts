import { request } from "@/network/axios"
import { useTokenStore } from "@/stores"

export async function SArticleGetPublished(page: any) {
    const { token } = useTokenStore()
    return request<any>(`http://localhost:5173/api/article/getPublished?page=${page}&pageSize=10`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
}

export async function SArticleGetNumber(type: any) {
    const { token } = useTokenStore()
    return request<any>(`http://localhost:5173/api/article/getNumber`, {
        method: 'POST',
        data: {
            type
        },
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
}

export async function SArticleDelete(articleId: any) {
    const { token } = useTokenStore()
    return request<any>(`http://localhost:5173/api/article/delete`, {
        method: 'POST',
        data: {
            articleId
        },
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
}