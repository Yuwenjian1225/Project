 <!-- 管理员登录页面 -->
<template>
    <div class="body">
        <!-- 最外层的大盒子 -->
        <el-link type="primary" class="people" @click="turn" :icon="User">用户登录</el-link>
        <div class="box">
            <!-- 滑动盒子 -->
            <div class="pre-box" ref="preRef">
                <h1>WELCOME</h1>
                <p>PoLang system</p>
                <div class="img-box">
                    <img src="../assets/logo.png" alt="" id="avatar">
                </div>
            </div>
            <div class="register-form"></div>
            <!-- 登录-->
            <div class="login-form">
                <div class="title-box">
                    <h1>登录</h1>
                </div>
                <el-form ref="loginFormRef" :model="loginForm" label-width="10px">
                    <el-form-item prop="username" label="">
                        <el-input type="text" placeholder="用户名" v-model="loginForm.username" :suffix-icon="User" />
                    </el-form-item>
                    <el-form-item prop="password" label="">
                        <el-input type="password" placeholder="密码" show-password v-model="loginForm.password"
                            :suffix-icon="Lock" oncut="return false" onpaste="return false" oncopy="return false"/>
                    </el-form-item>

                </el-form>
                <!-- 按钮盒子 -->
                <div class="btn-box">
                    <button @click="login_ywj">登录</button>
                </div>

            </div>
        </div>

    </div>
</template>

<script setup>
import { reactive, ref } from '@vue/reactivity'
import { User, Lock } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router';
import { ElMessage } from 'element-plus';
import api from '@/api/root/rootApi.js'
const router = useRouter()
const loginFormRef = reactive()
const loginForm = reactive({
    username: '',
    password: ''
})

const turn = () => {
    router.push('./login')
}

//登录
const login_ywj = () => {
    api.rootLogin(loginForm).then((res) => {
        if (res.data.length > 0) {
            ElMessage({
                message: '登录成功',
                type: 'success',
                duration: 1000
            })
            router.push('./rootindex')
        } else {
            ElMessage({
                message: '登录失败！用户名或密码错误！',
                type: 'error',
                duration: 1000
            })
        }
    })

}

</script>



<style scoped>
.body {
    height: 100vh;
    overflow-x: hidden;
    display: flex;
    background: linear-gradient(to right, #a8edea, #fed6e3);
    position: relative;
}

.pre-box {
    width: 50%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 99;
    border-radius: 4px;
    background-color: #a6dedb;
    box-shadow: 2px 1prgb(98, 176, 173)rgba(0, 0, 0, .1);
}

.people {
    position: absolute;
    right: 5rem;
    top: 2rem;
    font-size: 20px;
    z-index: 99999;
}

el-input {
    outline: none;
}

html,
body {
    height: 100%;
}

span {
    position: absolute;
    z-index: 0;
    bottom: 0;
    border-radius: 50%;
    background: radial-gradient(circle at 72% 28%, #fff 3px, #ff7edf 8%, #5b5b5b, #aad7f9 100%);
    box-shadow: inset 0 0 6px #fff,
        inset 3px 0 6px #eaf5fc,
        inset 2px -2px 10px #efcde6,
        inset 0 0 60px #f9f6de,
        0 0 20px #fff;

}

/* 最外层的大盒子 */
.box {
    width: 600px;
    height: 400px;
    display: flex;
    position: relative;
    z-index: 2;
    margin: auto;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, .6);
    box-shadow: 2px 1px 19px rgba(0, 0, 0, .1);
}




.pre-box h1 {
    margin-top: 120px;
    text-align: center;
    letter-spacing: 5px;
    color: white;
    user-select: none;
    text-shadow: 4px 4px 3px rgba(0, 0, 0, .1);
}

.pre-box p {
    height: 20px;
    line-height: 20px;
    text-align: center;
    margin: 10px 0;
    user-select: none;
    font-weight: bold;
    color: white;
    text-shadow: 4px 4px 3px rgba(0, 0, 0, .1);
}

/* 图片盒子 */
.img-box {
    width: 90px;
    height: 90px;
    margin: 20px auto;
    border-radius: 50%;
    user-select: none;
    overflow: hidden;
}

/* 图片 */
.img-box img {
    width: 100%;
    transition: 0.5s;
}

.login-form,
.register-form {
    position: relative;
    top: -125px;
    flex: 1;
    height: 100%;
}

/* 标题盒子 */
.title-box {
    height: 300px;
    line-height: 500px;

}

.title-box h1 {
    text-align: center;
    color: white;
    user-select: none;
    letter-spacing: 5px;
    text-shadow: 4px 4px 3px rgba(0, 0, 0, .1);

}

.el-form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.el-form-item {
    width: 65%;
}

input {
    height: 40px;
    margin-bottom: 20px;
    text-indent: 10px;
    border: 1px solid #fff;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 120px;
    /* 增加磨砂质感 */
    backdrop-filter: blur(10px);
}

el-input:focus {
    color: #b0cfe9;

}

el-input:focus::placeholder {
    opacity: 0;
}

.btn-box {
    display: flex;
    justify-content: center;
}

button {
    width: 100px;
    height: 30px;
    margin: 0 7px;
    line-height: 30px;
    border: none;
    border-radius: 4px;
    background-color: #69b3f0;
    color: white;
}

button:hover {
    cursor: pointer;
    opacity: .8;
}

.btn-box p {
    height: 30px;
    line-height: 30px;
    user-select: none;
    font-size: 14px;
    color: white;

}

.btn-box p:hover {
    cursor: pointer;
    border-bottom: 1px solid white;
}
</style>