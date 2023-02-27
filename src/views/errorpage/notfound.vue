<template>
    <div>
        Not found
        <el-link @click="returnToHome">点击回到首页</el-link>
    </div>
</template>

<script setup lang="ts">
const router = useRouter()
const returnToHome = () => {
    router.push('/')
}
</script>

<style scoped></style>