<template>
    <el-menu class="el-menu-demo" mode="horizontal" background-color="#1d2125" text-color="#fff" default-active="/index"
        style="z-index: 999;">
        <div style="margin: 0px 1rem;display: flex;align-items: center;">
            <img style="width: 50px;margin: 3px;" src="../assets/logo.png" alt="polang logo" />
            <p style="color:#1196db;">破浪——让前行无畏</p>
        </div>
        <div class="line">
            <el-divider>
                <el-icon><star-filled /></el-icon>
            </el-divider>
        </div>

        <div class="flex items-center-root">
            <router-link to="/rootlogin">
                <el-button type="primary" class="ml-2">退出</el-button>
            </router-link>
        </div>
    </el-menu>
</template>

<script setup>
import { StarFilled } from '@element-plus/icons-vue'
</script>



<style lang="scss" scoped>
:deep(.el-divider__text) {
    background-color: #1d2125;
    color: #1196db;
}

.line {
    display: flex;
    width: 72%;
    align-items: center;
    @media only screen and (min-width: 1000px) and (max-width: 1228px) {
        width: 60%;
    }
    @media only screen and (min-width: 600px) and (max-width: 999px) {
        width: 50%;
    }
    @media only screen and (min-width: 500px) and (max-width: 700px) {
        width: 35%;
    }
    @media only screen and (min-width: 100px) and (max-width: 600px) {
        display: none;
    }
}
</style>
<style scoped>
.flex-grow {
    flex-grow: 1;
}

p {
    font-family: "Alimama"
}

.items-center-root {
    position: absolute;
    right:68px;;
    top: 22%;
    display: flex;
    align-items: center;
}

.el-button {
    margin: 0px 8px;
}

a {
    text-decoration: none;
}
</style>
  