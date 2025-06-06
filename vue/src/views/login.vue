 <!-- 用户登录页面 -->
<template>
    <div class="body" :style="{ backgroundImage: 'url(' + require('../assets/picture/x2.jpg') + ')' }">
        <el-link type="primary" class="people" @click="turn" :icon="User">管理员登录</el-link>
        <div class="box">
            <!-- 登录 -->
            <div class="login-form">
                <div class="title-box">
                    <h1>登录</h1>
                </div>
                <!-- 输入框盒子 -->
                <el-form ref="loginFormRef" :model="this.loginForm" :rules="rules" label-width="10px">
                    <el-form-item prop="account" label="">
                        <el-input type="text" placeholder="请输入手机号" v-model="this.loginForm.account" :suffix-icon="Phone" />
                    </el-form-item>
                    <el-form-item prop="password" label="" >
                        <el-input type="password" placeholder="请输入密码" show-password v-model="this.loginForm.password"
                            :suffix-icon="Lock" oncut="return false" onpaste="return false" oncopy="return false"/>
                    </el-form-item>
                    <div class="p">
                        <label class="checkbox-container">
                            <input class="custom-checkbox" checked="" type="checkbox" v-model="this.checkYes">
                            <span class="checkmark"></span>
                            <span>记住密码</span>
                        </label>
                    </div>

                </el-form>
                <!-- 按钮盒子 -->
                <div class="btn-box">
                    <button class="button" @click="login">立即登录</button>
                </div>

            </div>
            <div class="right-form" @click="ToRegister">
                <el-avatar :icon="UserFilled" />
                <p style="writing-mode: vertical-rl; text-orientation: upright;">立即注册</p>
            </div>
        </div>

    </div>
</template>

<script>
import { ethers } from 'ethers';
export default {
    data() {
        return {
            provider: null,
            signer: null,
            account: '',
            address: '',
            loginFormRef: '',
            loginForm: {
                account: window.sessionStorage.getItem('token'),
                password: window.sessionStorage.getItem('password')||''
            },
            checkYes:true,
        };
    },
    mounted() {
        this.connectWallet();
    },
    methods: {
        //连接钱包
        async connectWallet() {
            try {
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                await provider.send('eth_requestAccounts', []);
                const signer = provider.getSigner();
                this.address = await signer.getAddress();
            } catch (error) {
                console.error('连接失败', error);
            }
            // 监听账户变化事件
            window.ethereum.on('accountsChanged', (accounts) => {
                this.address = accounts[0];
            });
        },
        //登录
        login() {
            if (this.address == '') {
                ElMessage.warning("未获取到钱包地址")
            } else {
                this.$refs.loginFormRef.validate(valid => {
                    if (valid) {
                        this.loginForm.address = this.address
                        api.loginApi(this.loginForm).then(result => {
                            let res = result.data
                            if (res.length > 0) {
                                if(res[0].permit != 1){
                                    ElMessage({
                                    message: '账户状态异常，请联系管理员重试',
                                    type: 'warning',
                                    duration: 1000
                                })
                                }else{
                                    ElMessage({
                                    message: '登录成功',
                                    type: 'success',
                                    duration: 1000
                                })
                                window.sessionStorage.setItem('token', this.loginForm.account)
                                if(this.checkYes){
                                    window.sessionStorage.setItem('password', this.loginForm.password)
                                }else{
                                    window.sessionStorage.removeItem('password');
                                }
                                setTimeout(() => {
                                    this.$router.push('./transition')
                                }, 800)
                                }

                            } else {
                                ElMessage.error("登录失败！请检查输入信息及钱包地址")
                            }
                        }).catch(error => {
                            console.log(error)
                        })
                    } else {
                        return
                    }
                })
            }

        },
    },
}; 
</script>
<script setup>
import { reactive, ref } from '@vue/reactivity'
import { User, Lock, Phone, UserFilled } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router';
import { ElMessage } from 'element-plus';
import api from '@/api/user.js'

const rules = reactive({
    account: [
        { required: true, message: '请输入手机号', trigger: 'blur' },
        { min: 11, max: 11, message: '手机号格式错误', trigger: 'blur' },
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 6, message: '长度应大于6', trigger: 'blur' },
    ],
})

const router = useRouter()

const turn = () => {
    router.push('./rootlogin')
}

const ToRegister = () => {
    router.push('./register')
}


</script>


<style lang="scss" scoped>
p {
    font-family: unset;
}
:deep(.el-avatar){
    margin: 0px 5px 25px 5px;
}

html,
body {
    height: 100%;
}

/* 最外层的大盒子 */
.box {
    width: 400px;
    height: 400px;
    display: flex;
    position: relative;
    z-index: 2;
    margin: auto;
    border-radius: 8px;
    backdrop-filter: blur(3px);
    border: 1px solid rgba(255, 255, 255, .2);
    box-shadow: 2px 1px 19px rgba(0, 0, 0, .2);
}



.body {
    height: 100vh;
    overflow-x: hidden;
    display: flex;
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    position: relative;
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
    color: white;
}

:deep(.el-input .el-input__inner) {
    font-size: 1rem;
    color: white;
}

:deep(.el-input .el-input__wrapper) {
    height: 40px;
    background-color: rgba(255, 255, 255, 0.2);
    border: 0px;
    box-shadow: 0 0 0 0px;
    border-radius: 20px;
}

:deep(.el-input .el-input__inner::placeholder) {
    color: #fff;
}

:deep(.el-form-item .el-form-item__error) {
    color: #920000;
    margin-left: 11px;
    font-size: 13px;
    font-weight: 600;
}

/* 登录和注册盒子 */
.login-form,
.register-form {
    position: relative;
    top: -196px;
    flex: 1;
    height: 100%;
}

.p {
    color: white;
    position: absolute;
    bottom: -50px;
    right: 66px;
}

/* 标题盒子 */
.title-box {
    height: 300px;
    line-height: 500px;

}

/* 标题 */
.title-box h1 {
    text-align: center;
    color: white;
    user-select: none;
    letter-spacing: 5px;
    text-shadow: 4px 4px 3px rgba(0, 0, 0, .1);

}

/* 输入框盒子 */
.el-form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.el-form-item {
    width: 65%;

}

/* 输入框 */
input {
    height: 40px;
    margin-bottom: 20px;
    text-indent: 10px;
    border: 1px solid #fff;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 120px;
    /* 增加磨砂质感 */
    backdrop-filter: blur(0.8rem);
}

el-input:focus {
    /* 光标颜色 */
    color: #b0cfe9;

}

/* 聚焦时隐藏文字 */
el-input:focus::placeholder {
    opacity: 0;
}

/* 按钮盒子 */
.btn-box {
    display: flex;
    justify-content: center;
}

/* 按钮 */
button {
    font-size: 16px;
    width: 56%;
    height: 40px;
    margin-top: 96px;
    line-height: 30px;
    border: solid 1px #868686;
    border-radius: 20px;
    background-color: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(3px);
    color: white;
}

/* 按钮悬停时 */
button:hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.2);
}

/* 按钮文字 */
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

.right-form {
    color: white;
    font-size: large;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(105, 105, 105, 0.3);
    border-radius: 0px 8px 8px 0px;
}

.right-form:hover {
    cursor: pointer;
}

.checkbox-container {
    display: inline-block;
    position: relative;
    padding-left: 25px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 16px;
    user-select: none;
}

.custom-checkbox {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

.checkmark {
    position: absolute;
    top: 3px;
    left: 0;
    height: 18px;
    width: 18px;
    background-color: #eee;
    border-radius: 4px;
    transition: background-color 0.3s;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.checkmark:after {
    content: "";
    position: absolute;
    display: none;
    left: 6px;
    top: 1px;
    width: 5px;
    height: 18px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
}

.custom-checkbox:checked~.checkmark {
    background-color: #2196F3;
    box-shadow: 0 3px 7px rgba(33, 150, 243, 0.3);
}

.custom-checkbox:checked~.checkmark:after {
    display: block;
}

@keyframes checkAnim {
    0% {
        height: 0;
    }

    100% {
        height: 10px;
    }
}

.custom-checkbox:checked~.checkmark:after {
    animation: checkAnim 0.2s forwards;
}
</style>
