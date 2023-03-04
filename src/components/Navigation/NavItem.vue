<template>
    <li class="nav-item">
        <RouterLink :to="to">
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
    width:52px;
    list-style: none;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.nav-item:hover ::before {
    background-color: #1e80ff;
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