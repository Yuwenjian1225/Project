 <!-- 售卖页面 -->
<template>
    <div class="details">
        <el-page-header @back="goBack" title="返回"> </el-page-header>
        <div class="main">
            <div class="goodPicture">
                <img :src="`http://localhost:8081/ipfs/${this.Card.url}`" alt="" style="width: 100%;height:100%">
            </div>
            <div style="display: flex;flex-direction: column;align-items: center;margin: 1.3rem 0px 2.5rem 0px;">
                <div style="padding: 5px;background: linear-gradient(#ffebbd, #ffd577);border-radius: 5px;">
                    <p style="color: black;">{{ this.Card.alias }} #{{ this.Card.ref }}/{{ this.Card.number }}</p>
                </div>
            </div>
            <div class="text">
                <img src="../assets/picture/style.png" alt="" style="transform: rotateY(180deg);width: 50px;height: 12px;">
                <span>{{ this.Card.card_name }}</span>
                <img src="../assets/picture/style.png" alt="" style="width: 50px;height: 12px;">
            </div>
            <div style="display: flex;align-items: center;flex-direction: column;margin-top:2.5rem">
                <button class="button" v-if="this.Card.status == 1" @click="tosale = true">
                    <div class="button-content">
                        售卖
                        <svg class="svgIcon" viewBox="0 0 576 512">
                            <path
                                d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z">
                            </path>
                        </svg>
                    </div>
                </button>
                <div class="scene" v-if="this.Card.status == 0" @click="changePrice = true">
                    <div class="cube">
                        <span class="side top">修改价格</span>
                        <span class="side front">售卖中</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="information">
            <div class="holder">
                <div class="title">持有者</div>
                <div style="display:flex;align-items: center;margin-bottom:6px">
                    <img src="../assets/picture/holder.png" alt=""
                        style="width: 50px;border: 1px solid black;border-radius: 50%;margin-left:15px;margin-right:8px;">
                    <span style="font-size: 16px;color: #fff;">{{ this.Card.userName }}</span>
                </div>
                <div class="stitle">藏品指纹</div>
                <div class="hash">
                    <p>{{ this.Card.url }}</p>

                </div>
                <div class="stitle">藏品哈希值</div>
                <div class="hash">
                    <p>{{ this.Card.hash }}</p>
                </div>
                <div class="stitle">交易哈希值</div>
                <div class="hash">
                    <p>{{ this.Card.transHash }}</p>
                </div>

            </div>

            <div class="issuer">
                <img src="../assets/logo.png" alt="" style="width: 50px;border-radius: 50%;margin-left: 15px;">
                <div class="word">
                    <span style="font-size: 16px;color: #fff;">破浪官方</span>
                    <span style="margin-top: 2px;font-size: 13px;color: #bbb;">创作者</span>
                </div>
            </div>
            <div class="introduction">
                <div class="title">藏品介绍</div>
                <div class="story">
                    <span>{{ this.Card.content }}
                    </span>
                </div>
            </div>
            <div class="introduction">
                <div class="title">权益说明</div>
                <div class="notes">
                    <span>发售方同意并承诺，在交易完成后，您即享有对该数字艺术品进行占有、转赠的权利。特别提示：您对该数字艺术品的占有、使用不得侵犯作者著作权，
                        即您只能以合理的或著作权人可预见的方式展示、展览、汇编该数字资产中载有的作品。如您需要对该数字艺术品做出复制、出租、改编、放映、广播或
                        进行网络传播等涉及作品著作权授权的行为，您应获得著作权人的相应授权，并订立相关的协议。
                    </span>
                </div>
            </div>
            <div style="width: 96%;display: flex;align-items: center;justify-content: center;padding-bottom: 1rem;">
                <img style="width: 40px;" src="../assets/logo.png" alt="polang logo" />
                <p style="color:#1196db;">破浪——让前行无畏</p>
            </div>
        </div>

        <el-dialog v-model="tosale" class="data-dialog" :lock-scroll="false"
            style="position: relative;right: 7px;height: 500px;" destroy-on-close>
            <div class="payPic">
                <img :src="`http://localhost:8081/ipfs/${this.Card.url}`" alt=""
                    style="width: 80px;height: 70px;border: 1px solid black;">
                <div class="word">
                    <span style="font-size: 16px;color: #fff;font-weight:700">{{ this.Card.card_name }}</span>
                    <div style="padding: 5px;background: linear-gradient(#ffebbd, #ffd577);border-radius: 5px;">
                        <p style="color: black;">{{ this.Card.alias }} #{{ this.Card.ref }}/{{ this.Card.number }}</p>
                    </div>
                </div>
            </div>

            <div class="saleWord">
                <div class="moneyInput">
                    <span>价格￥</span>
                    <el-input @input="ruleInput" v-model.number="this.saleMoney" maxlength="7"
                        placeholder="请输入价格"></el-input>
                </div>
                <el-divider></el-divider>
                <div class="costDescription">
                    <span>费用：平台服务费3.0%、流通手续费2.0%，共计5.0%</span>
                    <span>预计收入：￥{{ (this.saleMoney * 0.95).toFixed(2) }}</span>
                </div>

                <div class="confirmSale">
                    <button class="payButton" @click="confirmSale" :disabled="this.isDisable">确认售卖</button>
                    <el-checkbox v-model="this.checkYes" style="color:white;" @change="checked">
                        我已阅读并同意
                        <el-link type="primary" :underline="false" href="/#/agreement" target="_blank">《破浪售卖服务协议》</el-link>
                    </el-checkbox>
                </div>
            </div>
            <div class="notice">
                <div class="title">售卖须知</div>
                <p>1.发布的商品他人购买前，可取消发布。一经购买，不可取消。<br />
                    2.商品出售成功后，会进入默认收款方式。到账时间最长为T+1（工作日次日）。<br />
                    3.商品出售的增值收入部分，请自行申报个人所得税。<br />
                </p>
            </div>


        </el-dialog>

        <el-dialog v-model="changePrice" :lock-scroll="false" class="data-dialog"
            style="position: relative;right: 7px;height: 500px;" destroy-on-close>
            <div class="payPic">
                <img :src="`http://localhost:8081/ipfs/${this.Card.url}`" alt=""
                    style="width: 80px;height: 70px;border: 1px solid black;">
                <div class="word">
                    <span style="font-size: 16px;color: #fff;font-weight:700">{{ this.Card.card_name }}</span>
                    <div style="padding: 5px;background: linear-gradient(#ffebbd, #ffd577);border-radius: 5px;">
                        <p style="color: black;">{{ this.Card.alias }} #{{ this.Card.ref }}/{{ this.Card.number }}</p>
                    </div>
                </div>
                <div style="margin-left: auto;margin-right: 8px;">
                    <button class="download-btn" @click="removeCard">
                        <div class="removeButton">
                            <div class="svg-container">
                                <svg t="1718970343726" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" p-id="5998" width="30" height="30">
                                    <path
                                        d="M889.4 191.8H710.3c-3.3 0-6-2.7-6-6V96.2c0-17.7-14.3-32-32-32H351.5c-17.7 0-32 14.3-32 32v89.6c0 3.3-2.7 6-6 6H134.4c-3.3 0-6 2.7-6 6V250c0 3.3 2.7 6 6 6h86.5c3.2 0 5.8 2.5 6 5.7l28.7 628.2c0.1 3.2 2.8 5.7 6 5.7h500.6c3.2 0 5.8-2.5 6-5.7l28.7-628.2c0.1-3.2 2.8-5.7 6-5.7h86.5c3.3 0 6-2.7 6-6v-52.2c0-3.3-2.7-6-6-6z m-499.9-63.6h244.8c3.3 0 6 2.7 6 6v51.6c0 3.3-2.7 6-6 6H389.5c-3.3 0-6-2.7-6-6v-51.6c0-3.3 2.7-6 6-6zM707 825.9c-0.1 3.2-2.8 5.7-6 5.7H322.7c-3.2 0-5.8-2.5-6-5.7l-25.6-561.3c-0.2-3.4 2.6-6.3 6-6.3h429.6c3.4 0 6.1 2.9 6 6.3L707 825.9z"
                                        p-id="5999" fill="#ffffff"></path>
                                    <path
                                        d="M359.1 383.8c-3.3 0-6 2.7-6 6v308.1c0 3.3 2.7 6 6 6h52c3.3 0 6-2.7 6-6V389.8c0-3.3-2.7-6-6-6h-52zM487.1 383.8c-3.3 0-6 2.7-6 6v308.1c0 3.3 2.7 6 6 6h52c3.3 0 6-2.7 6-6V389.8c0-3.3-2.7-6-6-6h-52zM615.1 383.8c-3.3 0-6 2.7-6 6v308.1c0 3.3 2.7 6 6 6h52c3.3 0 6-2.7 6-6V389.8c0-3.3-2.7-6-6-6h-52z"
                                        p-id="6000" fill="#ffffff"></path>
                                </svg>
                            </div>
                            <div class="text-container">
                                <div class="text">取消上架</div>
                            </div>
                        </div>
                    </button>

                </div>
            </div>

            <div class="saleWord">
                <div class="moneyInput">
                    <span>价格￥</span>
                    <el-input @input="ruleInput" v-model.number="this.saleMoney" maxlength="7"
                        placeholder="请输入价格"></el-input>
                </div>
                <el-divider></el-divider>
                <div class="costDescription">
                    <span>费用：平台服务费3.0%、流通手续费2.0%，共计5.0%</span>
                    <span>预计收入：￥{{ (this.saleMoney * 0.95).toFixed(2) }}</span>
                </div>

                <div class="confirmSale">
                    <button class="payButton" @click="changeCardPrice" :disabled="this.isDisable">确认修改</button>
                    <el-checkbox v-model="this.checkYes" style="color:white;" @change="checked">
                        我已阅读并同意
                        <el-link type="primary" :underline="false" href="/#/agreement" target="_blank">《破浪售卖服务协议》</el-link>
                    </el-checkbox>
                </div>
            </div>
            <div class="notice">
                <div class="title">售卖须知</div>
                <p>1.发布的商品他人购买前，可取消发布。一经购买，不可取消。<br />
                    2.商品出售成功后，会进入默认收款方式。到账时间最长为T+1（工作日次日）。<br />
                    3.商品出售的增值收入部分，请自行申报个人所得税。<br />
                </p>
            </div>
        </el-dialog>

    </div>
</template>
<script>
import { ElLoading } from 'element-plus'
import { ElMessage } from 'element-plus'
import api from '@/api/card.js'
import { ethers } from 'ethers';

const provider = new ethers.providers.JsonRpcProvider('http://localhost:8545');
const signer = provider.getSigner();

const ABI = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "hashValue",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "creator",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "creationTime",
          "type": "uint256"
        }
      ],
      "name": "CardRegistered",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "TokenApprovalRevoked",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "TokenApproved",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        }
      ],
      "name": "TokenTransferred",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "approveToken",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "mint",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "name": "newcards",
      "outputs": [
        {
          "internalType": "string",
          "name": "hashValue",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "creator",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "creationTime",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "str",
          "type": "string"
        }
      ],
      "name": "poLanghash",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "revokeTokenApproval",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        }
      ],
      "name": "transferToken",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_hashValue",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_creator",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_creationTime",
          "type": "uint256"
        }
      ],
      "name": "updateCard",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "stateMutability": "payable",
      "type": "receive"
    }
  ];
const Address = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
const contract = new ethers.Contract(Address, ABI, signer);

export default {
    beforeRouteEnter(to, from, next) {
        window.scroll(0, 0);
        next();
    },
    inject: ['reload'],
    data() {
        return {
            saleMoney: null,
            isDisable: true,
            checkYes: false,
            tosale: false,
            changePrice: false,
            Card: { url: 'QmNnz8KBAmiHGApZhU4gD9P3kbA5rFNfsQL5wgc6oQ7gFD' },
            saleCard: {}
        }
    },
    mounted() {
        api.getMyCard(this.$route.params).then(result => {
            let res = result.data[0];
            this.Card = res;
        }).catch(error => {
            console.log(error)
        })

    },
    methods: {
        //返回上一级
        goBack() {
            this.$router.back()
        },
        //下一步
        next() {
            this.active++;
        },
        //关闭模态框
        close() {
            this.tosale = false;
        },
        //确认支付
        async confirmSale() {
            if (this.saleMoney != null && this.saleMoney != 0) {
                this.saleCard.seller = this.Card.owner
                this.saleCard.card_name = this.Card.card_name;
                this.saleCard.price = this.saleMoney;
                this.saleCard.ref = this.Card.ref;
                // 卖家授权
                let approveTx = await contract.approveToken(this.Card.hash);
                await approveTx.wait();
                api.saleCard(this.saleCard).then(result => {
                    //修改藏品状态
                    api.cardStatus(this.saleCard).then(result => {
                        let res = result.data
                        if (res.affectedRows === 1) {
                            ElMessage({
                                message: '上架成功',
                                type: 'success',
                                offset: 52,
                                duration: 1500
                            })
                            this.tosale = false;
                            this.reload();
                        } else {
                            ElMessage.error("上架失败！")
                        }
                    })
                })

            } else {
                ElMessage({
                    message: '上架金额不能低于1元',
                    type: 'warning',
                    offset: 52,
                    duration: 1500
                })
            }
        },
        //修改价格
        changeCardPrice() {
            if (this.saleMoney != null && this.saleMoney != 0) {
                this.saleCard.card_name = this.Card.card_name;
                this.saleCard.price = this.saleMoney;
                this.saleCard.ref = this.Card.ref;
                api.changePrice(this.saleCard).then(result => {
                    if (result.data.affectedRows === 1) {
                        ElMessage({
                            message: '修改价格成功',
                            type: 'success',
                            offset: 52,
                            duration: 1500
                        })
                        this.changePrice = false
                    } else {
                        ElMessage.error("修改价格失败！")
                    }
                })
            } else {
                ElMessage({
                    message: '上架金额不能低于1元',
                    type: 'warning',
                    offset: 52,
                    duration: 1500
                })
            }
        },
        //取消上架
        async removeCard() {
            let removeTx = await contract.revokeTokenApproval(this.Card.hash);
            await removeTx.wait();
            api.delist(this.Card).then(res => {
                api.cardStatus(this.Card).then(res => {
                    if (res.data.affectedRows == 1) {
                        ElMessage({
                            message: '已成功下架该商品',
                            type: 'success',
                            offset: 52,
                            duration: 1500
                        })
                        this.reload()
                    } else {
                        ElMessage.error("下架失败")
                    }
                })
            })
        },
        //检查
        checked() {
            this.checkYes == !this.checkYes;
            this.isDisable = !this.isDisable;
        },
        //输入框限制
        ruleInput() {
            if (isNaN(this.saleMoney)) {
                this.saleMoney = '';
            } else {
                return
            }
        }
    }
}
</script>



<style lang="scss" scoped>
:deep(.el-checkbox__inner) {
    border-radius: 50%;
    position: relative;
    top: -1px;
    right: -2px;
}

:deep(.el-link__inner) {
    position: relative;
    top: 0px;
    left: -8px;
}

:deep(.el-checkbox__input.is-checked+.el-checkbox__label) {
    color: white;
    /* 勾选文字颜色 */
}

:deep(.el-divider--horizontal) {
    margin: 0px;
    border-color: #505050;
}

:deep(.el-input__wrapper) {
    box-shadow: 0 0 0 0px var(--el-input-border-color, var(--el-border-color)) inset;
    background-color: #333333;
    cursor: default;

    .el-input__inner {
        color: white;
        cursor: default !important;
        caret-color: #ffffff;
    }
}

:deep(.el-dialog) {
    width: 600px;
    background-color: #191919;
}

:deep(.el-icon) {
    width: 25px;
    margin-right: 2px;
    margin-left: -2px;
}

:deep(.el-dialog__title) {
    color: white;
}

:deep(.is-process) {
    color: white;
}

:deep(.el-page-header .el-page-header__header) {
    width: 100%;
    position: fixed;
    z-index: 9999;
}

:deep(.el-page-header .el-page-header__breadcrumb) {
    margin-bottom: 0px !important;
}

:deep(.el-page-header .el-page-header__header) {
    height: 3rem;
    background-color: black;
}

:deep(.el-page-header .el-page-header__left) {
    position: relative;
    left: 2rem;
    color: white;
}

p {
    font-family: unset;
}

.payPic {
    width: 90%;
    height: 70px;
    display: flex;
    flex-direction: row;
    position: relative;
    top: -2rem;
    align-items: center;
    padding: 12px;
    margin: 1rem 2px;
    background-color: #333333;
    border-radius: 6px;
}

.saleWord {
    width: 90%;
    position: relative;
    top: -2rem;
    padding: 12px;
    margin: 1rem 2px;
    background-color: #333333;
    border-radius: 6px;
}

.payButton {
    margin: inherit;
    width: 150px;
    height: 40px;
    border-radius: 25px;
    border: none;
    font-size: 15px;
    background: linear-gradient(#ffebbd, #ffd577);
}
</style>
<style scoped>
.details {
    background: url('../assets/picture/123.png') no-repeat fixed center;
    background-size: cover;
    min-height: 100vh;
}

.button {
    position: relative;
    overflow: hidden;
    font-size: 16px;
    font-weight: 600;
    height: 40px;
    padding: 0 1.5rem;
    border-radius: 1.5rem;
    background: #67c23a;
    border: none;
    color: #fff;
    cursor: pointer;
}

.button:hover::before {
    transform: scaleX(1);
}

.button-content {
    display: flex;
    align-items: flex-end;
    position: relative;
    gap: 8px;
    z-index: 1;
}

.button::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    transform: scaleX(0);
    transform-origin: 0 50%;
    width: 100%;
    height: inherit;
    border-radius: inherit;
    background-image: linear-gradient(to right, #0acffe 0%, #495aff 100%);
    transition: all 0.5s;
}

.svgIcon {
    width: 20px;
    height: 20px;
}

.svgIcon path {
    fill: white;
}


.scene {
    width: 8em;
    justify-content: center;
    align-items: center;
}

.cube {
    cursor: pointer;
    transition: all 0.65s cubic-bezier(.17, .67, .14, .93);
    transform-style: preserve-3d;
    transform-origin: 100% 50%;
    width: 8em;
    height: 50px;
}

.download-btn {
    height: 39px;
    width: 95px;
    cursor: pointer;
    border: none;
    background: #dc0520;
    border-radius: 30px;
    overflow: hidden;
}

.removeButton {
    transform: translateY(-39px);
    transition: all 250ms ease-in-out;
}

.svg-container,
.text-container {
    height: 39px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.text-container .text {
    font-size: 13px;
    color: #fff;
    font-weight: 600;
    opacity: 1;
    transition: opacity ease-in-out 250ms;
}

.download-icon {
    height: 25px;
    width: 25px;
    fill: #fff;
    opacity: 0;
    transition: opacity ease-in-out 250ms;
}


.download-btn:hover .removeButton {
    transform: translateY(0px);
}

.download-btn:hover .text {
    opacity: 0;
}

.download-btn:hover .download-icon {
    opacity: 1;
}

.cube:hover {
    transform: rotateX(-90deg);
}

.side {
    box-sizing: border-box;
    position: absolute;
    display: inline-block;
    height: 50px;
    width: 8em;
    text-align: center;
    text-transform: uppercase;
    padding-top: 0.9em;
    font-weight: bold;
}

.top {
    background: wheat;
    color: #222229;
    transform: rotateX(90deg) translate3d(0, 0, 25px);
    box-shadow: inset 0 0 0 2px #fff;
}

.front {
    background: #e6a23c;
    color: #fff;
    box-shadow: inset 0 0 0 2px #fff;
    transform: translate3d(0, 0, 25px);
}

.main {
    height: 660px;
    width: 800px;
    margin: auto;
    background: url('../assets/picture/poster.png') no-repeat top;
    background-size: 100% 100%;
    position: relative;
    top: -1rem;
}

.goodPicture {
    width: 46%;
    height: 45%;
    margin: auto;
    padding-top: 7rem;
}

.text {
    display: flex;
    justify-content: center;
    align-items: center;
}

.text span {
    margin: 0px 2rem;
    color: white;
    font-size: x-large;
    font-family: "Alimama";
}

.gold {
    display: flex;
    align-items: center;
    width: 18%;
    margin: 1rem auto;
    background-color: #282828;
    color: #ffebbd;
    border-radius: 0 2px 2px 0;
    font-size: 13px;
    overflow: hidden;

}

.gold .number {
    display: inline-block;
    padding: 2px 5px;
    border-radius: 2px 0 0 2px;
    background: linear-gradient(#ffebbd, #ffd577);
    color: #000;
}

.number2 {
    margin: auto;
}

.information {
    width: 800px;
    margin: auto;
    margin-top: -18px;
    background-color: #070707;
}

.issuer {
    width: 75%;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 12px;
    margin: auto;
    margin-bottom: 1rem;
    background-color: #191919;
    border-radius: 6px;
}

.holder {
    width: 75%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 12px;
    margin: auto;
    margin-bottom: 1rem;
    background-color: #191919;
    border-radius: 6px;
}

.word {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-left: 8px;
}

.introduction {
    width: 75%;
    padding: 12px;
    margin: auto;
    margin-bottom: 2rem;
    background-color: #191919;
    border-radius: 6px;
}

.title {
    display: flex;
    align-items: center;
    font-size: 19px;
    color: #fff;
    line-height: 22px;
    padding: 8px 0px 10px 13px;
}

.stitle {
    display: flex;
    align-items: center;
    font-size: 18px;
    color: #fff;
    line-height: 22px;
    padding: 8px 0px 10px 13px;
}

.story {
    padding: 10px;
    color: white;
    font-family: "Alimama";
    font-size: 19px;
    text-indent: 2em;
}

.notes {
    padding: 10px 10px 5px 10px;
    font-size: 17px;
    color: #bbb;
    line-height: 20px;
    text-indent: 1em;
}

.hash {
    width: 99%;
    color: rgb(189, 189, 189);
    margin: 2px 12px;
}

.hash p {
    word-wrap: break-word;
}

.costDescription {
    height: 50px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
}

.costDescription span {
    color: rgb(236, 236, 236);
}

.confirmSale {
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
}

.moneyInput {
    width: 90%;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.moneyInput span {
    width: 52px;
    color: #d9d9d9;
    margin-right: -6px;
    font-size: 15px;
}

.notice {
    position: relative;
    bottom: 2rem;
}

.notice p {
    color: silver;
    margin-left: 12px;
}
</style>