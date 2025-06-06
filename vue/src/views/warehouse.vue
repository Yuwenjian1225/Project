 <!-- 个人仓库页面 -->
<template>
    <div class="login">
        <Header></Header>
        <div class="body">
            <div class="selfModel"></div>
            <div class="selfModel2">
                <Model></Model>
            </div>
            <div class="ware">
                <Scoll></Scoll>
                <el-tabs type="border-card">
                    <el-tab-pane label="头部">
                        <Card v-for="(item, index) in HeadCardList" :data="item" :key="index"
                            :is-active="headActiveIndex === index" @click="setHeadActive(item, index)" />
                    </el-tab-pane>
                    <el-tab-pane label="面部">
                        <Card v-for="(item, index) in FaceCardList" :data="item" :key="index"
                            :is-active="faceActiveIndex === index" @click="setFaceActive(item, index)"></Card>
                    </el-tab-pane>
                    <el-tab-pane label="身体">
                        <Card v-for="(item, index) in BodyCardList" :data="item" :key="index"
                            :is-active="bodyActiveIndex === index" @click="setBodyActive(item, index)"></Card>
                    </el-tab-pane>
                    <el-tab-pane label="腿部">
                        <Card v-for="(item, index) in PantsCardList" :data="item" :key="index"
                            :is-active="pantsActiveIndex === index" @click="setPantsActive(item, index)"></Card>
                    </el-tab-pane>
                    <el-tab-pane label="鞋子">
                        <Card v-for="(item, index) in ShoesCardList" :data="item" :key="index"
                            :is-active="shoesActiveIndex === index" @click="setShoesActive(item, index)"></Card>
                    </el-tab-pane>
                </el-tabs>
            </div>
        </div>
    </div>
</template>
<script>
import Header from "@/components/Header.vue"
import Scoll from "@/components/scoll.vue"
import Card from "@/components/card.vue"
import Model from "@/components/model.vue"
import api from '@/api/card.js'
import userApi from '@/api/user.js'
import { inject } from 'vue';



export default {
    components: {
        Header, Scoll, Model, Card,
    },
    data() {
        return {
            HeadCardList: [],
            FaceCardList: [],
            BodyCardList: [],
            PantsCardList: [],
            ShoesCardList: [],
            accountForm: {},
            headActiveIndex: null,
            faceActiveIndex: null,
            bodyActiveIndex: null,
            pantsActiveIndex: null,
            shoesActiveIndex: null,
            dressedHead: {
                name: '',
                ref: 0
            },
            dressedFace: {
                name: '',
                ref: 0
            },
            dressedClothes: {
                name: '',
                ref: 0
            },
            dressedPants: {
                name: '',
                ref: 0
            },
            dressedShoes: {
                name: '',
                ref: 0
            },
        }
    },
    mounted() {
        //getSession
        userApi.getSession().then(res => {
            this.accountForm.account = res.data
            userApi.information(this.accountForm).then(res => {
                this.accountForm.address = res.data[0].address
                userApi.getTexture({ account: this.accountForm.account }).then(res => {
                    this.dressedHead.name = res.data[0].head_name;
                    this.dressedHead.ref = res.data[0].head_ref;
                    this.dressedFace.name = res.data[0].face_name;
                    this.dressedFace.ref = res.data[0].face_ref;
                    this.dressedClothes.name = res.data[0].clothes_name;
                    this.dressedClothes.ref = res.data[0].clothes_ref;
                    this.dressedPants.name = res.data[0].pants_name;
                    this.dressedPants.ref = res.data[0].pants_ref;
                    this.dressedShoes.name = res.data[0].shoes_name;
                    this.dressedShoes.ref = res.data[0].shoes_ref;
                    api.getMyCardList(this.accountForm).then(result => {
                        let res = result.data
                        for (let i in res) {
                            if (res[i].type == "头部") {
                                if (res[i].name == this.dressedHead.name && res[i].ref == this.dressedHead.ref) {
                                    res[i].status = 2
                                }
                                this.HeadCardList.push(res[i])
                            } else if (res[i].type == "面部") {
                                if (res[i].name == this.dressedFace.name && res[i].ref == this.dressedFace.ref) {
                                    res[i].status = 2
                                }
                                this.FaceCardList.push(res[i])
                            } else if (res[i].type == "身体") {
                                if (res[i].name == this.dressedClothes.name && res[i].ref == this.dressedClothes.ref) {
                                    res[i].status = 2
                                }
                                this.BodyCardList.push(res[i])
                            } else if (res[i].type == "腿部") {
                                if (res[i].name == this.dressedPants.name && res[i].ref == this.dressedPants.ref) {
                                    res[i].status = 2
                                }
                                this.PantsCardList.push(res[i])
                            } else if (res[i].type == "鞋子") {
                                if (res[i].name == this.dressedShoes.name && res[i].ref == this.dressedShoes.ref) {
                                    res[i].status = 2
                                }
                                this.ShoesCardList.push(res[i])
                            }
                        }
                    })
                })
            })
        })
        //事件监听器 
        const bus = inject('bus')
        bus.on('reset', () => {
            this.resetAll();
        })
    },
    methods: {
        //重置所有激活状态
        resetAll() {
            this.headActiveIndex = null;
            this.faceActiveIndex = null;
            this.bodyActiveIndex = null;
            this.pantsActiveIndex = null;
            this.shoesActiveIndex = null;
        },
        isActive(index) {
            return this.activeIndex === index;
        },
        setHeadActive(item, index) {
            if (item.status) {
                this.headActiveIndex = index;
            }
        },
        setFaceActive(item, index) {
            if (item.status) {
                this.faceActiveIndex = index;
            }
        },
        setBodyActive(item, index) {
            if (item.status) {
                this.bodyActiveIndex = index;
            }
        },
        setPantsActive(item, index) {
            if (item.status) {
                this.pantsActiveIndex = index;
            }
        },
        setShoesActive(item, index) {
            if (item.status) {
                this.shoesActiveIndex = index;
            }
        },
    },
    beforeDestroy() {
        // 在组件销毁前清理事件监听器  
        bus.off('reset')
    },
}
</script>

<style lang="scss" scoped>
.login {
    background: url('../assets/picture/123.png') no-repeat fixed center;
    background-size: cover;
}

.body {
    width: 100%;
    display: flex;
    flex-direction: row;
}

.selfModel {
    height: 100vh;
    width: 30%;
    background-color: rgba(0, 0, 0, 0);
    backdrop-filter: blur(3px);
}

.selfModel2 {
    position: fixed;
    top: 5px;
    height: 100vh;
    width: 30%;
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(3px);
}

.ware {
    height: 100%;
    width: 70%;
}

.el-tabs--border-card {
    background: none;
    border: none;
    color: white
}

:deep(.el-tabs--border-card .el-tabs__header) {
    background: none;
    border-bottom: 1px solid #1196db;
}

:deep(.el-tabs--border-card .el-tabs__header .el-tabs__item.is-active) {
    color: white;
    background-color: #1196db;
    border-right-color: #1196db;
    border-left-color: #1196db;
}

:deep(.el-tabs--border-card .el-tab-pane) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
}
</style>