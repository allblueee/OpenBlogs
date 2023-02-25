<template>
    <NavItem to="/">首页</NavItem>
    <NavItem to="/hot">热点</NavItem>
    <NavItem to="">搜索栏</NavItem>
    <NavItem to="/creator">创作者中心</NavItem>

    <NavItem to="" v-if="!getIsLogin" @click="loginFormVisiable = true">登录/注册</NavItem>
    <NavItem to="" v-else><el-avatar src="../../../src/assets/girl.jpg" /></NavItem>
    <el-dialog v-model="loginFormVisiable">
        <el-form :model="loginForm">
            Welcome!
            <el-form-item label="Email">
                <el-input v-model="loginForm.email" />
            </el-form-item>
            <el-form-item label="Password">
                <el-input type="password" v-model="loginForm.password" />
            </el-form-item>
            <el-form-item>
                <el-button @click="login">Login</el-button>
            </el-form-item>
            <el-form-item>
                No account? <el-link type="success" :underline="false" @click="createAccount">Create one</el-link>
            </el-form-item>
        </el-form>
    </el-dialog>
    <el-dialog v-model="signupFormVisiable">
        <el-form :model="signupForm">
            Welcome!
            <el-form-item label="Email">
                <el-input v-model="signupForm.email" />
            </el-form-item>
            <el-form-item label="Password">
                <el-input type="password" v-model="signupForm.password" />
            </el-form-item>
            <el-form-item>
                Already have am account? <el-link type="success" :underline="false" @click="loginDialog">
                </el-link>
            </el-form-item>
        </el-form>
    </el-dialog>
</template>

<script setup lang="ts">
import { useEmailStore, useTokenStore } from "@/stores";
import { useRequest } from "vue-hooks-plus";
import { SLogin, validateToken } from "./services"
import type { IuserInfo } from "@/type";
import { storeToRefs } from "pinia";

const { getToken,setToken, setIsLogin } = useTokenStore();
const tokenStore = useTokenStore();
const { getIsLogin } = storeToRefs(tokenStore)
const { runAsync: runAsyncLogin } = useRequest(SLogin, {
    manual: true,
})

const loginFormVisiable = ref(false)
const signupFormVisiable = ref(false)

const loginForm = reactive<IuserInfo>({ email: '', password: '', })
const signupForm = reactive<IuserInfo>({ email: '', password: '', })

const createAccount = () => {
    loginFormVisiable.value = false;
    signupFormVisiable.value = true;
}

const loginDialog = () => {
    loginFormVisiable.value = true;
    signupFormVisiable.value = false;
}

const login = () => {
    runAsyncLogin(loginForm).then(res => {
        setToken(res.access_token)
    }).catch(err => { console.log(err) })
}
if (getToken !== '') {
    // localStorage 有 token, 需要校验是否合格 
    const { runAsync } = useRequest(validateToken, {
        manual: true,
    })
    runAsync(getToken).then(res => {
        // 校验成功 设置登录状态
        setIsLogin(true)
    }).catch(err => { console.log(err) })
}

</script>

<style scoped></style>
