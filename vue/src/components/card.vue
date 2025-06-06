<template>
    <div :class="['card', { active: isActive }, { border: data.status == 2 }]">
        <el-row>
            <el-col :span="8">
                <el-card :key="data.id" @click="checkItem(data)" @contextmenu.prevent="rightClick(data)"
                    :body-style="{ padding: '0px' }"
                    style="width: 280px;height: 215px;position: relative;border-radius: 5px;">
                    <img :src="`http://localhost:8081/ipfs/${data.url}`" class="image" />
                    <div class="name">
                        <span>{{ data.name }}</span>
                    </div>
                    <div class="type">
                        <span>{{ data.type }}</span>
                    </div>
                    <!-- 出售遮罩层 -->
                    <div class="overlay" v-show="!data.status">
                        <span>售卖中，暂不支持穿戴</span>
                    </div>

                </el-card>
            </el-col>
        </el-row>
    </div>
</template> 
<script>
import { ElMessage } from 'element-plus'
import { inject, ref } from 'vue';
export default {
    props: {
        data: {
            type: Object,
            required: true,
        },
        isActive: {
            type: Boolean,
            default: false,
        },
    },
    setup() {
        const bus = inject('bus');
        const checkItem = (val) => {
            if (!val.status) {
                ElMessage({
                    message: '藏品售卖中，暂不支持穿戴',
                    type: 'warning',
                    duration: 1000
                })
            } else {
                bus.emit('changeMaterial', val);
            }

        }
        return {
            checkItem
        };
    },
    methods: {
        rightClick(e) {
            if (e.status == 2) {
                ElMessage({
                    message: '藏品穿戴中，请卸下后再出售',
                    type: 'warning',
                    duration: 1000
                })
            } else {
                this.$router.push({ name: 'sale', params: { name: e.name, ref: e.ref } })
            }

        }
    },


} 
</script> 
<style lang="scss" scoped>
:deep(.el-card .el-card__body) {
    width: 100%;
    height: 100%;
}

.card {
    margin-bottom: 1.5rem;
    margin-right: 4.2rem;
    border-radius: 5px;
    position: relative;
}

.card.border {
    box-shadow: 0 0 0 3px rgba(0, 255, 60, 0.8);
}

.card.active {
    box-shadow: 0 0 0 3px rgba(255, 0, 0, 0.80);
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
}

.image {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.name {
    width: 275px;
    position: absolute;
    top: 0px;
    padding: 0px 0px 0px 5px;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    font-size: 15px;
    border-radius: 4px 4px 0px 0px;
}

.type {
    padding: 1px;
    width: 50px;
    position: absolute;
    left: 3px;
    bottom: 3px;
    border-radius: 10px;
    backdrop-filter: blur(3px);
    border: 2px inset #2CD5FF;
    text-align: center;
    color: #0068b8;
}

span {
    font-family: Alimama;
}
</style>