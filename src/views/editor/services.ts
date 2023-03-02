import { request } from "@/network/axios";
import { useTokenStore } from "@/stores";
import type { IArticle } from "@/type";

export async function SArticleCreate({ title, content }: IArticle) {
    const { token } = useTokenStore()
    return request<any>('http://localhost:5173/api/article/create', {
        method: 'POST',
        data: {
            title,
            content
        },
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
}

