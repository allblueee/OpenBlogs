<template>
    <el-row>
        <el-col :span="5">
            <div>
                <!-- 个人信息 -->
                <el-avatar src="../../../src/assets/girl.jpg" />
                <span class="radius" style="
                 {
                  borderradius: 'round';
                }
              ">{{ getEmail }}</span>
            </div>
            <el-button type="primary">写文章</el-button>
        </el-col>
        <el-col :span="19"></el-col>
    </el-row>
</template>

<script setup lang="ts">
import { useEmailStore } from "@/stores";
import { storeToRefs } from "pinia";

const emailStore = useEmailStore();
const { getEmail } = storeToRefs(emailStore);
</script>

<style scoped></style>
