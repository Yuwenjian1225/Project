 <!-- 购买藏品页面 -->
<template>
  <div class="details">
    <el-page-header @back="goBack" title="返回"> </el-page-header>
    <div class="main">
      <div class="goodPicture">
        <img :src="`http://localhost:8081/ipfs/${this.Card.url}`" alt="" style="width: 100%;height:100%">
      </div>
      <div style="display: flex;flex-direction: column;align-items: center;margin: 2.5rem 0px 3rem 0px;">
        <el-button round @click="tobuy = true" v-if="this.remain >= 1"
          style="width: 10%;background: linear-gradient(#ffebbd, #ffd577);color: black;">
          购买
        </el-button>
        <el-button round disabled v-if="this.remain == 0"
          style="width: 10%;background: #323232; color: #7d7d7d;border-color:#323232">
          已售罄
        </el-button>

      </div>

      <div class="text">
        <img src="../assets/picture/style.png" alt="" style="transform: rotateY(180deg);width: 50px;height: 12px;">
        <span>{{ this.Card.name }}</span>
        <img src="../assets/picture/style.png" alt="" style="width: 50px;height: 12px;">
      </div>
      <div class="gold">
        <span class="number">限量</span>
        <span class="number2">本次发行{{ this.Card.number }}份</span>
      </div>
    </div>
    <div class="information">
      <div class="issuer">
        <img src="../assets/logo.png" alt=""
          style="width: 60px;border: 1px solid black;border-radius: 50%;margin-left: 15px;">
        <div class="word">
          <span style="font-size: 17px;color: #fff;">破浪官方</span>
          <span style="margin-top: 2px;font-size: 13px;color: #bbb;">创作者</span>
        </div>
      </div>
      <div class="introduction">
        <div class="title">藏品介绍</div>
        <div class="story">
          <span>{{ this.Card.content }}</span>
        </div>
      </div>
      <div class="introduction">
        <div class="title">购买须知</div>
        <div class="notes">
          <span>数字藏品为虚拟数字商品，而非实物，仅限实名认证为年满18-69周岁的中国大陆用户购买，
            普通用户每期藏品只能购买1份。数字藏品的版权由发行方或原创者拥有（所有），除另行取
            得版权拥有者书面同意外，用户不得将数字藏品用于任何商业用途。本商品一经售出，不支持
            退换。本商品源文件不支持本地下载。请勿对数字藏品进行炒作、场外交易、欺诈，或以任何
            其他非法方式进行使用。
          </span>
        </div>
      </div>

      <div style="width: 96%;display: flex;align-items: center;justify-content: center;padding-bottom: 1rem;">
        <img style="width: 39px;" src="../assets/logo.png" alt="polang logo" />
        <p style="color:#1196db;font-size: 14px;">破浪——让前行无畏</p>
      </div>
    </div>

    <el-dialog v-model="tobuy" title="确认支付" class="data-dialog" destroy-on-close :lock-scroll="false">
      <el-steps style="max-width: 600px" :active="active" finish-status="success">
        <el-step title="提交订单" />
        <el-step title="用户付款" />
        <el-step title="完成订单" />
      </el-steps>
      <div class="payPic">
        <img :src="`http://localhost:8081/ipfs/${this.Card.url}`" alt=""
          style="width: 80px;height: 70px;border: 1px solid black;">
        <div class="word">
          <span style="font-size: 16px;color: #fff;font-weight:700">{{ this.Card.name }}</span>
          <span style="font-size: 18px;color: #bbb;position: absolute;right: 1rem;font-weight: 600;">￥{{ this.Card.price
          }}</span>
        </div>
      </div>
      <div class="choose">
        <div class="mode" style="margin-left: 2px;">
          <label class="checkbox-container">
            <input type="checkbox" v-model="checkYes" @change="checked" />
            <span class="checkmark"> </span>
            <span style="margin-left: 20px;color:white">我已阅读并同意</span>
            <el-link type="primary" :underline="false" href="/#/agreement" target="_blank"
              style="osition: relative; top: -2px;">《破浪售卖服务协议》</el-link>
          </label>
        </div>
      </div>
      <button class="payButton" @click="loading" :disabled="this.isDisable">确认支付</button>

      <el-dialog id="payDialog" width="550px" v-model="payfor" append-to-body :show-close="false" :lock-scroll="false"
        destroy-on-close>
        <div class="container">
          <div class="card cart">
            <label class="payTitle">订单确认</label>
            <div class="steps">
              <div class="step">
                <div>
                  <span>藏品信息</span>
                  <p>{{ this.Card.name }}</p>
                  <p>{{ this.Card.content.substring(0, 17) }}</p>
                </div>
                <hr>
                <div>
                  <span>付款账户</span>
                  <p>{{ this.accountForm.name }}</p>
                  <p>{{ this.accountForm.account }}</p>
                </div>
                <hr>

                <div class="payments">
                  <span>支付</span>
                  <div class="aword">
                    <span>钱包:</span>
                    <span>${{ this.accountForm.balance }}</span>
                    <span>实付:</span>
                    <span>-${{ this.Card.price }}</span>
                    <span>剩余:</span>
                    <span>${{ (this.accountForm.balance - this.Card.price).toFixed(2) }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="card checkout">
            <div class="footer">
              <label class="price">${{ this.Card.price }}</label>
              <button class="checkout-btn" @click="confirmPay">确认支付</button>
            </div>
          </div>
        </div>
      </el-dialog>

      <el-dialog width="550px" v-model="innerVisible" append-to-body :show-close="false" destroy-on-close
        :lock-scroll="false" style=" background-color: #191919; position: relative; top: 2.5rem;">
        <div style="display: flex; flex-direction: column;position: relative;top: -1rem; background-color: #191919;">
          <!-- 密码输入框 -->
          <div class="input-box" style="margin: auto">
            <!-- 输入密码 -->
            <div style="font-size: 20px; margin-bottom: 5px;color: white;">{{ "输入密码" }}</div>
            <div class="input-content" @input="this.inputEvent">
              <input max="9" min="0" maxlength="1" data-index="0" v-model.number="this.state.input[0]" type="password"
                onpaste="return false;" :disabled="state.disabledInput[0]" />
              <input max="9" min="0" maxlength="1" data-index="1" v-model.number="this.state.input[1]" type="password"
                onpaste="return false;" :disabled="state.disabledInput[1]" />
              <input max="9" min="0" maxlength="1" data-index="2" v-model.number="this.state.input[2]" type="password"
                onpaste="return false;" :disabled="state.disabledInput[2]" />
              <input max="9" min="0" maxlength="1" data-index="3" v-model.number="this.state.input[3]" type="password"
                onpaste="return false;" :disabled="state.disabledInput[3]" />
              <input max="9" min="0" maxlength="1" data-index="4" v-model.number="this.state.input[4]" type="password"
                onpaste="return false;" :disabled="state.disabledInput[4]" />
              <input max="9" min="0" maxlength="1" data-index="5" v-model.number="this.state.input[5]" type="password"
                onpaste="return false;" :disabled="state.disabledInput[5]" />
            </div>

            <!-- 按钮 -->
            <div style="margin: auto; margin-top: 36px;float:right">
              <el-button type="info" :disabled="this.state.disabledConfirm" @click="reConfirm"
                :class="[state.disabledConfirm ? 'noActive' : 'active']">{{ "确定" }}</el-button>
              <el-button type="info" @click="reset">{{ "重置" }}</el-button>
            </div>
          </div>
        </div>
      </el-dialog>

    </el-dialog>
    <router-view></router-view>
  </div>
</template>
<script>
import { ElLoading } from 'element-plus'
import { ElMessage } from 'element-plus'
import api from '@/api/card.js'
import orderApi from '@/api/order.js'
import userApi from '@/api/user.js'
import axios from 'axios';
import { ethers } from 'ethers';

// 创建一个合约实例
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
  inject: ['reload'],
  data() {
    return {
      active: 1,
      tobuy: false,
      payfor: false,
      innerVisible: false,
      remain: 1,
      submitCount: 0,
      checkYes: false,
      isDisable: true,
      Card: { url: 'QmNnz8KBAmiHGApZhU4gD9P3kbA5rFNfsQL5wgc6oQ7gFD' },
      routerData: {},
      order: {},
      accountForm: {},
      address: '',
      belongingFrom: {},
      password: 0,
      state: {
        input: ["", "", "", "", "", ""],
        disabledConfirm: true,
        disabledInput: [false, false, false, false, false, false],
      },
    }
  },
  mounted() {
    window.scroll(0, 0);
    api.getCard(this.$route.params).then(result => {
      let res = result.data[0];
      this.remain = res.remain
      this.Card = res;
    }).catch(error => {
      console.log(error)
    })
    userApi.getSession().then(res => {
      this.accountForm.account = res.data
      userApi.information(this.accountForm).then(res => {
        this.accountForm.address = res.data[0].address;
        this.accountForm.name = res.data[0].name;
        this.accountForm.balance = res.data[0].balance;
        this.accountForm.payPassword = res.data[0].payPassword
        this.accountForm.id = res.data[0].id
      })
    })



  },
  methods: {
    //返回上一页
    goBack() {
      this.$router.go(-1)
    },
    //检查
    checked() {
      this.checkYes == !this.checkYes;
      this.isDisable = !this.isDisable;
    },
    //下一步
    next() {
      if (this.active < 2) {
        this.active++;
      }
    },
    //关闭模态框
    close() {
      this.tobuy = false;
    },
    //加载蒙层
    loading() {
      if (!this.isDisable) {
        this.next()
        this.payfor = true
      }
    },
    //确认支付
    confirmPay() {
      if (this.accountForm.balance - this.Card.price >= 0) {
        this.payfor = false
        this.innerVisible = true
      } else {
        ElMessage({
          message: '余额不足，请前往充值！',
          type: 'error',
          duration: 1000
        });
        this.payfor = false
      }
    },
    //支付
    async reConfirm() {
      this.password = parseInt(this.state.input.join(''), 10)
      //去验证密码是否正确
      if (this.submitCount >= 3) {
        ElMessage.error('已达到提交次数上限，请退出并稍后再试。');
        return;
      } else {
        if (this.accountForm.payPassword != this.password) {
          ElMessage({
            message: '支付密码错误，请重试',
            type: 'warning',
            duration: 1000
          })
          this.reset()
          this.submitCount++;
        } else {
          try {
            const now = Date.now();
            let currentDate = new Date();
            let year = currentDate.getFullYear();
            let month = String(currentDate.getMonth() + 1).padStart(2, '0');
            let day = String(currentDate.getDate()).padStart(2, '0');
            const date = year + '' + month + '' + day + '2200198' + now
            const string = this.Card.url + this.remain
            const cardHash = await contract.poLanghash(string);
            const mintReceipt = await contract.mint(this.accountForm.address, cardHash);
            const receipt = await mintReceipt.wait();
            console.log(cardHash, '交易哈希:', receipt.transactionHash);
            this.order.name = this.Card.name;
            this.order.ref = this.remain;
            this.order.price = this.Card.price;
            this.order.trade_no = date;
            this.order.buyer = this.accountForm.address;
            this.order.seller = "破浪官方";
            orderApi.addOrder(this.order).then();
            api.soldCard({ name: this.Card.name }).then();
            this.belongingFrom.name = this.Card.name;
            this.belongingFrom.type = this.Card.type;
            this.belongingFrom.ref = this.Card.remain;
            this.belongingFrom.hash = cardHash;
            this.belongingFrom.transHash = receipt.transactionHash;
            this.belongingFrom.owner = this.accountForm.address;
            api.addHashCard(this.belongingFrom).then(res => {
              api.addOwner(this.belongingFrom).then(res => {
                if (res.data.affectedRows == 1) {
                  userApi.reduceBalance({ money: this.Card.price, id: this.accountForm.id }).then(res => {
                    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-ea893728=""><path stroke="#409eff" stroke-width="50" fill="none" d="M926.784 480H701.312A192.512 192.512 0 0 0 544 322.688V97.216A416.064 416.064 0 0 1 926.784 480m0 64A416.064 416.064 0 0 1 544 926.784V701.312A192.512 192.512 0 0 0 701.312 544zM97.28 544h225.472A192.512 192.512 0 0 0 480 701.312v225.472A416.064 416.064 0 0 1 97.216 544zm0-64A416.064 416.064 0 0 1 480 97.216v225.472A192.512 192.512 0 0 0 322.688 480H97.216z"></path></svg>`
                    const loading = ElLoading.service({
                      lock: true,
                      text: '藏品发放中',
                      spinner: svg,
                      background: 'rgba(0, 0, 0, 0.8)',
                    })
                    setTimeout(() => {
                      this.innerVisible = false
                      loading.close()
                      ElMessage.success("购买成功")
                      this.reload()
                    }, 1000)

                  });
                }
              })
            })
          } catch (error) {
            console.error('调用合约方法时出错:', error);
          }
        }
      }
    },
    //输入限制
    inputEvent(e) {
      var index = e.target.dataset.index * 1;
      var el = e.target;
      // 限制只能输入数字
      el.value = el.value.replace(/[^\d]/g, "");
      if (el.value.length >= 1) {
        // 密文显示、不可编辑、不可回退、即时显示
        this.state.disabledInput[index] = true;
        if (el.nextElementSibling) {
          el.nextElementSibling.focus();
        }
      }
      if (!el.nextElementSibling) {
        this.state.disabledConfirm = false;
      }
    },
    //重置密码
    reset() {
      this.state.disabledConfirm = true;
      this.state.input = ["", "", "", "", "", ""];
      this.state.disabledInput = [false, false, false, false, false, false];
    },

  },
  watch: {
    // 监听路由变化
    '$route'() {
      //关闭模态框
      this.payfor = false;
      this.innerVisible = false;
    }
  }
}

</script>

<style>
#payDialog {
  --el-dialog-bg-color: unset;
  --el-dialog-box-shadow: unset;
  --el-dialog-title-font-size: unset;
  padding: unset;
}

#payDialog .el-dialog__body {
  padding: unset;
}
</style>
<style scoped>
/* Body */
.container {
  position: relative;
  bottom: 2rem;
  display: grid;
  grid-template-columns: auto;
  gap: 0px;
}

hr {
  height: 1px;
  background-color: rgb(0, 0, 0);
  border: none;
}

.card {
  width: 400px;
  background: rgb(252, 250, 233);
  box-shadow: 0px 187px 75px rgba(0, 0, 0, 0.01), 0px 105px 63px rgba(0, 0, 0, 0.05), 0px 47px 47px rgba(0, 0, 0, 0.09), 0px 12px 26px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
}

.payTitle {
  width: 95%;
  height: 40px;
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.75);
  font-weight: 700;
  font-size: 15px;
  color: #000000;
}


.cart {
  border-radius: 19px 19px 0px 0px;
  margin: auto;
}

.checkout {
  border-radius: 0px 0px 19px 19px;
  margin: auto;
}

.cart .steps {
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.cart .steps .step {
  display: grid;
  gap: 10px;
}

.cart .steps .step span {
  font-size: 15px;
  font-weight: 600;
  color: #000000;
  margin-bottom: 8px;
  display: block;
}

.cart .steps .step p {
  font-size: 13px;
  font-weight: 600;
  color: #000000;
}

/* Promo */
.promo form {
  display: grid;
  grid-template-columns: 1fr 80px;
  gap: 10px;
  padding: 0px;
}

.input_field {
  width: auto;
  height: 36px;
  padding: 0 0 0 12px;
  border-radius: 5px;
  outline: none;
  border: 1px solid rgb(16, 86, 82);
  background-color: rgb(251, 243, 228);
  transition: all 0.3s cubic-bezier(0.15, 0.83, 0.66, 1);
}

.input_field:focus {
  border: 1px solid transparent;
  box-shadow: 0px 0px 0px 2px rgb(251, 243, 228);
  background-color: rgb(201, 193, 178);
}

.promo form button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 18px;
  gap: 10px;
  width: 100%;
  height: 36px;
  background: rgba(16, 86, 82, .75);
  box-shadow: 0px 0.5px 0.5px #F3D2C9, 0px 1px 0.5px rgba(239, 239, 239, 0.5);
  border-radius: 5px;
  border: 0;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: #000000;
}

/* Checkout */
.payments .aword {
  display: grid;
  grid-template-columns: 9fr 2fr;
  padding: 0px;
  gap: 5px;
}

.payments .aword span:nth-child(odd) {
  font-size: 13px;
  font-weight: 600;
  color: #000000;
  margin: auto auto auto 0;
}

.payments .aword span:nth-child(even) {
  font-size: 13px;
  font-weight: 600;
  color: #000000;
  margin: auto 0 auto auto;
}

.checkout .footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0px 0px 19px 19px;
  padding: 10px 10px 10px 20px;
  background: linear-gradient(rgb(255, 235, 189), rgb(255, 213, 119));
}

.price {
  position: relative;
  font-size: 22px;
  color: #2B2B2F;
  font-weight: 900;
}

.checkout .checkout-btn {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 36px;
  background: rgb(0 0 0 / 0%);
  border-radius: 7px;
  border: 1px solid rgb(0, 0, 0);
  color: #000000;
  font-size: 15px;
  font-weight: 600;
}
</style>
<style lang="scss" scoped>
.input-box {
  .input-content {
    width: 512px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    input {
      color: white;
      font-family: inherit;
      border: 0;
      outline: 0;
      border-bottom: 1px solid #919191;
      height: 60px;
      width: 60px;
      font-size: 44px;
      text-align: center;
      background-color: #191919;
    }
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    appearance: none;
    margin: 0;
  }
}

.noActive {
  color: #fff !important;
  border-width: 0px !important;
  background-color: #909399 !important;
}

.active {
  color: rgb(0, 0, 0) !important;
  border-width: 0px !important;
  background: linear-gradient(rgb(255, 235, 189), rgb(255, 213, 119)) !important;
}

:deep(.el-dialog) {
  width: 668px;
  height: 350px;
  background-color: #191919;
}

:deep(.el-dialog__title) {
  color: white;
}

:deep(.is-process) {
  color: white;
}

.details {
  background: url('../assets/picture/123.png') no-repeat fixed center;
  background-size: cover;
}

:deep(.el-page-header .el-page-header__header) {
  width: 100%;
  position: fixed;
  z-index: 100;
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

.payPic {
  width: 85%;
  height: 70px;
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: center;
  padding: 12px;
  margin: 1rem 2px;
  background-color: #333333;
  border-radius: 6px;
}

.payButton {
  width: 95px;
  height: 35px;
  border-radius: 25px;
  position: absolute;
  border: none;
  font-size: 15px;
  right: 2rem;
  bottom: 16px;
  background: linear-gradient(rgb(255, 235, 189), rgb(255, 213, 119));
}

.choose {
  margin-top: 5px;
}

.choose .title {
  color: white;
  padding: 3px;
  font-size: 17px;
}

.mode {
  padding: 5px;
}

.main {
  height: 760px;
  width: 800px;
  margin: auto;
  background: url('../assets/picture/poster.png') no-repeat top;
  background-size: 100% 100%;
  position: relative;
  top: -1rem;
}

.goodPicture {
  width: 46%;
  height: 38%;
  margin: auto;
  padding-top: 10.5rem;
  margin-bottom: 2rem;
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
  height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px;
  margin: auto;
  margin-bottom: 2rem;
  background-color: #191919;
  border-radius: 6px;
}

.word {
  display: flex;
  flex-direction: column;
  margin-left: 10px;
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


.checkbox-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}


.checkbox-container {
  position: relative;
  display: inline-block;
  cursor: pointer;
}


.checkmark {
  position: absolute;
  top: 1px;
  left: 0;
  height: 15px;
  width: 15px;
  border: 1px solid #ccc;
  border-radius: 2px;
  background-color: #fff;
  transition: all 0.3s ease;
}


.checkbox-container input:checked~.checkmark:after {
  display: block;
  animation: checkboxExpand 0.3s ease forwards;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
  top: 40%;
  left: 52%;
  transform: translate(-50%, -50%) rotate(45deg) scale(0);
  width: 5px;
  height: 11px;
  border: solid #fff;
  border-width: 0 3px 3px 0;
}


.checkbox-container input:checked~.checkmark {
  background-color: #4caf50;
  border-color: #4caf50;
  box-shadow: 0 0 5px rgba(76, 175, 80, 0.5);
}

@keyframes checkboxExpand {
  0% {
    transform: translate(-50%, -50%) rotate(45deg) scale(0);
  }

  100% {
    transform: translate(-50%, -50%) rotate(45deg) scale(1);
  }
}
</style>
