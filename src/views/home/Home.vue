<template>
    <div class="main-container">
        <div class="timeline-index-view">
            <nav class="classify-header">
                <div class="nav-list">
                    <NavItem to="/recommended">综合</NavItem>
                    <NavItem to="/following">关注</NavItem>
                    <NavItem to="/frontend">前端</NavItem>
                    <NavItem to="/backend">后端</NavItem>
                    <NavItem to="/aigc">AIGC</NavItem>
                    <NavItem to="/ios">IOS</NavItem>
                    <NavItem to="/android">Android</NavItem>
                    <NavItem to="" id="tagManage">
                        标签管理
                    </NavItem>
                </div>
            </nav>
            <router-view></router-view>
        </div>
    </div>
</template>
<script setup lang="ts">
import NavItem from '@/components/Navigation/NavItem.vue';
</script>
<style scoped>
.nav-item {
    height: 45.99px;
    width: auto;
    padding-left: 12px;
    padding-right: 12px;
}
.nav-item:hover ::before {
    background-color: #1e80ff;
    width:100%;
}
.main-container {
    position: relative;
}

.timeline-index-view {
    margin-top: 62.04px;
}

.classify-header {
    top: 60px;
    position: fixed;
    width: 100%;
    z-index: 100;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
    transition: all .2s;
    transform: translateZ(0);
    left: 0;
    background-color: #fff;
    height: 45.99px;
}

.nav-list {
    display: flex;
    align-items: center;
    position: relative;
    height: 100%;
    padding: 0;
    margin: 0;
    max-width: 960px;
    height: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    line-height: 1;
    position: relative;
}

#tagManage {
    position: absolute;
    right: 0;
    top: 0;
    text-align: center;
}
</style>