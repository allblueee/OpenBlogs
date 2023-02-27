import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useTokenStore = defineStore("Token", () => {
  const token = ref(localStorage.getItem("token") || "");
  const isLogin = ref(false);
  const getToken = computed(() => token.value);
  const getIsLogin = computed(() => isLogin.value);
  function setIsLogin(value: boolean) {
    isLogin.value = value;
  }
  function setToken(Token: string) {
    localStorage.setItem("token", Token);
    token.value = Token;
  }

  return { token, getToken, setToken, isLogin, getIsLogin, setIsLogin };
});

export const useEmailStore = defineStore("Email", () => {
  const Email = ref("");
  const getEmail = computed(() => Email.value);
  function setEmail(email: string) {
    Email.value = email;
  }
  return { getEmail, setEmail }
});
