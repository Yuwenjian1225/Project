<template>
    <div class="scene" id="scene"></div>
    <div class="Modelbutton">
        <button class="boton boton-elegante1" @click="resetting">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" style="width: 18px;">
                <path fill="currentColor"
                    d="M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z">
                </path>
            </svg>
            <span>重置</span>
        </button>

        <button class="boton boton-elegante2" @click="save">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" style="width: 18px;">
                <path fill="currentColor"
                    d="M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64m384-253.696 236.288-236.352 45.248 45.248L508.8 704 192 387.2l45.248-45.248L480 584.704V128h64z">
                </path>
            </svg>
            <span>保存</span>
        </button>

        <button class="boton boton-elegante3" @click="show">
            <svg t="1716104717404" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="7973" width="18" height="18">
                <path
                    d="M388.310293 141.111402m-76.772921 0a76.772922 76.772922 0 1 0 153.545843 0 76.772922 76.772922 0 1 0-153.545843 0Z"
                    p-id="7974" fill="#ffffff"></path>
                <path
                    d="M983.300435 307.452732c-8.530325-14.928068-29.856136-21.325812-46.916785-14.928068l-238.84909 85.303246c0-27.723555-6.397743-51.181948-23.458392-68.242597-36.25388-36.25388-104.496477-29.856136-177.004236 8.530325v-14.928068c0-6.397743 2.132581-12.795487 6.397743-17.060649l208.992953-213.258116c14.928068-14.928068 19.19323-38.386461 6.397744-55.44711-17.060649-21.325812-46.916785-23.458393-63.977435-4.265162L480.011283 192.29335c-14.928068 14.928068-34.121298 27.723555-55.44711 36.253879l-42.651623 14.928069c-8.530325 4.265162-19.19323 0-25.590974-6.397744l-191.932304-196.197466C147.328623 21.686858 115.339905 21.686858 98.279256 43.012669c-12.795487 17.060649-8.530325 42.651623 6.397744 57.579691l187.667141 198.330048c17.060649 19.19323 29.856136 40.519042 38.386461 63.977434l27.723555 76.772922c-70.375178 89.568408-91.70099 187.667142-46.916785 232.451346 17.060649 17.060649 44.784204 25.590974 74.64034 23.458392l14.928068 292.163618c0 14.928068 10.662906 29.856136 25.590974 34.121299 21.325812 6.397743 42.651623-10.662906 42.651623-31.988717l14.928068-324.152336c34.121298-19.19323 70.375178-44.784204 104.496477-76.772921 23.458393-23.458393 44.784204-49.049367 59.712272-74.640341L966.239786 362.899842c21.325812-10.662906 29.856136-34.121298 17.060649-55.44711z"
                    p-id="7975" fill="#ffffff"></path>
            </svg>
            <span>动作</span>
        </button>

    </div>
    <div class="Modelbutton2">
        <div>
            <button class="button" @click="inGame">进入游戏</button>
        </div>


    </div>
</template>


<script>
import Base3d from '../utlis/Base3d.js';
import { reactive, onMounted, onUnmounted, inject } from 'vue';
import { ElMessage } from 'element-plus';


const data = reactive({
    base3d: {}
})
export default {
    inject: ['reload'],
    data() {
        return {
            address: '',
            dressed: {
                name:'',
                ref:0
            }
        }
    },
    setup() {
        const bus = inject('bus')
        onMounted(() => {
            data.base3d = new Base3d('#scene')
        }),
            onUnmounted(() => {
                data.base3d = null;
                bus.off('changeMaterial', data)
            })
        //发布重置消息
        const resetting = () => {
            resetModel();
            bus.emit('reset');
        }
        //重置模型
        const resetModel = () => {
            data.base3d.reset()

        };
        return {
            resetting,
        };

    },
    mounted() {
        const bus = inject('bus')
        bus.on('changeMaterial', data => {
            if (data.type == "头部") {
                this.dressed.name = data.name;
                this.dressed.ref = data.ref;
                this.changeHead(data.material,this.dressed)
            } else if (data.type == "面部") {
                this.dressed.name = data.name;
                this.dressed.ref = data.ref;
                this.changeFace(data.material,this.dressed)
            } else if (data.type == "身体") {
                this.dressed.name = data.name;
                this.dressed.ref = data.ref;
                this.changeBody(data.material,this.dressed)
            } else if (data.type == "腿部") {
                this.dressed.name = data.name;
                this.dressed.ref = data.ref;
                this.changePants(data.material,this.dressed)
            } else if (data.type == "鞋子") {
                this.dressed.name = data.name;
                this.dressed.ref = data.ref;
                this.changeShoes(data.material,this.dressed)
            }

        })


    },
    methods: {
        changeHead(val,dressed) {
            data.base3d.changeHead(val,dressed)
        },
        changeFace(val,dressed) {
            data.base3d.changeGlasses(val,dressed)
        },
        changeBody(val,dressed) {
            data.base3d.changeClothes(val,dressed)
        },
        changePants(val,dressed) {
            data.base3d.changePants(val,dressed)
        },
        changeShoes(val,dressed) {
            data.base3d.changeShoes(val,dressed)
        },
        save() {
            data.base3d.save()
            ElMessage.success('保存成功')
            this.reload()
        },
        show() {
            data.base3d.show()
        },
        inGame() {
            window.open('http://localhost:8080/#/game')
        }
    }


}
</script>


<style>
* {
    margin: 0;
    padding: 0;
}

#scene canvas {
    all: unset;
}

.Modelbutton {
    display: block;
    width: 80px;
    position: absolute;
    top: 3.5rem;
    right: 5px;
}

.Modelbutton2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    position: absolute;
    bottom: 1rem;
}

.Modelbutton span {
    font-family: 'Alimama';
}

.el-message__content {
    font-family: auto;
}
</style>
<style scoped>
.boton {
    display: flex;
    align-items: center;
    padding: 5px 13px;
    color: #ffffff;
    font-size: 14px;
    cursor: pointer;
    border-radius: 10px;
    margin-bottom: 0.5rem;
    transition: all 0.4s ease;
    outline: none;
    position: relative;
    overflow: hidden;
    font-weight: bold;
}

.boton::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle,
            rgba(255, 255, 255, 0.25) 0%,
            rgba(255, 255, 255, 0) 70%);
    transform: scale(0);
    transition: transform 0.5s ease;
}

.boton:hover::after {
    transform: scale(4);
}

.boton-elegante1 {
    border: 1px solid #409eff;
    background-color: #409eff;

}

.boton-elegante1:hover {
    border-color: #8bc5ff;
    background: #79bbff;
}

.boton-elegante2 {
    border: 1px solid #67c23a;
    background-color: #67c23a;

}

.boton-elegante2:hover {
    border-color: #a0d387;
    background: #95d475;
}

.boton-elegante3 {
    border: 1px solid #da1919;
    background-color: #da1919;

}

.boton-elegante3:hover {
    border-color: #e77878;
    background: #c62d2d;
}

.button {
    cursor: pointer;
    width: fit-content;
    height: fit-content;
    padding: 15px;
    background-color: rgb(223, 223, 223);
    border-left: 3px solid white;
    border-top: 3px solid white;
    border-right: 3px solid gray;
    border-bottom: 3px solid gray;
    font-family: "Courier New", Courier, monospace;
    font-size: 1.1rem;
    font-weight: 900;
    outline: 2px solid black;
}

.button:hover {
    background-color: #369536;
    color: white;
    outline-color: white;
    border-left: 1px solid rgb(56, 186, 56);
    border-top: 1px solid rgb(56, 186, 56);
    border-right: 1px solid green;
    border-bottom: 1px solid green;
}

.button:active {
    border-left: 3px solid green;
    border-top: 3px solid green;
    border-right: 3px solid rgb(56, 186, 56);
    border-bottom: 3px solid rgb(56, 186, 56);
}
</style>