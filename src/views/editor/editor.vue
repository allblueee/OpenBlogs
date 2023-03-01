<template>
    <el-input placeholder="请输入标题" v-model="title" @input="onTitleChange" />
    <Editor :value="content" :plugins="plugins" :locale="zhHans" @change="handleChange" />
</template>
  
<script setup lang="ts">
import gfm from '@bytemd/plugin-gfm'
import { Editor, Viewer } from '@bytemd/vue-next'
import zhHans from 'bytemd/locales/zh_Hans.json'
const router = useRouter()
const route = useRoute()
const plugins = [
    gfm(),
]
const title = ref('')
const onTitleChange = () => {
    if(route.params.draftId=="new"){
        // 创建 article 
        
        // 路由导航至对应 article
        router.push({
            params:{draftId:1}
        })
    }
}
let content = "";
const handleChange = (v) => {
    content = v
}
</script>