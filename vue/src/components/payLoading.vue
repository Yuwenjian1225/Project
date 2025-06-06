<template>
    <div class="all">
        <div class="pyramid-loader">
            <div class="wrapper">
                <span class="side side1"></span>
                <span class="side side2"></span>
                <span class="side side3"></span>
                <span class="side side4"></span>
                <span class="shadow"></span>
            </div>
            <span class="word">支付结果查询中...</span>
        </div>
    </div>
</template>

<script>
import { ElMessage } from 'element-plus'
import orderApi from '@/api/order.js'
import userApi from '@/api/user.js'
import axios from 'axios';
export default {
    inject: ['reload'],
    data() {
        return {
            rechargeForm: {},
            routerData: {},
            form: {}
        }
    },
    mounted() {
        this.routerData = { out_trade_no: this.$route.query.out_trade_no, trade_no: this.$route.query.trade_no, };
        if (this.routerData.out_trade_no != undefined && this.routerData.trade_no != undefined) {
            this.paySuccess(this.routerData);
        }
    },
    methods: {
        async paySuccess(data) {
            orderApi.getRid(data).then(result => {
                let res = result.data
                if (res[0]) {
                    ElMessage({
                        message: '订单已支付成功，请勿重复查询',
                        type: 'warning',
                        offset: 100
                    })
                    window.location.href = `http://localhost:8080/#/index`
                } else {
                    this.rechargeForm.trade_no = data.trade_no;
                    axios.post('http://localhost:3000/api/pay/orderStatu', data, {
                    }).then(response => {
                        let res = response.data
                        if (res.code == 200) {
                            this.form.money = parseFloat(res.num);
                            this.form.account = res.for;
                            userApi.information({ account: this.form.account }).then(res => {
                                this.form.id = res.data[0].id;
                                userApi.addBalance(this.form).then()
                                orderApi.addRecharge(this.rechargeForm).then()
                            })
                            setTimeout(() => {
                                ElMessage.success("充值成功")
                                window.location.href = `http://localhost:8080/#/main`
                                setTimeout(() => {
                                    this.reload()
                                }, 100)

                            }, 1000)
                        } else {
                            ElMessage.success("充值查询中")
                        }
                    })
                }
            })
        },
    }
}
</script>




<style scoped>
.all {
    display: flex;
    height: 100vh;
    background-color: #212121;
}

.word {
    position: absolute;
    bottom: 58px;
    font-size: 18px;
    color: white;
    margin-left: 1rem;
}

.pyramid-loader {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto auto;
    position: relative;
    width: 300px;
    height: 300px;
    transform-style: preserve-3d;
    transform: rotateX(-20deg);
}

.wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    animation: spin 4s linear infinite;
}

@keyframes spin {
    100% {
        transform: rotateY(360deg);
    }
}

.pyramid-loader .wrapper .side {
    width: 70px;
    height: 70px;
    background: linear-gradient(to bottom right, #FFA500, #FF4500);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    transform-origin: center top;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

.pyramid-loader .wrapper .side1 {
    transform: rotateZ(-30deg) rotateY(90deg);
    background: linear-gradient(to bottom right, #FF4500, #FFA500);
}

.pyramid-loader .wrapper .side2 {
    transform: rotateZ(30deg) rotateY(90deg);
    background: linear-gradient(to bottom right, #FFA500, #FF4500);
}

.pyramid-loader .wrapper .side3 {
    transform: rotateX(30deg);
    background: linear-gradient(to bottom right, #FFA500, #FF4500);
}

.pyramid-loader .wrapper .side4 {
    transform: rotateX(-30deg);
    background: linear-gradient(to bottom right, #FF4500, #FFA500);
}

.pyramid-loader .wrapper .shadow {
    width: 60px;
    height: 60px;
    background: #FF8C00;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    transform: rotateX(90deg) translateZ(-40px);
    filter: blur(12px);
}
</style>