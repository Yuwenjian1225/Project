 <!-- 市场页面 -->
<template>
  <div class="login">
    <Header></Header>
    <div class="table" style="position:relative">
      <el-button type="primary" style="margin: 0px;padding: 8px;position: absolute;top: 8px;right:19px;" @click="refresh">
        <el-icon size="20">
          <refresh-left />
        </el-icon>
      </el-button>

      <el-input placeholder="搜索藏品" v-model="search" @keyup.enter="showSearch"
        style="width: 25%;position: absolute;right:65px;top: 8px;z-index: 999;">
        <template #prefix>
          <el-icon class="el-input__icon" @click="showSearch">
            <search />
          </el-icon>
        </template>
      </el-input>

      <el-table :data="tableData" style="width: 100%;position: relative;top: 40px;" :highlight-current-row="false"
        :header-cell-style="{ color: '#fff', background: 'rgba(0,0,0,0)', fontWeight: '700', }"
        :header-row-style="{ background: 'rgba(0,0,0,0)' }" class="eltable">
        <el-table-column prop="image" label="藏品图" width="100" header-align=right align="right">
          <template v-slot="scope">
            <el-image :src="`http://localhost:8081/ipfs/${scope.row.url}`"
              style="width: 60px; height: 50px; position: relative;top: 2px; perspective: 300px;">
              <div slot="error" class="image-slot">
              </div>
            </el-image>
          </template>
        </el-table-column>
        <el-table-column prop="card_name" label="名称" width=200 align="left"> </el-table-column>
        <el-table-column prop="name" label="寄售者" width=200 align="right"> </el-table-column>
        <el-table-column prop="price" label="价格" align="right">
          <template v-slot="scope">
            ￥{{ scope.row.price }}
          </template>
        </el-table-column>
        <el-table-column label="操作" align="right">
          <template v-slot="scope">
            <el-button v-model="scope.row" type="primary" @click="buy(scope.row)"
              v-if="this.owner != scope.row.account">购买
            </el-button>
            <el-button v-model="scope.row" type="warning" @click="deleteCard(scope.row)"
              v-if="this.owner == scope.row.account">下架
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <el-dialog v-model="tobuy" title="订单详情" class="el-dialog-this" destroy-on-close :lock-scroll="false">
      <p style="position: absolute;top: 3rem;color: #969696">付款后将按平台到款顺序排队发放</p>
      <el-divider></el-divider>
      <div class="payPic">
        <img :src="`http://localhost:8081/ipfs/${this.Card.url}`" alt=""
          style="width: 80px;height: 70px;border: 1px solid black;">
        <div class="word">
          <div style="margin-left: 6px;">
            <span style="font-size: 16px;color: #fff;font-weight:700">{{ this.Card.card_name }}</span>
            <div style="padding: 3px;background: linear-gradient(#ffebbd, #ffd577);border-radius: 5px;margin-top: 5px;">
              <p style="color: black;font-family:unset;font-size: 12px;">{{ this.Card.alias }}
                #{{ this.Card.ref }}/{{ this.Card.number }}</p>
            </div>
            <span style="font-size: 18px;color: #bbb;position: absolute;right: 1rem;bottom: 35px;font-weight: 600;">
              ￥{{ this.Card.price }}</span>
          </div>
        </div>
      </div>
      <div class="seller">
        <span style="font-size: 16px;color: #fff;font-weight:700">持有者：{{ this.Card.name }}</span>
      </div>
      <el-divider></el-divider>
      <div class="choose">
        <div class="title">选择付款方式</div>
        <div class="mode">
          <el-radio v-model="radio" label="1">钱包支付</el-radio>
          <!-- <el-radio v-model="radio" label="2">支付宝支付</el-radio> -->
        </div>
      </div>
      <button class="payButton" @click="loading">确认支付</button>

      <el-dialog width="550px" v-model="this.innerVisible" append-to-body :show-close="false" destroy-on-close
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


    <el-dialog width="550px" v-model="visible" :show-close="false" destroy-on-close :lock-scroll="false"
      style=" background-color: #191919; position: relative; top: 2.5rem;">
      <div style="display: flex; flex-direction: column;position: relative;top: -1rem; background-color: #191919;">
        <!-- 密码输入框 -->
        <div class="input-box" style="margin: auto">
          <!-- 输入密码 -->
          <div style="font-size: 20px; margin-bottom: 5px;color: white;">{{ "输入支付密码" }}</div>
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
            <el-button type="info" :disabled="this.state.disabledConfirm" @click="reConfirm2"
              :class="[state.disabledConfirm ? 'noActive' : 'active']">{{ "确定" }}</el-button>
            <el-button type="info" @click="reset">{{ "重置" }}</el-button>
          </div>
        </div>
      </div>
    </el-dialog>

  </div>
</template> 
<script>
import { ElMessage, ElLoading } from 'element-plus'
import Header from "@/components/Header.vue"
import api from '@/api/card.js'
import userApi from '@/api/user.js'
import orderApi from '@/api/order.js'
import notifyApi from '@/api/notify.js'
import axios from 'axios';
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
  inject: ['reload'],
  components: {
    Header
  },
  data() {
    return {
      search: '',
      tableData: [],
      tobuy: false,
      innerVisible: false,
      visible: false,
      Card: { url: 'QmNnz8KBAmiHGApZhU4gD9P3kbA5rFNfsQL5wgc6oQ7gFD' },
      radio: '1',
      password: 0,
      submitCount: 0,
      owner: '',
      form: {},
      order: {},
      belongingFrom: {},
      state: {
        input: ["", "", "", "", "", ""],
        disabledConfirm: true,
        disabledInput: [false, false, false, false, false, false],
      },
      buyer: '',
      id: 0
    }
  },
  mounted() {
    userApi.getSession().then(res => {
      this.owner = res.data
    })
    api.getMarket().then(result => {
      let res = result.data;
      this.tableData = res.map(item => {
        return {
          ...item,
        };
      });
    }).catch(error => {
      console.log(error)
    });


  },
  methods: {
    //对指定行进行区分（rowIndex：行的索引）
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex % 2 == 0) {
        return "";
      } else {
        return "warning-row";
      }
    },
    //搜索
    showSearch() {
      api.searchMarket({ name: this.search }).then(result => {
        let res = result.data;
        if (res.length > 0) {
          this.tableData = res.map(item => {
            return {
              ...item,
            };
          });
        } else {
          ElMessage({
            message: '暂无匹配商品',
            offset: 25,
            duration: 1500
          })
        }
      }).catch(error => {
        console.log(error)
      })
    },
    //刷新
    refresh() {
      api.getMarket().then(result => {
        let res = result.data;
        this.tableData = res.map(item => {
          return {
            ...item,
          };
        });

      }).catch(error => {
        console.log(error)
      })
    },
    //购买（data：行的藏品数据）
    buy(data) {
      this.Card = data;
      this.tobuy = true;
    },
    //下架（data：行的藏品数据）
    deleteCard(data) {
      this.Card = data;
      this.visible = true;
    },
    //关闭模态框
    close() {
      this.tobuy = false;
    },
    //等待支付蒙层
    loading() {
      if (this.radio == 1) {
        const loading = ElLoading.service({
          lock: true,
          text: '钱包支付',
          background: 'rgba(0, 0, 0, 0.6)',
        })
        setTimeout(() => {
          loading.close()
          this.innerVisible = true
        }, 800)

      } else if (this.radio == 2) {
        ElMessage({
          message: '正在前往支付页面，请勿关闭',
          target: 'data-dialog',
          type: 'success',
          duration: 2000
        })
        axios.post('http://localhost:3000/api/pay/market', this.Card, {
        }).then(response => {
          let res = response.data
          console.log(res);
          if (res.code === 200) {
            window.location.href = res.result;
          }
        }).catch(error => {
          console.error(error);
        });
      }

    },
    //限制按钮输入
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
    //输入密码购买藏品
    reConfirm() {
      this.password = parseInt(this.state.input.join(''), 10)
      this.form.account = this.owner;
      this.form.password = this.password
      //去验证密码是否正确
      if (this.submitCount >= 3) {
        ElMessage.error('已达到提交次数上限，请稍后再试。');
        return;
      } else {
        userApi.validate(this.form).then(res => {
          if (res.data.length == 0) {
            ElMessage({
              message: '支付密码错误，请重试',
              type: 'warning',
              duration: 1000
            })
            this.reset()
            this.submitCount++;
          } else if (res.data.length == 1) {
            if (res.data[0].balance < this.Card.price) {
              ElMessage.error("余额不足，请前往充值！")
            } else {
              this.id = res.data[0].id
              this.buyer = res.data[0].address
              this.paySuccess()
            }
          }
        })
      }
    },
    //输入密码下架藏品
    reConfirm2() {
      this.password = parseInt(this.state.input.join(''), 10)
      this.form.account = this.owner;
      this.form.password = this.password
      //去验证密码是否正确
      if (this.submitCount >= 3) {
        ElMessage.error('已达到提交次数上限，请稍后再试。');
        return;
      } else {
        userApi.validate(this.form).then(res => {
          if (res.data.length == 0) {
            ElMessage({
              message: '支付密码错误，请重试',
              type: 'warning',
              duration: 1000
            })
            this.reset()
            this.submitCount++;
          } else if (res.data.length == 1) {
            api.delist(this.Card).then(res => {
              api.cardStatus(this.Card).then(res => {
                if (res.data.affectedRows == 1) {
                  ElMessage.success("下架成功")
                  this.reload()

                } else {
                  ElMessage.warning("下架失败")
                }
              })

            })
          }
        })

      }
    },
    //购买
    async paySuccess() {
      try {
        const now = Date.now();
        let currentDate = new Date();
        let year = currentDate.getFullYear();
        let month = String(currentDate.getMonth() + 1).padStart(2, '0');
        let day = String(currentDate.getDate()).padStart(2, '0');
        const date = year + '' + month + '' + day + '2200198' + now


        const transferHash = await contract.transferToken(this.Card.hash,this.buyer);
        const receipt = await transferHash.wait();
        console.log('交易哈希:', receipt.transactionHash);
        this.order.trade_no = date;
        this.order.name = this.Card.card_name;
        this.order.ref = this.Card.ref;
        this.order.price = this.Card.price;
        this.order.buyer = this.buyer;
        this.order.seller = this.Card.seller;

        this.belongingFrom.card_name = this.Card.card_name;
        this.belongingFrom.ref = this.Card.ref;
        this.belongingFrom.hash = this.Card.hash;
        this.belongingFrom.transHash = receipt.transactionHash;
        this.belongingFrom.owner = this.buyer;

        //添加订单
        orderApi.addOrder(this.order).then(result => {
          //修改藏品交易哈希
          api.updateHash(this.belongingFrom).then(result => {
            //藏品转至对方名下
            api.transOwner(this.belongingFrom).then(result => {
              if (result.data.affectedRows == 1) {
                //市场下架该藏品
                api.delist(this.belongingFrom).then(result => {
                  if (result.data.affectedRows == 1) {
                    //扣除余额
                    userApi.reduceBalance({ money: this.Card.price, id: this.id }).then(result => {
                      //给卖家转账 95%
                      userApi.income({ account: this.Card.seller, money: this.Card.price }).then(result => {
                        //发消息给卖家
                        notifyApi.addNotify({ card_name: this.Card.card_name, seller: this.Card.seller, money: this.Card.price }).then(result => {
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
                          }, 800)
                        })
                      });
                    })
                  }
                })
              }
            })
          })
        });
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script> 
<script setup>
import { Search, RefreshLeft } from '@element-plus/icons-vue'

</script>

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
  color: #fff !important;
  border-width: 0px !important;
  background-color: #2faada !important;
}

:deep(.el-divider--horizontal) {
  margin: 0px;
  border-color: #505050;
}

:deep(.el-image__inner) {
  transform: translateZ(100px);
}

:deep(.el-dialog-this) {
  width: 800px;
  height: 333px;
  background-color: #191919;
}

:deep(.el-dialog__title) {
  color: white;
}

:deep(.is-process) {
  color: white;
}

.payPic {
  width: 72%;
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

.login {
  background: url('../assets/picture/123.png') no-repeat fixed center;
  background-size: cover;
}

.table {
  width: 52%;
  height: 100vh;
  margin: auto;
  padding: 0px 10px;
  background: url('../assets/picture/dataBG.jpg') no-repeat;

  @media only screen and (max-width: 2400px) {
    background-position-y: 2px;
    background-position-x: -9px;
  }

  @media only screen and (min-width: 2400px) and (max-width:3100px) {
    background-size: 102% 100%;
    background-position-y: -35px;
    background-position-x: -15px;
  }

  @media only screen and (min-width: 3100px) and (max-width:5000px) {
    background-size: 102% 100%;
    background-position-y: -92px;
    background-position-x: -22px;
  }

  @media only screen and (min-width: 5000px) and (max-width:7000px) {
    background-size: 102% 100%;
    background-position-y: -150 px;
    background-position-x: -42px;
  }

  @media only screen and (min-width: 7000px) {
    background-size: cover;
    background-position-y: -30rem;
  }
}

:deep(.el-table),
:deep(.el-table__expanded-cell) {
  background-color: transparent;
  color: #93dcfe;
  font-size: 18px;
}

:deep(.el-table th),
:deep(.el-table tr),
:deep(.el-table td) {
  background-color: rgba(255, 255, 255, 0.2);
  border: 0px;
  color: #93dcfe;
  font-size: 18px;
  height: 5px;
  font-family: Source Han Sans CN Normal, Source Han Sans CN Normal-Normal;
  font-weight: Normal;
}

:deep(.el-table__body) {
  border-spacing: 0 10px;
}

.el-table::before {
  height: 0px;
}

:deep(.el-table__body tr),
:deep(.el-table__body td) {
  padding: 0;
  height: 40px;
}

:deep(.el-table tbody tr:hover>td) {
  background: #063570 !important;
}


:deep(.el-table__header-wrapper) {
  background-color: rgba(0, 0, 0, 0);
}


:deep(tr td:first-child) {
  border-radius: 10px 0px 0px 10px;
}

:deep(tr td:last-child) {
  border-radius: 0px 10px 10px 0px;
}

.el-image {
  border: 3px solid transparent;
  border-radius: 10px;
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  background-image: linear-gradient(to right, #222, #222), linear-gradient(90deg, #8F41E9, #76ffd5, #578AEF);

}

.seller {
  position: absolute;
  right: 2rem;
  bottom: 11rem;
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

.el-radio__label {
  color: white;
}
</style>

   

    