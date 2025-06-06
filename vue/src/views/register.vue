 <!-- 用户注册页面 -->
<template>
    <div class="body" :style="{ backgroundImage: 'url(' + require('../assets/picture/x2.jpg') + ')' }">
        <div class="box">
            <div class="left-form" @click="ToLogin">
                <el-avatar :icon="Pointer" />
                <p style="writing-mode: vertical-rl; text-orientation: upright;">返回登录</p>
            </div>
            <div class="register-form">
                <div class="title-box">
                    <h1>注册</h1>
                </div>
                <!-- 输入框 -->
                <el-form ref="registerFormRef" :model="this.registerForm" :rules="rules" label-width="10px">
                    <el-form-item prop="account" label="">
                        <el-input type="text" placeholder="请输入手机号" v-model="this.registerForm.account"
                            :suffix-icon="Phone" />
                    </el-form-item>

                    <el-form-item prop="name" label="">
                        <el-input type="text" placeholder="请输入用户名" v-model="this.registerForm.name" :suffix-icon="User" />
                    </el-form-item>
                    <el-form-item prop="password" label="">
                        <el-input type="password" placeholder="请输入密码" show-password v-model="this.registerForm.password"
                            :suffix-icon="Lock" oncut="return false" onpaste="return false" oncopy="return false" />
                    </el-form-item>
                    <el-form-item prop="confirmPassword" label="">
                        <el-input type="password" placeholder="请确认密码" show-password
                            v-model="this.registerForm.confirmPassword" :suffix-icon="Lock" oncut="return false"
                            onpaste="return false" oncopy="return false" />
                    </el-form-item>
                </el-form>
                <!-- 按钮 -->
                <div class="btn-box">
                    <button @click="register">注册</button>
                </div>
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
            registerFormRef: '',
            registerForm: {
                account: '',
                name: '',
                password: '',
                confirmPassword: '',
                address: ""
            },
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
                this.account = await signer.getAddress();
            } catch (error) {
                console.error('连接失败', error);
            }
            // 监听账户变化事件
            window.ethereum.on('accountsChanged', (accounts) => {
                this.account = accounts[0];
            });
        },
        //注册
        register() {
            if (this.account == '') {
                ElMessage.warning("未获取到钱包地址")
            } else {
                this.$refs.registerFormRef.validate(valid => {
                    if (valid) {
                        if (this.registerForm.confirmPassword == this.registerForm.password) {
                            this.registerForm.address = this.account
                            api.registerApi(this.registerForm).then(res => {
                                if (res.data.affectedRows === 1) {
                                    ElMessage.success({
                                        message: "注册成功，请前往登录",
                                        duration: 1000
                                    })
                                    setTimeout(() => {
                                        this.$router.push('./login')
                                    }, 1000)
                                } else {
                                    ElMessage.error(res.data.message)
                                }
                            }).catch(error => {
                                console.log(error);
                            })
                        } else {
                            ElMessage.warning("确认密码和密码不一致")
                        }
                    } else {
                        return
                    }
                })
            }

        },
        //前往登录路由
        ToLogin() {
            this.$router.push('./login')
        }

    },
};  
</script>
<script setup>
import { reactive, ref } from '@vue/reactivity'
import { User, Lock, Phone, Pointer } from '@element-plus/icons-vue'
import api from '@/api/user.js'
import { useRouter } from 'vue-router';
import { ElMessage } from 'element-plus';

const rules = reactive({
    account: [
        { required: true, message: '请输入手机号', trigger: 'blur' },
        { min: 11, max: 11, message: '手机号格式错误', trigger: 'blur' },
    ],
    username: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
        { min: 3, max: 9, message: '长度应在3-9 之间', trigger: 'blur' },
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 6, message: '长度应大于6', trigger: 'blur' },
    ],
    confirmPassword: [
        { required: true, message: '请确认密码', trigger: 'blur' },
        { min: 6, message: '长度应大于6', trigger: 'blur' },
    ],
})




</script>


<style lang="scss" scoped>
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
    color: #f55c5c;
    margin-left: 11px;
    font-size: 13px;
    font-weight: 600;
}

.p {
    color: white;
    position: absolute;
    bottom: -36px;
    right: 95px;
}

span {
    margin: 0px 5px 25px 5px;
}

.register-form {
    position: relative;
    top: -196px;
    flex: 1;
    height: 100%;
}

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
    color: #b0cfe9;

}

el-input:focus::placeholder {
    opacity: 0;
}

.btn-box {
    display: flex;
    justify-content: center;
}

/* 按钮 */
button {
    font-size: 16px;
    width: 56%;
    height: 40px;
    margin-top: 2px;
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

.left-form {
    color: white;
    font-size: large;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 8px 0px 0px 8px;
}

.left-form:hover {
    cursor: pointer;
}
</style>