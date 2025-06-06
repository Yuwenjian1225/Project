<template>
  <div class="rootbody2">
    <div class="addForm">
      <el-form ref="form" style="max-width: 600px" :model="this.addForm" label-width="auto"
        :label-position="labelPosition" :size="size">
        <el-form-item label="藏品名字">
          <el-input v-model="this.addForm.name" maxlength="10" />
        </el-form-item>
        <el-form-item label="藏品铭片">
          <el-input v-model="this.addForm.alias" maxlength="10" />
        </el-form-item>
        <el-form-item label="藏品类型">
          <el-select v-model="this.addForm.type" placeholder="请选择发布的藏品类型">
            <el-option label="头部" value="1" />
            <el-option label="面部" value="2" />
            <el-option label="身体" value="3" />
            <el-option label="腿部" value="4" />
            <el-option label="鞋子" value="5" />
          </el-select>
        </el-form-item>

        <el-form-item label="发布数量">
          <el-input-number v-model="this.addForm.num" :min="1" :max="10000" controls-position="right" size="large" />
        </el-form-item>

        <el-form-item label="发布价格">
          <el-input-number v-model="this.addForm.price" :min="1" :max="10000" controls-position="right" size="large" />
        </el-form-item>
        <div style="display: flex;">
          <el-form-item label="藏品图" prop="driverPhoto">
            <el-upload class="avatar-uploader" action="" :on-change="getFile" :on-remove="handlePicRemove"
              :on-preview="handlePicPreview" :limit="1" list-type="picture-card" :file-list="filelist"
              :auto-upload="false" accept="image/png, image/gif, image/jpg, image/jpeg">
              <el-icon style="font-size: 25px;">
                <Plus />
              </el-icon>
            </el-upload>
            <el-dialog v-model="dialogVisible" title="预览" destroy-on-close>
              <img :src="dialogImageUr" style="display: block;width: 100%;height:100%" />
            </el-dialog>
          </el-form-item>


          <el-form-item label="材质图" prop="texture">
            <el-upload class="avatar-uploader" action="" :on-change="getFile2" :on-remove="handlePicRemove"
              :on-preview="handlePicPreview" :limit="1" list-type="picture-card" :file-list="filelist"
              :auto-upload="false" accept="image/png, image/gif, image/jpg, image/jpeg">
              <el-icon style="font-size: 25px;">
                <Plus />
              </el-icon>
            </el-upload>
            <el-dialog v-model="dialogVisible" title="预览" destroy-on-close>
              <img :src="dialogImageUr" style="display: block;width: 100%;height:100%" />
            </el-dialog>
          </el-form-item>
        </div>

        <el-form-item label="藏品介绍">
          <el-input type="textarea" :rows="5" v-model="this.addForm.content" />
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit" style="position: absolute;right: 0px;margin-top: 2.5rem;">
            上传
          </el-button>
        </el-form-item>
      </el-form>
    </div>

  </div>
</template> 
<script>
import { ElMessage } from 'element-plus'
import { ElNotification } from 'element-plus';
import api from '@/api/root/rootApi.js'
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
  data() {
    return {
      addForm: {
        name: '',
        alias: '',
        type: '',
        num: null,
        price: null,
        content: '',
        url: '',
        material: ''
      },
      dialogVisible: false,
      dialogImageUr: "",
      formData: new FormData(),
      textureData: new FormData()
    }
  },
  methods: {
    async onSubmit() {
      try {
        //发送 formData 
        const response1 = await axios.post('http://localhost:3000/api/root/update', this.formData);
        console.log(response1.data.file);
        this.addForm.url = response1.data.file;
        //发送 textureData 
        const response2 = await axios.post('http://localhost:3000/api/root/update2', this.textureData);
        const timestamp = Date.now();
        //调用合约方法 poLanghash 获取 cardHash
        const cardHash = await contract.poLanghash(this.addForm.alias);
        //调用合约方法 updateCard 并等待交易完成
        const addCardInfo = await contract.updateCard(cardHash, "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266", timestamp);
        const receipt = await addCardInfo.wait();
        console.log('交易哈希:', receipt.transactionHash);
        // 更新 addForm.material
        this.addForm.material = response2.data.file;
        // 调用 api.addCard 并处理结果
        const result = await api.addCard(this.addForm);
        if (result.data.affectedRows === 1) {
          // ElMessage.success({
          //   message: '发布成功<br>交易哈希：' + receipt.transactionHash + '<br>时间戳:' + timestamp,
          //   dangerouslyUseHTMLString: true,
          //   duration: 2000
          // });
          ElNotification({
            title: '发布成功',
            dangerouslyUseHTMLString: true,
            message: `
                  <div style="
                    line-height: 1.8; 
                    max-width: 400px;
                    word-break: break-all;
                    white-space: normal;
                    font-family: monospace;
                  ">
                    <div><b>交易哈希:</b><br>${receipt.transactionHash}</div>
                    <div style="margin-top: 8px;"><b>藏品Cid:</b> ${response1.data.file}</div>
                    <div style="margin-top: 8px;"><b>时间戳:</b> ${timestamp}</div>
                  </div>
                `,
            type: 'success',
            duration: 0,
          });
        } else {
          this.$message.error('error');
        }
      } catch (error) {
        this.$message.error('操作失败，请检查网络或输入数据');
      }
    },
    getFile(file) {
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (isLt2M) {
        this.formData.append('image', file.raw);
      } else {
        this.$message.error("上传图片大小不能超过 2MB!");
      }
    },
    getFile2(file) {
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (isLt2M) {
        this.textureData.append('texture', file.raw);
      } else {
        this.$message.error("上传图片大小不能超过 2MB!");
      }
    },
    //删除
    handlePicRemove(file, fileList) {
      this.hideUploadEdit = fileList.length >= 1;
    },
    //预览
    handlePicPreview(file) {
      console.log("file", file.url);
      this.dialogImageUr = file.url;
      this.dialogVisible = true;
    },



  }
}
</script> 
<script setup>
import { Plus } from '@element-plus/icons-vue'
import axios from 'axios';


</script> 


<style lang="scss" scoped>
.avatar-uploader {
  width: 150px;
  height: 150px !important;
  overflow: hidden;
}

:deep(.hide_box .el-upload--picture-card) {
  display: none;
}

:deep(.el-form-item__label),
:deep(.el-form-item__label-wrap label) {
  color: rgb(0, 0, 0);
}

.rootbody2 {
  display: inline-flex;
  height: 99%;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.82);

  @media only screen and (max-width: 1688px) {
    width: 87.3%;
  }

  @media only screen and (min-width: 1688px) and (max-width:1900px) {
    width: 88.6%;
  }

  @media only screen and (min-width: 1900px) and (max-width:2027px) {
    width: 89.9%;
  }

  @media only screen and (min-width: 2027px) and (max-width:2300px) {
    width: 90.5%;
  }

  @media only screen and (min-width: 2300px)and (max-width:3000px) {
    width: 91.6%;
  }

  @media only screen and (min-width: 3000px) {
    width: 100%;
  }
}

.addForm {
  width: 620px;
  height: 95%;
  margin: 0px auto;
  padding: 1rem;

}
</style>

   

    