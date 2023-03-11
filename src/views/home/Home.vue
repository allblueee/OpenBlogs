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
            <router-view class="content-home"/>
        </div>
    </div>
</template>
<script setup lang="ts">
import NavItem from '@/components/Navigation/NavItem.vue';
import { debounce, throttle } from '@/utils/utilFunction';
let lastScrollTop = 0;
let classifyHeader = null as unknown as Element;
nextTick(() => {
    classifyHeader = document.querySelector('.classify-header') as Element;
})
window.addEventListener('scroll', throttle(function () {
    console.log("scroll")
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        console.log(classifyHeader.classList)
        classifyHeader.classList.add('high');
    } else {
        classifyHeader.classList.remove('high');
    }
    lastScrollTop = scrollTop;
}, 50));
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
    width: 100%;
}

.main-container {
    position: relative;
}

.timeline-index-view {
    margin-top: 62.04px;
}

.classify-header {
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    height: 45.99px;
    z-index: 100;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
    background-color: #fff;
    opacity: 1;
    transition: all .2s;
}

.high {
    top: 0px;
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
.content-home{
    margin-top: 120px;
}
</style>