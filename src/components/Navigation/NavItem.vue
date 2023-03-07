<template>
    <li class="nav-item">
        <RouterLink :to="to" active-class="active-link">
            <slot />
        </RouterLink>
    </li>
</template>

<script setup lang="ts">
defineProps<{ to: string }>()
</script>

<style scoped>
.nav-item {
    position: relative;
    margin-right: 5px;
    width: 52px;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    height: 60px;
    cursor: pointer;
}

.nav-item:hover ::before {
    background-color: #1e80ff;
}
.nav-item:active{
    color: #1e80ff
}

.active-link {
    color: #1e80ff
}

a {
    color: inherit;
    /* 或者可以指定链接的颜色，例如： color: #333; */
    text-decoration: none;
    /* 去掉链接的下划线 */
    outline: none;
    /* 去掉链接的聚焦边框 */
}

.nav-item ::before {
    content: "";
    height: 2px;
    position: absolute;
    top: auto;
    right: 0;
    bottom: 0;
    left: 0;
}
</style>