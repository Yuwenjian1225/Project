<template>
    <el-container>
        <el-aside>
            <el-menu active-text-color="#409eff" background-color="#1d2125" class="el-menu-vertical-demo"
            :default-active="$route.path" text-color="#fff" :router="true" >
                <el-menu-item index="/rootindex/index">
                    <el-icon><Platform /></el-icon>
                    <span>管理首页</span>
                  </el-menu-item>
                <el-sub-menu index="2">
                    <template #title>
                        <el-icon>
                            <Document />
                        </el-icon>
                        <span>用户资料</span>
                    </template>
                    <el-menu-item index="/rootindex/userInformation">用户信息</el-menu-item>
                    <el-menu-item index="/rootindex/cardOwner">藏品查询</el-menu-item>

                </el-sub-menu>
                <el-sub-menu index="3">
                    <template #title>
                        <el-icon>
                            <setting />
                        </el-icon>
                        <span>藏品管理</span>
                    </template>
                    <el-menu-item index="/rootindex/addCard">藏品发布</el-menu-item>
                    <el-menu-item index="/rootindex/buyList">藏品订单</el-menu-item>
                </el-sub-menu>
            </el-menu>
            


        </el-aside>
    </el-container>
</template>
<script>
export default {
    mounted() {
        this.param()

    },
    methods: {
        param() {
            const a = this.$route.path.replace('/','')
        }
    },
    
}
</script>
<script setup>
import { Document, Platform, Setting } from '@element-plus/icons-vue'


</script>
  
<style scoped>
.el-container {
    display: inline-flex;
    height: 99vh;
}

.el-aside {
    width: 12rem;
    display: flex;
    overflow: hidden;
    background-color: #2e323a;
}

.el-menu {
    border: none;
    width: 12rem;
    
}

.el-divider {
    margin: 0px;
}

a {
    text-decoration: none;
    color: white;
}

.flex {
    display: flex;
    align-items: center;
}
</style>
