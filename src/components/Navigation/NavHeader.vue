<template>
    <header class="scroll">
        <div class="NavHeader">
            <ul class="nav-list">
                <li class="main-nav-list">
                    <ul class="main-nav-list-ul">
                        <NavItem to="/">首页</NavItem>
                        <NavItem to="/hot">热点</NavItem>
                    </ul>
                </li>
                <ul class="right-side-nav">
                    <NavItem to="">搜索栏</NavItem>
                    <RouterLink to="/creator"><button class="createCenter">创作者中心</button></RouterLink>
                    <el-button v-if="!getIsLogin" @click="loginFormVisiable = true">登录/注册</el-button>
                    <NavItem to="" v-else><el-avatar src="../../../src/assets/girl.jpg" /></NavItem>
                </ul>
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
                            No account? <el-link type="success" :underline="false" @click="createAccount">Create
                                one</el-link>
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
            </ul>
        </div>
    </header>
</template>

<script setup lang="ts">
import { useEmailStore, useTokenStore } from "@/stores";
import { useRequest } from "vue-hooks-plus";
import { SLogin, SValidateToken } from "./services"
import type { IuserInfo } from "@/type";
import { storeToRefs } from "pinia";
import { debounce } from "@/utils/utilFunction";

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

let lastScrollTop = 0;
let navbar = null as unknown as Element;
nextTick(() => {
    navbar = document.querySelector('.scroll') as Element;
})
window.addEventListener('scroll', debounce(function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setTimeout(() => {
        if (scrollTop > lastScrollTop) {
            // 向下滚动，隐藏导航栏
            navbar.classList.remove('visible');
        } else {
            // 向上滚动，显示导航栏
            navbar.classList.add('visible');
        }
        lastScrollTop = scrollTop;
    }, 0)
}, 100));

</script>

<style scoped>
.flex-grow {
    display: inline-block;
    width: 1100px;
    height: 1px;
}

.main-header-box {
    height: 60px;
}

header {
    position: fixed;
    left: 0px;
    right: 0px;
    top: 0px;
    height: 60px;
    z-index: 250;
    background-color: rgb(255, 255, 255);
    border-bottom: 1px solid #f1f1f1;
    opacity: 1;
    transition: all .2s;
    transform: translate3d(0,-100%,0);
}

.visible {
    transform: translateZ(0);
}

.NavHeader {
    height: 60px;
}

.right-side-nav {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: relative;
    height: 100%;
    margin: 0;
    order: 0;
}

.nav-list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    flex-direction: row-reverse;
    height: 100%;
    padding: 0;
    margin: 0
}

.main-nav-list {
    display: flex;
    order: 99;
}

.main-nav-list-ul {
    display: flex;
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
    appearance: none;
    border: none;
    outline: none;
    cursor: pointer;
}
</style>
