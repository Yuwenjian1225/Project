<template>
    <div>
        <div class="main">
            <el-space direction="vertical" alignment="flex-start">
                <template #default>
                    <div class="goods">
                        <el-card :body-style="{ padding: '0px' }" @click="main(data.name)">
                            <img :src="`http://localhost:8081/ipfs/${data.url}`" class="image"
                                style="width:336px;height:300px;margin:0px" />
                            <div class="time">{{ data.birthday.toLocaleString().slice(5) }} 发售</div>
                            <div style="padding: 12px;color:white;padding-bottom: 25px;">
                                <p style="margin: 0px 0px 10px 0px;font-weight: 900;">{{ data.name }}</p>

                                <div v-if="data.remain == 0">
                                    <div class="none">已结束</div>
                                </div>

                                <div v-if="data.remain > 0">
                                    <span class="number">限量</span>
                                    <span class="number2">{{ data.number }}份</span>
                                </div>

                                <div class="bottom card-header">
                                    <div class="money">${{ data.price }}</div>
                                </div>
                            </div>
                        </el-card>
                    </div>
                </template>
            </el-space>
        </div>
    </div>
</template> 
<script>
export default {
    props: {
        data: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    data() {
        return {

        }
    },
    methods: {
        main(name) {
            this.$router.push({ name: 'details', params: { name: name } })
        }
    },

} 
</script> 
<style scoped>
.none {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    position: relative;
    width: 103px;
    height: 30px;
    margin-bottom: -10px;
    border-radius: 45px;
    border: none;
    background-color: rgb(161, 161, 161);
    color: white;
    box-shadow: 0px 10px 10px rgb(161, 161, 161) inset,
        0px 5px 10px rgba(33, 33, 33, 0.212),
        0px -10px 10px rgb(60, 60, 60) inset;
}

.goods {
    position: relative;
    margin-bottom: 0.8rem;
    transition-duration: 0.3s;
    border-radius: 8%;
}

.goods:hover {
    transform: scale(1.01);
    box-shadow: 0px 0px 25px 1px #0361aa;
}

.el-card {
    border-radius: 8%;
    border: 3px solid #9C9C9C;
    background-color: #363636;
}

img {
    width: 220px;
    height: 174px;
    margin: 0 24px 24px 0;
}

img:nth-of-type(3) {
    margin-right: 0;
}

.main {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.time {
    width: 28%;
    padding: 2px 5px 2px 1rem;
    position: absolute;
    top: 13%;
    color: white;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 0px 10px 10px 0px;
    backdrop-filter: blur(3px);
    font-size: 17px;
    font-family: Alimama;
}

.money {
    display: flex;
    font-size: 25px;
    margin: 5px;
    position: absolute;
    right: 15px;
    bottom: 8px;
}

.number {
    display: inline-block;
    width: 2rem;
    height: 19px;
    background-color: #00BFFF;
    border: 0.5px solid #00BFFF;
    padding: 0px 0px 0px 10px;
    border-radius: 6px 0px 0px 6px;
    font-size: small;
}

.number2 {
    display: inline-block;
    text-align: center;
    width: 3rem;
    height: 19px;
    padding: 0px 5px 0px 5px;
    border: 0.5px solid #00BFFF;
    border-radius: 0px 6px 6px 0px;
    font-size: small;
}
</style>