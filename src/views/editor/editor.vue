<template>
    <el-input placeholder="请输入标题" v-model="article.title" @input="debounceOnTitleChange" />
    <Editor :value="article.content" :plugins="plugins" @change="handleChange" />
</template>
  
<script setup lang="ts">
import gfm from '@bytemd/plugin-gfm'
import { Editor, Viewer } from '@bytemd/vue-next'
import { SArticleCreate } from './services';
import { onBeforeRouteUpdate } from 'vue-router';
import { debounce } from '@/utils/utilFunction';

const router = useRouter()
const route = useRoute()
const plugins = [
    gfm(),
]
const { runAsync: createArticle } = useRequest(SArticleCreate, {
    manual: true,
})
const article = reactive({ title: "", content: "" })
onBeforeRouteUpdate((to, from) => {
})

const debounceOnTitleChange = debounce(() => {
    if (route.path.includes("new")) {
        // 创建 article 
        createArticle(article).then(res => {
            // 路由导航至对应 article
            router.push({
                path: `/editor/drafts/${res.id}`,
            })
        }).catch(err => { console.log(err) })
    }
}, 1000)

const handleChange = (v) => {
    article.content = v
}
</script>