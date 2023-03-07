import { request } from "@/network/axios"
import { useTokenStore } from "@/stores"

export async function SArticleGetRandom() {
    const { token } = useTokenStore()
    return request<any>(`http://localhost:5173/api/article/getRandomArticles`, {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
}