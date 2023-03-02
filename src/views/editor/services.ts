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

export async function SArticleUpdate({ articleId, title, content }: IArticle) {
    const { token } = useTokenStore()
    return request<any>('http://localhost:5173/api/article/update', {
        method: 'POST',
        data: {
            articleId,
            dto: { title, content }
        },
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
}

export async function SArticleGet(articleId: string) {
    const { token } = useTokenStore()
    return request<any>('http://localhost:5173/api/article/get', {
        method: 'POST',
        data: {
          articleId
        },
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
}

export async function SArticleDelete(articleId: string) {
    const { token } = useTokenStore()
    return request<any>('http://localhost:5173/api/article/delete', {
        method: 'POST',
        data: {
          articleId
        },
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
}