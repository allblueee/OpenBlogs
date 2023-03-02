<template>
    <el-row>
        <el-col :span="5">
            <div>
                <!-- 个人信息 -->
                <el-avatar src="../../../src/assets/girl.jpg" />
                <span class="radius" style="{borderradius: 'round';}">{{ getEmail }}</span>
            </div>
            <el-button type="primary" @click="gotoEditor">写文章</el-button>
            <el-menu>
                <el-sub-menu index="1">
                    <template #title>
                        <span>内容管理</span>
                    </template>
                    <el-menu-item index="1-1">
                        <RouterLink to="/">文章管理</RouterLink>
                    </el-menu-item>
                    <el-menu-item index="1-2">专栏管理</el-menu-item>
                </el-sub-menu>
            </el-menu>
        </el-col>
        <el-col :span="19">
            <RouterView></RouterView>
        </el-col>
    </el-row>
</template>

<script setup lang="ts">
import { useEmailStore } from "@/stores";
import { storeToRefs } from "pinia";

const emailStore = useEmailStore();
const { getEmail } = storeToRefs(emailStore);
const router = useRouter()
const gotoEditor = () => {
    // 在新页面打开
    window.open('/editor/new', '_blank')
}
</script>

<style scoped></style>
