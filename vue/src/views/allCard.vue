 <!-- 藏品列表页面 -->
<template>
    <div class="login">
        <el-page-header @back="goBack" title="返回"> </el-page-header>
        <div class="type">
            <section>
                <label title="all" for="all" class="label">
                    <input id="all" name="page" type="radio" checked @click="all" />
                    <svg t="1712328355711" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="7527" fill="inherit" width="20" height="20">
                        <path
                            d="M281.6 838.4c0 19.2 19.2 38.4 38.4 38.4l608 0c19.2 0 38.4-19.2 38.4-38.4l0-25.6c0-19.2-19.2-38.4-38.4-38.4l-608 0c-19.2 0-38.4 19.2-38.4 38.4L281.6 838.4zM140.8 748.8c-38.4 0-76.8 32-76.8 76.8C64 864 96 896 140.8 896c38.4 0 76.8-32 76.8-76.8C211.2 780.8 179.2 748.8 140.8 748.8zM281.6 524.8c0 19.2 19.2 38.4 38.4 38.4l608 0c19.2 0 38.4-19.2 38.4-38.4L966.4 499.2c0-19.2-19.2-38.4-38.4-38.4L320 460.8c-19.2 0-38.4 19.2-38.4 38.4L281.6 524.8zM140.8 435.2C96 435.2 64 473.6 64 512c0 38.4 32 76.8 76.8 76.8 38.4 0 76.8-32 76.8-76.8C211.2 473.6 179.2 435.2 140.8 435.2zM320 153.6c-19.2 0-38.4 19.2-38.4 38.4l0 25.6c0 19.2 19.2 38.4 38.4 38.4l608 0c19.2 0 38.4-19.2 38.4-38.4L966.4 185.6c0-19.2-19.2-38.4-38.4-38.4L320 147.2zM140.8 128C96 128 64 160 64 198.4c0 38.4 32 76.8 76.8 76.8 38.4 0 76.8-32 76.8-76.8C211.2 160 179.2 128 140.8 128z"
                            p-id="7528" fill="inherit"></path>
                    </svg>
                </label>
                <label title="head" for="head" class="label">
                    <input id="head" name="page" type="radio" @click="head" />
                    <svg t="1712313134417" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" fill="inherit" p-id="4543" width="20" height="20">
                        <path
                            d="M390.4 59.733333C221.866667 100.266667 77.866667 246.4 37.333333 417.066667 7.466667 544 27.733333 805.333333 73.6 878.933333c42.666667 69.333333 158.933333 103.466667 198.4 59.733334 18.133333-20.266667 19.2-28.8 6.4-105.6-18.133333-107.733333-3.2-142.933333 66.133333-162.133334C582.4 608 612.266667 589.866667 645.333333 490.666667c28.8-85.333333 44.8-71.466667 91.733334 80 7.466667 23.466667 13.866667 78.933333 13.866666 122.666666 1.066667 67.2-4.266667 89.6-28.8 135.466667-34.133333 66.133333-36.266667 89.6-7.466666 115.2 29.866667 26.666667 136.533333 17.066667 186.666666-17.066667 52.266667-36.266667 70.4-74.666667 86.4-188.8 37.333333-263.466667 0-418.133333-131.2-549.333333C732.8 65.066667 563.2 18.133333 390.4 59.733333z m296.533333 87.466667c147.2 69.333333 237.866667 200.533333 248.533334 362.666667 7.466667 98.133333-13.866667 280.533333-36.266667 325.333333-16 32-70.4 60.8-114.133333 60.8h-26.666667l26.666667-57.6c46.933333-102.4 44.8-193.066667-8.533334-353.066667C749.866667 405.333333 722.133333 373.333333 677.333333 373.333333c-40.533333 0-69.333333 29.866667-94.933333 97.066667-9.6 27.733333-25.6 56.533333-36.266667 66.133333-20.266667 18.133333-131.2 54.4-203.733333 66.133334-100.266667 17.066667-152.533333 108.8-129.066667 226.133333 7.466667 32 10.666667 60.8 7.466667 62.933333-10.666667 10.666667-59.733333-9.6-82.133333-33.066666-30.933333-33.066667-56.533333-209.066667-50.133334-338.133334 8.533333-158.933333 87.466667-289.066667 219.733334-358.4 83.2-44.8 130.133333-55.466667 227.2-51.2 65.066667 3.2 98.133333 11.733333 151.466666 36.266667z"
                            p-id="4544" fill="inherit"></path>
                    </svg>
                </label>
                <label title="face" for="face" class="label">
                    <input id="face" name="page" type="radio" @click="face" />
                    <svg t="1712313326256" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" fill="inherit" p-id="9873" width="20" height="20">
                        <path
                            d="M192 320c-70.691 0-128 57.309-128 128v32H32c-17.672 0-32 14.328-32 32s14.328 32 32 32h32v32c0 70.691 57.309 128 128 128h64c106.04 0 192-85.96 192-192 0-35.348 28.652-64 64-64s64 28.652 64 64c0 106.04 85.96 192 192 192h64c70.691 0 128-57.309 128-128v-32h32c17.672 0 32-14.328 32-32s-14.328-32-32-32h-32v-32c0-70.691-57.309-128-128-128H704c-54.379-0.02-102.832 34.32-120.832 85.633A127.358 127.358 0 0 0 512 384a127.358 127.358 0 0 0-71.168 21.633C422.832 354.32 374.379 319.98 320 320z m0 64h60.223c16.898 0 22.273 22.785 7.168 30.336l-29.246 14.594a127.981 127.981 0 0 0-57.215 57.215l-14.594 29.246c-7.55 15.105-30.336 9.73-30.336-7.23V448c0-35.348 28.652-64 64-64z m0 0"
                            p-id="9874" fill="inherit"></path>
                    </svg>
                </label>
                <label title="clothes" for="clothes" class="label">
                    <input id="clothes" name="page" type="radio" @click="clothes" />
                    <svg t="1712313402230" class="icon" viewBox="0 0 1262 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" fill="inherit" p-id="12479" width="20" height="20">
                        <path
                            d="M1023.595548 637.601231a28.874827 28.874827 0 0 1-12.048243 2.832873V992.904951a30.786163 30.786163 0 0 1-9.215371 21.946234 31.878355 31.878355 0 0 1-22.355805 9.147108H251.279256a31.741831 31.741831 0 0 1-22.355805-9.147108 30.786163 30.786163 0 0 1-9.249502-21.946234V651.287762a28.055683 28.055683 0 0 1-9.522549-4.334637C-23.714219 511.521313 3.112748 491.65707 0.621185 476.161596c-1.774812-9.21537 0.273048-18.73792 5.665746-26.383264-7.304034 8.976453 183.624786-322.060126 252.876587-394.383717 52.220432-56.555069 203.932731-55.599401 217.551-55.292222 13.99371 0.34131 26.076085 9.693204 29.693971 22.936033 0 0 15.495474 101.881038 105.908496 101.881038 90.378891 0 135.295288-101.539728 135.295289-102.768444a31.571176 31.571176 0 0 1 29.693971-21.775579c55.633532 0 189.665973 9.317763 225.05982 56.24789 46.486423 60.241217 251.033513 362.061659 240.623558 417.968239-2.593956 14.266758 21.161221 51.537812-219.462337 163.043792h0.068262zM954.309616 96.078768c-11.331492-13.99371-83.416167-28.260469-158.026535-31.059211-29.489185 74.781023-102.666051 124.134451-184.307406 124.236844-108.43419 0-140.005366-77.648027-158.026534-124.236844-47.442091 1.843074-129.015184 12.457815-151.132073 35.701027C230.425215 174.307022 60.760009 480.837543 69.872986 467.151011a1672.419051 1672.419051 0 0 0 151.06381 113.997544v-147.548318c4.09572-13.31109 16.417012-22.424068 30.376591-22.321674 14.027841 0 26.383264 9.078846 30.34246 22.321674v527.938325h669.206538V433.600237c4.09572-13.31109 16.382881-22.424068 30.376591-22.321674 13.99371 0 26.383264 9.078846 30.308329 22.321674v140.346677a784.398666 784.398666 0 0 0 168.811931-111.437719 2948.031085 2948.031085 0 0 0-225.981358-366.464558h-0.034131zM856.012333 899.727319H375.925672a31.332259 31.332259 0 0 1-31.639438-31.059211c0-17.167894 14.164365-31.059211 31.605307-31.059211H856.012333c17.406811 0 31.571176 13.891317 31.571176 31.059211 0 17.133763-14.130234 31.059211-31.571176 31.059211zM603.101615 309.704704c-120.072862 0-205.741674-106.488723-207.960189-112.427518a30.854425 30.854425 0 0 1 16.758321-40.376974 29.591578 29.591578 0 0 1 38.260852 15.870915 213.864853 213.864853 0 0 0 152.360789 73.552308 258.201023 258.201023 0 0 0 185.877432-72.016413 31.741831 31.741831 0 0 1 37.271053-19.557063 30.956818 30.956818 0 0 1 18.669658 39.455437c-13.31109 51.196502-109.355727 115.192129-239.599628 115.192129l-1.604157 0.34131z"
                            fill="inherit" p-id="12480"></path>
                        <path
                            d="M376.574161 830.202469h482.78301c24.369535 0 36.588433 12.184767 36.588433 36.554303s-12.218898 36.554302-36.588433 36.554302H376.574161c-24.369535 0-36.554302-12.184767-36.554302-36.554302s12.184767-36.554302 36.554302-36.554303z"
                            fill="inherit" p-id="12481"></path>
                    </svg>
                </label>
                <label title="pants" for="pants" class="label">
                    <input id="pants" name="page" type="radio" @click="pants" />
                    <svg t="1712313471128" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" fill="inherit" p-id="15554" width="20" height="20">
                        <path
                            d="M214.485333 864.896L298.666667 507.050667V256a42.666667 42.666667 0 0 1 1.28-10.368l42.666666-170.666667A42.666667 42.666667 0 0 1 384 42.666667h256a42.666667 42.666667 0 0 1 41.386667 32.298666l42.666666 170.666667c0.853333 3.413333 1.28 6.869333 1.28 10.368v251.050667l84.181334 357.845333a42.666667 42.666667 0 0 1-31.146667 51.2l-256 64a42.581333 42.581333 0 0 1-20.736 0l-256-64a42.666667 42.666667 0 0 1-31.146667-51.2zM384 512a42.624 42.624 0 0 1-1.152 9.770667L307.2 843.477333l204.842667 51.2 204.8-51.2-75.648-321.706666A42.538667 42.538667 0 0 1 640 512V261.248L606.72 128H417.28L384 261.248V512z"
                            p-id="15555" fill="inherit"></path>
                        <path
                            d="M554.666667 938.666667V341.333333a42.666667 42.666667 0 0 0-85.333334 0v597.333334a42.666667 42.666667 0 1 0 85.333334 0z"
                            p-id="15556" fill="inherit"></path>
                        <path
                            d="M778.325333 916.053333l-256 64a42.666667 42.666667 0 0 1-20.693333 0l-256-64a42.666667 42.666667 0 1 1 20.736-82.773333L512 894.72l245.674667-61.44a42.666667 42.666667 0 0 1 10.24-1.28H768a42.666667 42.666667 0 0 1 42.666667 42.069333v0.597334a42.666667 42.666667 0 0 1-32.341334 41.386666z"
                            p-id="15557" fill="inherit"></path>
                    </svg>
                </label>
                <label title="shoes" for="shoes" class="label">
                    <input id="shoes" name="page" type="radio" @click="shoes" />
                    <svg t="1712313510612" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="17907" width="20" height="20">
                        <path
                            d="M900.30913992 132.8179712c-3.17750272 2.6479195-301.33320363 267.96942222-422.07831951 376.5341093-16.94668231 15.35793152-42.36670749 22.77210453-76.78965646 22.77210567-71.49381859 0-151.99056213-33.36378141-153.04972971-33.89336576-4.76625465-2.11833515-10.59167687-1.58875193-15.35793152 1.05916757-20.65376939 11.65084445-201.77144263 114.91969251-201.77144263 217.12937415 0 9.5325093 7.94375737 17.47626667 17.47626666 17.47626667h330.46031588c62.49089251 0 146.69472313-60.37255737 274.32442767-151.99056213 22.24252131-15.88751474 46.07379342-33.36378141 71.49381859-50.84004808 19.06501859-13.23959637 36.54128526-24.36085646 53.48796757-33.36378254 5.82542222 2.11833515 12.1804288 10.59167687 12.1804288 30.18627869 0 15.35793152 2.11833515 181.64725646 2.64791837 189.06143061 0 9.5325093 7.94375737 16.94668231 17.47626667 16.94668345h67.25714829c4.76625465 0 9.00292494-1.58875193 12.18042767-5.29583901 3.17750272-3.17750272 5.29583787-7.94375737 5.29583901-12.18042766v-120.74511587c0-90.55883605 31.77503061-141.92846848 41.30753877-155.69764807 30.71586304-8.47334173 54.54713515-19.59460181 54.54713514-54.01755193 0.52958435-7.41417415 5.82542222-178.46975374-67.78673038-252.08190635-5.82542222-6.88458979-16.41709909-7.41417415-23.30168888-1.05916871z"
                            fill="inherit" p-id="17908"></path>
                    </svg>
                </label>
            </section>

            <div class="planeSwitch">
                <label class="plane-switch" for="checkbox">
                    <input type="checkbox" id="checkbox" v-model="checked">
                    <div>
                        <div>
                            <svg viewBox="0 0 13 13">
                                <path
                                    d="M1.55989957,5.41666667 L5.51582215,5.41666667 L4.47015462,0.108333333 L4.47015462,0.108333333 C4.47015462,0.0634601974 4.49708054,0.0249592654 4.5354546,0.00851337035 L4.57707145,0 L5.36229752,0 C5.43359776,0 5.50087375,0.028779451 5.55026392,0.0782711996 L5.59317877,0.134368264 L7.13659662,2.81558333 L8.29565964,2.81666667 C8.53185377,2.81666667 8.72332694,3.01067661 8.72332694,3.25 C8.72332694,3.48932339 8.53185377,3.68333333 8.29565964,3.68333333 L7.63589819,3.68225 L8.63450135,5.41666667 L11.9308317,5.41666667 C12.5213171,5.41666667 13,5.90169152 13,6.5 C13,7.09830848 12.5213171,7.58333333 11.9308317,7.58333333 L8.63450135,7.58333333 L7.63589819,9.31666667 L8.29565964,9.31666667 C8.53185377,9.31666667 8.72332694,9.51067661 8.72332694,9.75 C8.72332694,9.98932339 8.53185377,10.1833333 8.29565964,10.1833333 L7.13659662,10.1833333 L5.59317877,12.8656317 C5.55725264,12.9280353 5.49882018,12.9724157 5.43174295,12.9907056 L5.36229752,13 L4.57707145,13 L4.55610333,12.9978962 C4.51267695,12.9890959 4.48069792,12.9547924 4.47230803,12.9134397 L4.47223088,12.8704208 L5.51582215,7.58333333 L1.55989957,7.58333333 L0.891288881,8.55114605 C0.853775374,8.60544678 0.798421006,8.64327676 0.73629202,8.65879796 L0.672314689,8.66666667 L0.106844414,8.66666667 L0.0715243949,8.66058466 L0.0715243949,8.66058466 C0.0297243066,8.6457608 0.00275502199,8.60729104 0,8.5651586 L0.00593007386,8.52254537 L0.580855011,6.85813984 C0.64492547,6.67265611 0.6577034,6.47392717 0.619193545,6.28316421 L0.580694768,6.14191703 L0.00601851064,4.48064746 C0.00203480725,4.4691314 0,4.45701613 0,4.44481314 C0,4.39994001 0.0269259152,4.36143908 0.0652999725,4.34499318 L0.106916826,4.33647981 L0.672546853,4.33647981 C0.737865848,4.33647981 0.80011301,4.36066329 0.848265401,4.40322477 L0.89131128,4.45169723 L1.55989957,5.41666667 Z"
                                    fill="currentColor"></path>
                            </svg>
                        </div>
                        <span class="street-middle"></span>
                        <span class="cloud"></span>
                        <span class="cloud two"></span>
                    </div>
                </label>
            </div>
        </div>
        <div class="placeholder"></div>
        <div class="cards">
            <Cards v-for="item in goodsList" :data="item" :format="checked"></Cards>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            checked:false,
            imageSrc: '',
            goodsList: [
            ],
        }
    },
    mounted() {
        window.scroll(0, 0);
        api.getAllCard().then(result => {
            let res = result.data
            this.goodsList = res.map(item => ({ ...item }));
            const placeholder = document.querySelector('.placeholder');
            placeholder.classList.remove('placeholder');
        }).catch(error => {
            console.log(error)
        })

    },
    methods: {
        //返回上一页
        goBack() {
            this.$router.back()
        },
        //获取卡片
        all() {
            api.getAllCard().then(result => {
                let res = result.data
                this.goodsList = res.map(item => ({ ...item }));
            })
        },
        //头部卡片
        head() {
            api.getCardByType({ type: 1 }).then(result => {
                let res = result.data
                this.goodsList = res.map(item => ({ ...item }));
            })
        },
        //脸部卡片
        face() {
            api.getCardByType({ type: 2 }).then(result => {
                let res = result.data
                this.goodsList = res.map(item => ({ ...item }));
            })
        },
        //衣服卡片
        clothes() {
            api.getCardByType({ type: 3 }).then(result => {
                let res = result.data
                this.goodsList = res.map(item => ({ ...item }));
            })
        },
        //裤子卡片
        pants() {
            api.getCardByType({ type: 4 }).then(result => {
                let res = result.data
                this.goodsList = res.map(item => ({ ...item }));
            })
        },
        //鞋子卡片
        shoes() {
            api.getCardByType({ type: 5 }).then(result => {
                let res = result.data
                this.goodsList = res.map(item => ({ ...item }));
            })
        },

    }
}
</script>
  
<script setup>
import Header from "@/components/Header.vue"
import Cards from "@/components/showCard.vue"
import api from '@/api/card.js'

</script>
  

<style>
.plane-switch {
    --dot: #fff;
    --street: #6B6D76;
    --street-line: #A8AAB4;
    --street-line-mid: #C0C2C8;
    --sky-1: #60A7FA;
    --sky-2: #2F8EFC;
    --light-1: rgba(255, 233, 0, 1);
    --light-2: rgba(255, 233, 0, .3);
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
}

.plane-switch input {
    display: none;
}

.plane-switch input+div {
    position: relative;
    overflow: hidden;
    width: 55px;
    height: 23px;
    padding: 1px;
    border-radius: 13px;
    background: linear-gradient(90deg, var(--street) 0%, var(--street) 25%, var(--sky-1) 75%, var(--sky-2) 100%) left var(--p, 0%) top 0;
    background-position-x: var(--p, 0%);
    background-size: 400% auto;
    transition: background-position 0.6s;
}

.plane-switch input+div:before,
.plane-switch input+div:after {
    content: "";
    display: block;
    position: absolute;
    transform: translateX(var(--s, 0));
    transition: transform 0.3s;
}

.plane-switch input+div:before {
    width: 42px;
    right: 2px;
    top: 4px;
    height: 1px;
    background: var(--street-line);
    box-shadow: 0 16px 0 0 var(--street-line);
}

.plane-switch input+div:after {
    width: 2px;
    height: 2px;
    border-radius: 50%;
    left: 28px;
    top: 1px;
    -webkit-animation: lights2 2s linear infinite;
    animation: lights2 2s linear infinite;
    box-shadow: inset 0 0 0 2px var(--light-1), 0 21px 0 var(--light-1), 8px 0 0 var(--light-2), 8px 21px 0 var(--light-2), 16px 0 0 var(--light-2), 16px 21px 0 var(--light-2);
}

.plane-switch input+div span {
    display: block;
    position: absolute;
}

.plane-switch input+div span.street-middle {
    top: 12px;
    left: 27px;
    width: 3px;
    height: 1px;
    transform: translateX(var(--s, 0));
    background: var(--street-line-mid);
    box-shadow: 5px 0 0 var(--street-line-mid), 10px 0 0 var(--street-line-mid), 15px 0 0 var(--street-line-mid), 20px 0 0 var(--street-line-mid), 25px 0 0 var(--street-line-mid);
    transition: transform 0.3s;
}

.plane-switch input+div span.cloud {
    width: 12px;
    height: 4px;
    border-radius: 2px;
    background: #fff;
    position: absolute;
    top: var(--ct, 8px);
    left: 100%;
    opacity: var(--co, 0);
    transition: opacity 0.3s;
    -webkit-animation: clouds2 2s linear infinite var(--cd, 0s);
    animation: clouds2 2s linear infinite var(--cd, 0s);
}

.plane-switch input+div span.cloud:before,
.plane-switch input+div span.cloud:after {
    content: "";
    position: absolute;
    transform: translateX(var(--cx, 0));
    border-radius: 50%;
    width: var(--cs, 5px);
    height: var(--cs, 5px);
    background: #fff;
    bottom: 1px;
    left: 1px;
}

.plane-switch input+div span.cloud:after {
    --cs: 6px;
    --cx: 4px;
}

.plane-switch input+div span.cloud.two {
    --ct: 20px;
    --cd: 1s;
    opacity: var(--co-2, 0);
}

.plane-switch input+div div {
    display: table;
    position: relative;
    z-index: 1;
    padding: 5px;
    border-radius: 50%;
    background: var(--dot);
    transform: translateX(var(--x, 0));
    transition: transform 0.5s;
}

.plane-switch input+div div svg {
    width: 13px;
    height: 13px;
    display: block;
    color: var(--c, var(--street));
    transition: color 0.6s;
}

.plane-switch input:checked+div {
    --p: 100%;
    --x: 32px;
    --s: -55px;
    --c: var(--sky-2);
    --co: .8;
    --co-2: .6;
}

@keyframes lights2 {

    20%,
    30% {
        box-shadow: inset 0 0 0 2px var(--light-2), 0 21px 0 var(--light-2), 8px 0 0 var(--light-1), 8px 21px 0 var(--light-1), 16px 0 0 var(--light-2), 16px 21px 0 var(--light-2);
    }

    55%,
    65% {
        box-shadow: inset 0 0 0 2px var(--light-2), 0 21px 0 var(--light-2), 8px 0 0 var(--light-2), 8px 21px 0 var(--light-2), 16px 0 0 var(--light-1), 16px 21px 0 var(--light-1);
    }

    90%,
    100% {
        box-shadow: inset 0 0 0 2px var(--light-1), 0 21px 0 var(--light-1), 8px 0 0 var(--light-2), 8px 21px 0 var(--light-2), 16px 0 0 var(--light-2), 16px 21px 0 var(--light-2);
    }
}

@keyframes clouds2 {
    97% {
        transform: translateX(-72px);
        visibility: visible;
    }

    98%,
    100% {
        visibility: hidden;
    }

    99% {
        transform: translateX(-72px);
    }

    100% {
        transform: translateX(0);
    }
}
</style>

<style lang="scss" scoped>
:deep(.el-page-header .el-page-header__header) {
    width: 100%;
    z-index: 9999;
}

:deep(.el-page-header .el-page-header__breadcrumb) {
    margin-bottom: 0px !important;
}

:deep(.el-page-header .el-page-header__header) {
    height: 3rem;
    background-color: rgba(0, 0, 0, 0.9);
}

:deep(.el-page-header .el-page-header__left) {
    position: relative;
    left: 2rem;
    color: white;
}
.login {
    background: url('../assets/picture/123.png') no-repeat fixed center;
    background-size: cover;
}

.placeholder {
    height: 200vh;
}

.cards {
    display: grid;
    max-width: 1335px;
    min-height: 100vh;
    margin: auto;
    grid-template-columns: auto auto auto auto;
    justify-content: space-evenly;

    @media only screen and (min-width: 1000px) and (max-width: 1228px) {
        grid-template-columns: auto auto;
    }

    @media only screen and (min-width: 100px) and (max-width: 999px) {
        grid-template-columns: auto;
    }
}

.type {
    display: flex;
    max-width: 1330px;
    margin: 1rem auto -0.5rem auto;
    justify-content: center;
    align-items: center;
    position: relative;
}

section {
    --col-orange: #1080e1;
    --col-dark: #c8c8c8fa;
    ;
    --col-darkGray: #52555a;
    --col-gray: #aeaeae;

    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: var(--col-dark);
    border-radius: 30px;
    box-shadow: 0 0 1px 0 rgba(24, 94, 224, 0.15), 0 6px 12px 0 rgba(24, 94, 224, 0.15);
}

.label {
    padding: 8px 18px;
    transition: all 200ms;
    display: inline-block;
}

.label input[type="radio"] {
    display: none;
}

.label>svg {
    transition: all 200ms;
    fill: var(--col-gray);
    width: 20px;
}

.label:hover:not(:has(input:checked))>svg {
    fill: #1080e1;
    opacity: 0.6;
}

.label::before {
    content: "";
    display: block;
    width: 0%;
    height: 2px;
    border-radius: 5px;
    position: relative;
    left: 50%;
    top: 20px;
    background: var(--col-orange);
    transition: all 200ms;
}

.label>svg {
    transition: 300ms;
    fill: var(--col-darkGray);
    margin-top: 0;
}

.label:has(input:checked)>svg {
    fill: var(--col-orange);
    scale: 1.2;
    margin-top: -5px;
}

.label:has(input:checked)::before {
    width: 100%;
    left: 0;
    top: 25px;
}
.planeSwitch{
    position: absolute;
    right: 1rem;
    top:8px;
}
</style>