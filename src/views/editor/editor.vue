<template>
    <div>
        <el-input placeholder="请输入标题" v-model="article.title" />
        <Editor :value="article.content" :plugins="plugins" @change="handleChange" />
    </div>
</template>

<script setup lang="ts">
import gfm from "@bytemd/plugin-gfm";
import { Editor, Viewer } from "@bytemd/vue-next";
import { SArticleCreate, SArticleGet, SArticleUpdate } from "./services";
import { onBeforeRouteUpdate } from "vue-router";
import { debounce } from "@/utils/utilFunction";
import { useRequest } from "vue-hooks-plus";

const router = useRouter();
const route = useRoute();
const plugins = [gfm()];
const { runAsync: createArticle } = useRequest(SArticleCreate, {
    manual: true,
});
const { runAsync: updateArticle } = useRequest(SArticleUpdate, {
    manual: true,
});
const { runAsync: getArticle } = useRequest(SArticleGet, {
    manual: true,
});
const article = reactive({ title: "", content: "" });
if (!route.path.includes("new")) {
    getArticle(route.params.draftId as unknown as string).then(res => {
        article.title = res.title;
        article.content = res.content;
    }).catch(err => console.log(err));
}
// 这段代码太爽了 awesome code!
const { run: update } = useRequest(async () => {
    if (route.path.includes("new")) {
        // 创建 article
        try {
            const res = await createArticle(article as any);
            // 路由导航至对应 article
            router.push({
                path: `/editor/drafts/${res.id}`,
            });
        } catch (err) {
            console.log(err);
        }
    } else {
        try {
            const res_1 = await updateArticle({
                articleId: route.params.draftId as unknown as number,
                title: article.title,
                content: article.content,
            });
        } catch (err_1) {
            console.log(err_1);
        }
    }
}, {
    debounceWait: 1000,
    manual: true,
})
watch(article, () => update())

const handleChange = (v) => {
    article.content = v;
};
</script>
