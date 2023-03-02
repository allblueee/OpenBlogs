<template>
    <el-input placeholder="请输入标题" v-model="article.title" @input="onTitleChange" />
    <Editor :value="article.content" :plugins="plugins" @change="handleChange" />
</template>
  
<script setup lang="ts">
import gfm from '@bytemd/plugin-gfm'
import { Editor, Viewer } from '@bytemd/vue-next'
import { SArticleCreate } from './services';
import { onBeforeRouteUpdate } from 'vue-router';

const router = useRouter()
const route = useRoute()
const plugins = [
    gfm(),
]
const { runAsync: createArticle } = useRequest(SArticleCreate, {
    manual: true,
})
const article = reactive({ title: "", content: "" })
const onTitleChange = () => {
    // if (route.params.draftId == "new") {
    //     // 创建 article 
    //     createArticle(article).then(res => {
    //         // 路由导航至对应 article
    //         router.push({
    //             params: { draftId: res.id }
    //         })
    //     }).catch(err => { console.log(err) })
    // }
}
onBeforeRouteUpdate((to, from) => {
    // if (from.params.draftId == "new"&&from) { }
    setTimeout(
        () => console.log(1), 1000
    )
    console.log(to.params, from.params)
})


const handleChange = (v) => {
    article.content = v
}
</script>