<template>
    <el-menu router :default-active="this.$route.path" class="el-menu-demo" mode="horizontal" background-color="#1d2125"
        text-color="#fff" active-text-color="#1196db" style="z-index: 999;">
        <div class="logo">
            <img class="logoImg" style="width: 50px;margin: 3px 3px 3px 2rem;" src="../assets/logo.png" alt="polang logo" />
            <p class="logoP" style="color:#1196db;">破浪——让前行无畏</p>
        </div>
        <el-menu-item index="/main" @click="shop"><el-icon :size="40">
                <Goods />
            </el-icon>商城</el-menu-item>
        <el-menu-item index="/warehouse" @click="warehouse"><el-icon :size="40">
                <Box />
            </el-icon>仓库</el-menu-item>
        <el-menu-item index="/market" @click="market"><el-icon :size="40">
                <Shop />
            </el-icon>市场</el-menu-item>

        <div class="flex items-center">

            <button class="notification" @click="message = true">
                <div class="messageNumber" v-show="messageNumber > 0">{{ messageNumber }}</div>
                <div class="bell-container">
                    <div class="bell"></div>
                </div>
            </button>

            <button class="tooltip" @click="wallet = true">
                <svg t="1712405962176" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    p-id="4351" width="30" height="30">
                    <path
                        d="M921.6 518.6624a77.824 77.824 0 0 0-6.4-0.2624h-153.6c-42.4128 0-76.8 34.3872-76.8 76.8s34.3872 76.8 76.8 76.8h153.6c2.1568 0 4.288-0.0896 6.4-0.2624V800c0 42.4128-34.3872 76.8-76.8 76.8H179.2c-42.4128 0-76.8-34.3872-76.8-76.8V390.4c0-42.4128 34.3872-76.8 76.8-76.8h665.6c42.4128 0 76.8 34.3872 76.8 76.8v128.2624zM861.5168 275.2H216.5248a76.9792 76.9792 0 0 1 25.9648-12.3776l500.3008-132.224c40.9344-10.816 83.008 13.1392 93.984 53.5168L861.5168 275.2zM761.6 544h134.4a25.6 25.6 0 0 1 25.6 25.6v51.2a25.6 25.6 0 0 1-25.6 25.6h-134.4a51.2 51.2 0 1 1 0-102.4z m6.4 83.2a32 32 0 1 0 0-64 32 32 0 0 0 0 64z"
                        fill="#59AAFF" p-id="4352"></path>
                </svg>
            </button>

            <el-avatar style="position: relative;top: -2px;margin:0px 8px;"
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" @click="edit = true">
            </el-avatar>

            <router-link to="/login">
                <el-button type="primary" class="ml-2">退出</el-button>
            </router-link>
        </div>

    </el-menu>

    <el-dialog v-model="edit" title="账户信息" width="52%" :lock-scroll="false" :append-to-body="true" destroy-on-close>
        <el-form :inline="true" :model="accountForm" class="demo-accountForm-inline" :rules="rules">
            <el-form-item label="钱包地址" required style="width: 566px;" prop="address">
                <el-input v-model="accountForm.address" type="text" autocomplete="off" disabled />
            </el-form-item>

            <el-form-item label="账号" required prop="account">
                <el-input v-model="accountForm.account" type="text" autocomplete="off" disabled />
            </el-form-item>

            <el-form-item label="登录密码" prop="password">
                <el-input v-model="accountForm.password" placeholder="请输入登录密码" type="password" />
            </el-form-item>

            <el-form-item label="昵称" prop="name">
                <el-input v-model="accountForm.name" type="text" autocomplete="off" />
            </el-form-item>

            <el-form-item label="支付密码" prop="payPassword">
                <el-input v-model="accountForm.payPassword" placeholder="请输入支付密码" maxlength="6"
                    oninput="value=value.replace(/[^0-9]/g,'')" type="password" />
            </el-form-item>

        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button type="primary" @click="submit">
                    提交修改
                </el-button>
                <el-button @click="edit = false">取消</el-button>

            </span>
        </template>
    </el-dialog>

    <el-dialog v-model="wallet" width="450px" id="walletDialog" destroy-on-close :show-close="false" :lock-scroll="false"
        :append-to-body="true">
        <div class="modal">
            <div class="form">
                <div class="payment--options">
                    <label>
                        <input class="radio-input instagram" type="radio" value="meta" v-model="selectedOption" />
                        <span class="radio-tile instagram">
                            <span class="radio-icon">
                                <svg t="1712407017866" class="icon" viewBox="0 0 1086 1024" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" p-id="6313" width="30" height="30">
                                    <path d="M990.77818156 61.09090906l-382.08 282.70545469 71.04-166.60363688z"
                                        fill="#E17726" p-id="6314"></path>
                                    <path
                                        d="M109.46909094 61.09090906l378.67636406 285.35272688-67.63636406-169.25090906zM853.23636406 716.625455l-101.67272812 155.28727219 217.68727312 59.9272725 62.34181781-211.83999938zM69.0327275 720.00000031l61.96363594 211.83999938 217.30909125-59.9272725-101.26545469-155.31636375z"
                                        fill="#E27625" p-id="6315"></path>
                                    <path
                                        d="M336.58181844 454.254545L276.15999969 545.454545l215.41818187 9.80363719-7.18545469-231.85454625zM763.63636344 454.254545l-150.02181844-133.44-4.91636344 234.47272781 215.41818188-9.80363625zM348.30545469 871.91272719l130.38545437-62.9527275-112.23272719-87.44727282zM621.55636344 808.95999969l130.0072725 62.9527275-17.74545375-150.40000031z"
                                        fill="#E27625" p-id="6316"></path>
                                    <path
                                        d="M751.56363594 871.91272719l-130.03636313-62.9527275 10.61818219 84.45090937-1.16363719 35.78181844zM348.30545469 871.91272719l120.93090937 57.30909093-0.75636375-35.81090906 10.21090875-84.45090937z"
                                        fill="#D5BFB2" p-id="6317"></path>
                                    <path
                                        d="M471.50545437 665.71636344l-108.0727275-31.65090844 76.33454625-35.05454625zM628.74181813 665.71636344l31.70909062-66.70545469 76.74181875 35.05454625z"
                                        fill="#233447" p-id="6318"></path>
                                    <path
                                        d="M348.30545469 871.91272719l18.90909093-155.28727219-120.17454562 3.37454531zM733.03272687 716.625455l18.53090907 155.28727219 101.64363656-151.91272688zM824.145455 545.454545l-215.44727344 9.83272781 20.04363656 110.42909063 31.70909063-66.70545469 76.74181875 35.05454625zM363.43272688 634.065455l76.33454625-35.05454625 31.73818125 66.70545469 20.04363656-110.42909063-215.41818188-9.80363625z"
                                        fill="#CC6228" p-id="6319"></path>
                                    <path
                                        d="M276.13090906 545.454545l90.32727282 176.05818188-3.02545501-87.44727188zM737.1927275 634.065455l-3.40363687 87.44727187 90.32727281-176.02909031zM491.54909094 555.28727281l-20.04363656 110.42909063 25.30909125 130.44363656 5.70181781-171.92727281zM608.69818156 555.28727281l-10.58909062 68.59636313 5.29454531 172.27636406 25.30909125-130.44363656z"
                                        fill="#E27525" p-id="6320"></path>
                                    <path
                                        d="M628.74181813 665.71636344l-25.30909125 130.44363656 18.12363656 12.79999969 112.23272719-87.44727281 3.40363687-87.44727188zM363.43272688 634.065455l3.025455 87.44727187 112.23272718 87.44727282 18.15272719-12.79999969-25.30909125-130.44363656z"
                                        fill="#F5841F" p-id="6321"></path>
                                    <path
                                        d="M630.98181781 929.22181813l1.16363719-35.81090907-9.83272781-8.29090875h-144.37818188l-9.454545 8.29090875 0.75636375 35.78181844-120.93090937-57.28000031 42.32727281 34.67636344 85.81818187 59.20000031h146.99636344l86.16727219-59.20000031 41.94909094-34.67636344z"
                                        fill="#C0AC9D" p-id="6322"></path>
                                    <path
                                        d="M621.55636344 808.95999969l-18.15272719-12.79999969H496.87272688l-18.15272719 12.79999969-10.18181813 84.45090937 9.42545438-8.29090875h144.37818187l9.83272782 8.29090875z"
                                        fill="#161616" p-id="6323"></path>
                                    <path
                                        d="M1007.04000031 362.26909062L1039.12727281 206.25454531 990.77818156 61.09090906l-369.22181812 273.28000032 142.10909156 119.854545 200.66909062 58.47272718 44.21818125-51.66545437-19.28727187-13.96363594 30.63272719-27.86909156-23.44727344-18.094545 30.60363656-23.38909125zM61.09090906 206.22545469l32.49454594 156.04363594-20.77090969 15.47636437 30.98181844 23.35999969-23.41818187 18.094545 30.60363656 27.89818219-19.28727281 13.96363593 44.21818125 51.60727313 200.69818218-58.41454594 142.08-119.854545L109.46909094 61.09090906z"
                                        fill="#763E1A" p-id="6324"></path>
                                    <path
                                        d="M964.33454563 512.66909094l-200.66909063-58.41454594 60.45090844 91.22909156-90.32727281 176.02909031 119.44727343-1.51272656h178.35636282zM336.58181844 454.254545l-200.66909157 58.41454594-66.90909093 207.33090937h178.03636406l119.41818187 1.51272657-90.32727281-176.02909032zM608.69818156 555.28727281l12.85818188-220.91636344 58.18181812-157.1781825h-259.22909062l58.18181812 157.1781825 12.85818188 220.91636344 4.91636343 69.35272688 0.37818188 171.52000031h106.56l0.37818187-171.52000031z"
                                        fill="#F5841F" p-id="6325"></path>
                                </svg>
                            </span>
                        </span>
                    </label>

                    <label>
                        <input class="radio-input twitter" type="radio" value="zfb" v-model="selectedOption" />
                        <span class="radio-tile twitter">
                            <span class="radio-icon">
                                <svg t="1712407422251" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" fill="#4EB8F2" p-id="8804" width="30" height="30">
                                    <path
                                        d="M644.654545 667.927273c-90.763636 107.054545-181.527273 174.545455-323.490909 174.545454-139.636364 0-232.727273-86.109091-221.090909-190.836363 6.981818-69.818182 53.527273-181.527273 260.654546-165.236364 107.054545 9.309091 158.254545 30.254545 249.018182 60.509091 23.272727-41.890909 41.890909-90.763636 55.854545-137.309091h-395.636364v-39.563636H465.454545v-69.818182H228.072727V256H465.454545V153.6s2.327273-13.963636 20.945455-13.963636h97.745455v116.363636h251.345454v41.890909H581.818182v69.818182h207.127273c-16.290909 74.472727-44.218182 144.290909-83.781819 209.454545 51.2 18.618182 258.327273 81.454545 316.509091 97.745455V151.272727c0-83.781818-69.818182-148.945455-148.945454-148.945454h-721.454546C67.490909 0 0 69.818182 0 151.272727v723.781818C0 956.509091 69.818182 1024 151.272727 1024h723.781818c83.781818 0 148.945455-69.818182 148.945455-148.945455V837.818182c-51.2-23.272727-279.272727-123.345455-379.345455-169.890909z"
                                        p-id="8805"></path>
                                    <path
                                        d="M141.963636 640c-9.309091 39.563636 13.963636 132.654545 165.236364 132.654545 90.763636 0 179.2-55.854545 251.345455-148.945454-102.4-51.2-186.181818-74.472727-281.6-74.472727-83.781818 2.327273-128 53.527273-134.981819 90.763636z"
                                        p-id="8806"></path>
                                </svg>
                            </span>
                        </span>
                    </label>
                </div>
                <div class="separator">
                    <hr class="line">
                    <p style="font-family: unset;">钱包充值</p>
                    <hr class="line">
                </div>
                <div class="credit-card-info--form">

                    <div class="input_container">
                        <label for="password_field" class="input_label">当前余额</label>
                        <input id="password_field" class="input_field" v-model="this.accountForm.balance" disabled>
                    </div>
                    <div class="input_container">
                        <label for="password_field" class="input_label">充值账号</label>
                        <input id="password_field" class="input_field" type="text" v-model="this.accountForm.account"
                            disabled>
                    </div>
                    <div class="input_container">
                        <label for="password_field" class="input_label">充值浪币
                            <span v-show="selectedOption == 'meta'"
                                style="font-size: 13px;color: black;font-weight: 500;">1eth = 1000浪币</span>
                            <span v-show="selectedOption == 'zfb'" style="font-size: 13px;color: black;font-weight: 500;">1元=100浪币</span>
                        </label>
                        <input id="password_field" class="input_field" type="number" name="input-name" v-model="langMoney"
                            placeholder="0000 0000 0000 0000">
                    </div>

                </div>

                <button class="recharge" @click="invest">
                    <div class="svg-wrapper-1">
                        <div class="svg-wrapper">
                            <svg t="1712463625013" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="8772" width="20" height="20">
                                <path
                                    d="M512.483467 824.946804c27.883666 0 50.394238-22.577306 50.394238-50.399294l0-100.655009 101.466938 0c28.087912 0 50.665218-22.577306 50.665218-50.532762 0-27.816932-22.577306-50.527706-50.665218-50.527706L562.877705 572.832034l0-50.532762 101.466938 0c28.087912 0 50.665218-22.510572 50.665218-50.466028 0-27.883666-22.577306-50.460972-50.665218-50.460972l-76.269819 0 69.681359-69.819882c19.691569-19.686513 19.691569-51.671283 0-71.495309-19.686513-19.686513-51.738017-19.686513-71.429586 0.07179l-66.855277 66.922011-66.928078-66.922011c-19.686513-19.758303-51.671283-19.758303-71.429586-0.07179-19.753247 19.824026-19.753247 51.808796 0 71.495309l69.748093 69.819882-89.572118 0c-27.817943 0-50.527706 22.577306-50.527706 50.460972 0 27.955455 22.709763 50.466028 50.527706 50.466028l100.59333 0 0 50.532762-100.59333 0c-27.817943 0-50.527706 22.711785-50.527706 50.527706 0 27.955455 22.709763 50.532762 50.527706 50.532762l100.59333 0 0 100.655009C461.950706 802.369497 484.594746 824.946804 512.483467 824.946804L512.483467 824.946804zM512.483467 824.946804M955.837496 294.708215c-1.814961-4.97269-4.101104-9.540932-7.054587-13.642036-0.404448-0.670373-0.809907-1.409502-1.075832-2.081897l-0.537916 0.201213c-8.802814-10.883699-22.305315-17.805829-37.29113-17.805829-26.879623 0-48.717801 21.634942-48.717801 48.44682 0 12.366002 4.700699 23.655161 12.36398 32.185983 26.879623 54.161673 41.996884 115.107963 41.996884 179.615419 0 223.223017-180.958187 404.115481-404.047736 404.115481-223.088538 0-403.975946-180.82573-403.975946-404.115481 0-223.088538 180.887408-403.981002 403.975946-403.981002 87.219241 0 167.922823 27.61673 233.907526 74.587315 9.073794 12.099066 23.653138 19.89076 39.915998 19.89076 27.549996 0 49.855311-22.378116 49.855311-49.788577 0-14.046484-5.91101-26.612688-15.11726-35.681426L820.034933 126.58519c-0.265925-0.204246-0.671384-0.471182-0.805863-0.670373-2.081897-1.954496-4.300295-3.629922-6.853374-5.244681C727.84199 55.423551 621.674354 16.517662 506.499657 16.517662c-277.045965 0-501.546027 224.566796-501.546027 501.612761 0 276.980242 224.565785 501.546027 501.546027 501.546027s501.546027-224.565785 501.546027-501.546027C1008.180163 437.899034 989.298501 361.968951 955.837496 294.708215L955.837496 294.708215zM955.837496 294.708215"
                                    fill="#ffffff" p-id="8773"></path>
                            </svg>
                        </div>
                    </div>
                    <span>确认充值</span>
                </button>

            </div>
        </div>
    </el-dialog>

    <el-dialog v-model="message" width="560px" id="walletDialog" destroy-on-close :lock-scroll="false"
        :append-to-body="true">
        <div class="card">
            <div class="header">
                <div class="top">
                    <div class="circle">
                        <span class="red circle2"></span>
                    </div>
                    <div class="circle">
                        <span class="yellow circle2"></span>
                    </div>
                    <div class="circle">
                        <span class="green circle2"></span>
                    </div>
                </div>
            </div>
            <div class="code-container">
                <div id="code">
                    <div v-if="informationItems.length == 0">
                        <div class="noword">
                            暂无消息通知
                        </div>
                    </div>
                    <div class="information" v-for="(item, index) in informationItems" :key="index">
                        <div class="word">
                            <span>你的藏品“{{ item.card_name }}”已成功售出！账户转入{{ item.profit }}元</span>
                        </div>
                        <button class="button" @click="read(item)" v-if="item.new == 1">已读</button>
                    </div>

                </div>


            </div>
        </div>
    </el-dialog>
</template>
<script>
import api from '@/api/user.js'
import axios from 'axios';
import notifyApi from "@/api/notify.js"
import { ethers } from 'ethers';
import { ElLoading } from 'element-plus'


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

// 监听 MetaMask 账户变化事件
window.ethereum.on('accountsChanged', async (accounts) => {
    if (accounts.length > 0) {
        this.$router.push('/login')
        ElMessage.warning('检测到钱包信息更改，请重新登录！')
    } else {
        console.warn("No accounts found");
    }
});
export default {
    inject: ['reload'],
    data() {
        return {
            wallet: false,
            informationItems: [],
            messageNumber: 0,
            langMoney: null,
            selectedOption: '',
            accountForm: {
                account: '',
                address: '',
                name: '',
                password: '',
                payPassword: '',
                balance: '',
            },
            form: {},
            rules: {
                name: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                    { min: 1, max: 6, message: '长度应小于6', trigger: 'blur' },
                ],
                password: [
                    { required: true, message: '请输入登录密码', trigger: 'blur' },
                    { min: 6, max: 12, message: '长度应在6-12之间', trigger: 'blur' },
                ],
                payPassword: [
                    { required: true, message: '请输入支付密码', trigger: 'blur' },
                    { min: 6, max: 6, message: '长度应为6', trigger: 'blur' },

                ]
            }
        }
    },
    mounted() {
        api.getSession().then(res => {
            this.accountForm.account = res.data
            api.information(this.accountForm).then(res => {
                this.accountForm = res.data[0]
                this.accountForm.password = "123456"
                notifyApi.getNotify(this.accountForm).then(res => {
                    notifyApi.getNotify(this.accountForm).then(res => {
                        this.informationItems = res.data
                        for (let i in this.informationItems) {
                            if (this.informationItems[i].new == 1) {
                                this.messageNumber += 1;
                            }
                        }
                    })
                })
            })
        })


    },
    methods: {
        submit() {
            api.editForm(this.accountForm).then(res => {
                if (res.data.affectedRows == 1) {
                    this.$router.push('/login')
                    ElMessage.warning('信息被修改，请重新登录！')
                }
            }).catch(error => {
                console.log(error);
            })
        },
        shop() {
            this.$router.push('./main')
        },
        warehouse() {
            this.$router.push('./warehouse')
        },
        market() {
            this.$router.push('./market')
        },
        async invest() {
            if (this.langMoney == null || this.langMoney == 0) {
                ElMessage.warning("充值金额不能为0")
            } else if (this.langMoney < 0) {
                ElMessage.warning("充值金额不能为负数")
            } else {
                if (this.selectedOption == 'meta') {
                    const money = Math.floor(this.langMoney / 1000);
                    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-ea893728=""><path stroke="#409eff" stroke-width="50" fill="none" d="M926.784 480H701.312A192.512 192.512 0 0 0 544 322.688V97.216A416.064 416.064 0 0 1 926.784 480m0 64A416.064 416.064 0 0 1 544 926.784V701.312A192.512 192.512 0 0 0 701.312 544zM97.28 544h225.472A192.512 192.512 0 0 0 480 701.312v225.472A416.064 416.064 0 0 1 97.216 544zm0-64A416.064 416.064 0 0 1 480 97.216v225.472A192.512 192.512 0 0 0 322.688 480H97.216z"></path></svg>`
                    const loading = ElLoading.service({
                        lock: true,
                        text: '充值中，请勿关闭页面',
                        spinner: svg,
                        background: 'rgba(0, 0, 0, 0.8)',
                    })
                    try {
                        const valueSend = ethers.utils.parseEther(money.toString()); // 发送以太币
                        // 发送包含以太币的交易到合约地址
                        const tx = await signer.sendTransaction({
                            to: Address,
                            value: valueSend
                        });
                        // 等待交易被确认
                        const receipt = await tx.wait();
                        console.log(receipt.transactionHash)
                        await api.information({ account: this.accountForm.account }).then(res => {
                            this.form.id = res.data[0].id;
                            this.form.money = money * 10
                            api.addBalance(this.form).then(
                                setTimeout(() => {
                                    loading.close()
                                    this.accountForm.balance = this.accountForm.balance + this.langMoney
                                    this.wallet = false
                                    ElMessage.success("充值成功")
                                }, 800)
                            )
                        })
                    } catch (error) {
                        console.error('调用合约方法时出错:', error);
                        loading.close()
                        ElMessage.error("充值失败，请确保付款账户有充足的余额！")
                    }
                } else if (this.selectedOption == 'zfb') {

                    const money = (this.langMoney / 100).toFixed(2);
                    this.form.price = money;
                    this.form.name = "浪币充值"
                    this.form.account = this.accountForm.account

                    axios.post('http://localhost:3000/api/pay', this.form, {
                    }).then(response => {
                        let res = response.data
                        if (res.code === 200) {
                            window.location.href = res.result;
                        }
                    }).catch(error => {
                        console.error(error);
                    });
                } else {
                    ElMessage.warning("请选择充值方式")
                }
            }

        },
        read(data) {
            notifyApi.notifyStatus(data).then(res => {
                if (res.data.affectedRows == 1) {
                    data.new = 0;
                    this.messageNumber -= 1;
                }
            })
        }
    }
}
</script>
<script  setup>
import { ref } from 'vue'
import { Shop, Box, Goods } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'

const edit = ref(false)
const message = ref(false)

</script>
  


<style>
#walletDialog {
    --el-dialog-bg-color: unset;
    --el-dialog-box-shadow: unset;
    --el-dialog-title-font-size: unset;
    padding: unset;
}

#walletDialog .el-dialog__body {
    padding: unset;
}
</style>

<style scoped>
.card {
    width: 550px;
    min-height: 500px;
    margin: 0 auto;
    background-color: #0e75a8;
    border-radius: 8px;
    z-index: 1;
    position: relative;
    top: -18px;
}

#code {
    width: 90%;
    height: 80%;
    min-height: 425px;
    background-color: #6c8ba5;
    border-radius: 5px;
    border: none;
    color: white;
    padding: 10px;
    margin: 1px auto;
}

.top {
    display: flex;
    align-items: center;
    padding-top: 10px;
    padding-left: 10px;
}

.circle {
    padding: 0 4px;
}

.circle2 {
    display: inline-block;
    align-items: center;
    width: 10px;
    height: 10px;
    padding: 1px;
    border-radius: 5px;
}

.red {
    background-color: #ff605c;
}

.yellow {
    background-color: #ffbd44;
}

.green {
    background-color: #00ca4e;
}

.header {
    margin: 5px;
    margin-top: 5px;
    border-radius: 5px;
}

.information {
    width: 95%;
    height: 55px;
    background-color: #1c1f2f;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;
    padding: 0px 10px;
    margin: 10px 0px;
}
.noword{
    display: flex;
    justify-content: center;
}
.word {
    width: 83%;
}

.word span {
    font-size: 13.5px;
    color: white;
    font-weight: 600;
    letter-spacing: 1px;
}

.button {
    padding: 3px 15px;
    border-radius: 20px;
    background-color: #0fac68;
    color: white;
    border: none;
    font-size: 15px;
    cursor: pointer;
    transition: all 0.3s;
}

.button:hover {
    background-color: whitesmoke;
    color: #0fac68;
}

.bell {
    border: 2.17px solid #59AAFF;
    border-radius: 10px 10px 0 0;
    width: 15px;
    height: 17px;
    background: transparent;
    display: block;
    position: relative;
    top: -3px;
}

.bell::before,
.bell::after {
    content: "";
    background: #59AAFF;
    display: block;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    height: 2.17px;
}

.bell::before {
    top: 100%;
    width: 20px;
}

.bell::after {
    top: calc(100% + 4px);
    width: 7px;
}

.notification {
    background: transparent;
    border: none;
    padding: 15px 15px;
    border-radius: 50px;
    cursor: pointer;
    transition: 300ms;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}


.messageNumber {
    color: white;
    font-size: 10px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    right: 8px;
    top: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

/*container background hover effect*/
.notification:hover {
    background: rgba(170, 170, 170, 0.062);
}

/*container animations*/
.notification:hover>.bell-container {
    animation: bell-animation 650ms ease-out 0s 1 normal both;
}

/*bell ring and scale animation*/
@keyframes bell-animation {
    20% {
        transform: rotate(15deg);
    }

    40% {
        transform: rotate(-15deg);
        scale: 1.1;
    }

    60% {
        transform: rotate(10deg);
        scale: 1.1;
    }

    80% {
        transform: rotate(-10deg);
    }

    0%,
    100% {
        transform: rotate(0deg);
    }
}

.tooltip {
    padding: 8px;
    border: 0px solid transparent;
    background-color: rgba(0, 0, 0, 0);
    border-radius: 50px;
}

.tooltip:hover {
    background: rgba(170, 170, 170, 0.062);
}

@media screen and (max-width: 999px) {
    .logoImg {
        display: none;
    }

    .logoP {
        display: none;
    }
}

.flex-grow {
    flex-grow: 1;
}

p {
    font-family: "Alimama";
}

.logo {
    margin: 0px 1rem;
    display: flex;
    align-items: center;
}

.items-center {
    position: absolute;
    top: 4px;
    right: 5rem;
    display: flex;
    align-items: center;
}

.flex button:nth-child(2) {
    margin: 0px 3px;
}

.flex span {
    margin: 0px 3px;
}

.el-button {
    margin: 0px 8px;
}

a {
    text-decoration: none;
}

.modal {
    margin: auto;
    width: fit-content;
    height: fit-content;
    background: #FFFFFF;
    border-radius: 26px;
    max-width: 450px;
}

.form {
    width: 410px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
}

.payment--options {
    width: calc(100% - 40px);
    display: grid;
    grid-template-columns: 50% 50%;
    gap: 20px;
    padding: 10px;
}

.payment--options label {
    height: 55px;
    background: #F2F2F2;
    border-radius: 11px;
    padding: 0;
    border: 0;
    outline: none;
}

.payment--options button svg {
    height: 18px;
}

.payment--options button:last-child svg {
    height: 22px;
}

.separator {
    width: calc(100% - 20px);
    display: grid;
    grid-template-columns: 2fr 1fr 2fr;
    gap: 10px;
    color: #8B8E98;
    margin: 0 10px;
}

.separator>p {
    word-break: keep-all;
    display: block;
    text-align: center;
    font-weight: 600;
    font-size: 15px;
    margin: auto;
}

.separator .line {
    display: inline-block;
    width: 100%;
    height: 1px;
    border: 0;
    background-color: #e8e8e8;
    margin: auto;
}

.credit-card-info--form {
    display: flex;
    flex-direction: column;
    gap: 18px;
}

.input_container {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.split {
    display: grid;
    grid-template-columns: 4fr 2fr;
    gap: 15px;
}

.split input {
    width: 100%;
}

.input_label {
    font-size: 15px;
    color: #8B8E98;
    font-weight: 600;
}

.input_field {
    width: auto;
    height: 40px;
    padding: 0 0 0 16px;
    border-radius: 9px;
    outline: none;
    background-color: #F2F2F2;
    border: 1px solid #e5e5e500;
    transition: all 0.3s cubic-bezier(0.15, 0.83, 0.66, 1);
}

.input_field:focus {
    border: 1px solid transparent;
    box-shadow: 0px 0px 0px 2px #242424;
    background-color: transparent;
}

.purchase--btn {
    height: 55px;
    background: #F2F2F2;
    border-radius: 11px;
    border: 0;
    outline: none;
    color: #ffffff;
    font-size: 15px;
    font-weight: 700;
    background: linear-gradient(180deg, #363636 0%, #1B1B1B 50%, #000000 100%);
    box-shadow: 0px 0px 0px 0px #FFFFFF, 0px 0px 0px 0px #000000;
    transition: all 0.3s cubic-bezier(0.15, 0.83, 0.66, 1);
}

.recharge {
    margin: auto;
    font-size: 15px;
    background: linear-gradient(180deg, #363636 0%, #1B1B1B 50%, #000000 100%);
    color: white;
    padding: 0.7em 1em;
    padding-left: 0.9em;
    display: flex;
    align-items: center;
    border: none;
    border-radius: 16px;
    overflow: hidden;
    transition: all 0.2s;
    cursor: pointer;
}

.recharge span {
    display: block;
    margin-left: 0.3em;
    transition: all 0.3s ease-in-out;
}

.recharge svg {
    display: block;
    transform-origin: center center;
    transition: transform 0.3s ease-in-out;
}

.recharge:hover .svg-wrapper {
    animation: fly-1 0.6s ease-in-out infinite alternate;
}

.recharge:hover svg {
    transform: translateX(2.3rem) rotate(45deg) scale(1.1);
}

.recharge:hover span {
    transform: translateX(5em);
}

.recharge:active {
    transform: scale(0.95);
}

@keyframes fly-1 {
    from {
        transform: translateY(0.1em);
    }

    to {
        transform: translateY(-0.1em);
    }
}




.input_field::-webkit-outer-spin-button,
.input_field::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

.instagram:checked+.radio-tile:before {
    transform: scale(1);
    opacity: 1;
    background-color: #db7021;
    border-color: #db7021;
}

.instagram:checked+.radio-tile .radio-label {
    color: #db7021;
}

.instagram:checked+.radio-tile {
    background-color: #db7021;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    border-color: #fff;
}

/*  Twitter */
.twitter:checked+.radio-tile {
    border-color: #00bbff;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    color: #00bbff;
}

.twitter:checked+.radio-tile:before {
    transform: scale(1);
    opacity: 1;
    background-color: #00bbff;
    border-color: #00bbff;
}

.twitter:checked+.radio-tile .radio-icon svg {
    fill: #fff;
}

.twitter:checked+.radio-tile .radio-label {
    color: #00bbff;
}

.twitter:checked+.radio-tile {
    background-color: #00bbff;
    border-color: #fff;
}

.radio-tile {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 55px;
    background: #F2F2F2;
    border-radius: 11px;
    padding: 0;
    border: 0;
    outline: none;
    transition: 0.15s ease;
    cursor: pointer;
    position: relative;
}

.instagram:hover {
    border-color: #db7021;
}

.twitter:hover {
    border-color: #00bbff;
}


.radio-tile:hover:before {
    transform: scale(1);
    opacity: 1;
}

.radio-icon svg {
    width: 2rem;
    height: 2rem;
}

.twitter {
    fill: #00bbff;
}

.radio-label {
    color: #707070;
    transition: 0.375s ease;
    text-align: center;
    font-size: 13px;
}

.radio-input {
    clip: rect(0 0 0 0);
    -webkit-clip-path: inset(100%);
    clip-path: inset(100%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
}
</style>
  