<template>
    <div class="NavHeader">
        <NavItem to="/">首页</NavItem>
        <NavItem to="/hot">热点</NavItem>
        <div class="flex-grow"></div>
        <NavItem to="">搜索栏</NavItem>
        <RouterLink to="/creator"><button class="createCenter">创作者中心</button></RouterLink>
        <el-button v-if="!getIsLogin" @click="loginFormVisiable = true">登录/注册</el-button>
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
    </div>
</template>

<script setup lang="ts">
import { useEmailStore, useTokenStore } from "@/stores";
import { useRequest } from "vue-hooks-plus";
import { SLogin, SValidateToken } from "./services"
import type { IuserInfo } from "@/type";
import { storeToRefs } from "pinia";

const { getToken, setToken, setIsLogin } = useTokenStore();
const tokenStore = useTokenStore();
const { getIsLogin } = storeToRefs(tokenStore)
const { setEmail } = useEmailStore();
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
        setEmail(loginForm.email as any);
        setToken(res.access_token);
        setIsLogin(true)
        loginFormVisiable.value = false;
        signupFormVisiable.value = false;
    }).catch(err => { console.log(err) })
}
if (getToken !== '') {
    // localStorage 有 token, 需要校验是否合格 
    const { runAsync } = useRequest(SValidateToken, {
        manual: true,
    })
    runAsync(getToken).then(res => {
        // 校验成功 设置登录状态
        setEmail(res)
        setIsLogin(true)
    }).catch(err => { console.log(err) })
}

</script>

<style scoped>
.flex-grow {
    display: inline-block;
    width: 1100px;
    height: 1px;
}

.NavHeader {
    display: flex;
    align-items: center;
}

.createCenter {
    padding: 0 1rem;
    font-size: 1.167rem;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    white-space: nowrap;
    height: 100%;
    color: #fff;
    background-color: #1e80ff;
    border-radius: 3px;
    transition: background-color .1s linear .05s;
    appearance: none;
    border: none;
    outline: none;
    cursor: pointer;
}
</style>
