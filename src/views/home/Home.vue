<template>
    <div class="classifyHeader">
        <div style="width:200px" />
        <NavItem to="/frontend">前端</NavItem>
        <NavItem to="/backend">后端</NavItem>
        <NavItem to="/aigc">AIGC</NavItem>
        <NavItem to="/ios">IOS</NavItem>
        <NavItem to="/android">Android</NavItem>
        <RouterLink id="tagManage" to="">标签管理</RouterLink>
    </div>
    <router-view></router-view>
</template>
<script setup lang="ts">
import NavItem from '@/components/Navigation/NavItem.vue';
</script>
<style scoped>
.classifyHeader {
    display: flex;
    background-color: white;
    gap: 15px;
    align-items: center;
    position: relative;
}

#tagManage {
    position: absolute;
    right: 200px;
}
</style>