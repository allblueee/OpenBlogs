import { request } from "@/network/axios";
import type { IArticle } from "@/type";

export async function SArticleCreate({ title, content }: IArticle) {
    return request<String>('http://localhost:5173/api/article/create', {
        method: 'POST',
        data: {
            title,
            content
        }
    })
}

