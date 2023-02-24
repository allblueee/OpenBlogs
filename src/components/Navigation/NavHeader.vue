<template>
    <NavItem to="/">Home</NavItem>
    <NavItem to="/hot">Hot</NavItem>
    <NavItem to="">Search</NavItem>
    <NavItem to="">Editor</NavItem>
    <NavItem to="" @click="loginFormVisiable = true">Profile</NavItem>
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
                <el-button @click="() => login(loginForm)">Login</el-button>
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
import { useTokenStore } from "@/stores/Token";
import { useRequest } from "vue-hooks-plus";
import { login } from "./services"
import type { IuserInfo } from "@/type";

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

</script>

<style scoped></style>
