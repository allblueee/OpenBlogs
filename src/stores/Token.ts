import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useTokenStore = defineStore("Token", () => {
  const token = ref(localStorage.getItem("token") || '');
  const getToken = computed(() => token.value);
  function setToken(token: string) {
    localStorage.setItem("token", token);
  }

  return { token, getToken, setToken };
});
