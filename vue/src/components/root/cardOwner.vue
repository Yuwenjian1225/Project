<template>
    <div class="cardOwenerBody">
        <div class="searchHead">
            <div class="searchBox">
                <input class="searchInput" v-model="this.cardHash" type="text" placeholder="请输入你想查询的藏品哈希值">
                <button class="searchButton" href="#" @click="searchOwener">
                    <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" height="20px" width="20px">
                        <path
                            d="M4 9a5 5 0 1110 0A5 5 0 014 9zm5-7a7 7 0 104.2 12.6.999.999 0 00.093.107l3 3a1 1 0 001.414-1.414l-3-3a.999.999 0 00-.107-.093A7 7 0 009 2z"
                            fill-rule="evenodd" fill="#17202A"></path>
                    </svg>
                </button>
            </div>
        </div>
        <div class="table" style="margin:auto;margin-top: 1rem;margin-left:10px;width: 100%" v-show="this.showData">
            <el-table :data="user" max-height="470" border style="width: 100%;border: 1px solid #1d2125">
                <el-table-column prop="name" label="藏品名称" align="center" width="180" />
                <el-table-column prop="ref" label="序号" align="center" width="80" />
                <el-table-column prop="username" label="所属名下" align="center" width="150" />
                <el-table-column prop="account" label="所属账号" width="200" />
                <el-table-column prop="address" label="所属地址" align="center" width="320" />
                <el-table-column prop="transHash" label="交易哈希" align="center" />
            </el-table>
        </div>


    </div>
</template>
<script>
import api from '@/api/root/rootApi.js'
import { ElMessage } from 'element-plus'

export default {
    data() {
        return {
            showData: 0,
            cardHash: '',
            user: [],
        }
    },
    methods: {
        searchOwener() {
            if (this.cardHash == '') {
                ElMessage({
                    message: '请输入藏品哈希值',
                    type: 'error',
                    duration: 500
                })
            } else {
                api.searchOwner({ hash: this.cardHash }).then(res => {
                    if (res.data.length >= 1) {
                        this.showData = 1;
                        this.user = res.data;
                    } else {
                        this.showData = 0;
                        ElMessage.warning('输入的藏品哈希有误')
                    }

                })
            }

        }
    }
}
</script>
<script setup>

</script>
  
<style lang="scss" scoped>
.cardOwenerBody {
    display: inline-flex;
    width: 86%;
    height: 93%;
    position: absolute;
    flex-direction: column;
}

.searchHead {
    display: flex;
    width: 100%;
    height: 60px;
    margin: 15px;
    align-items: flex-start;
    justify-content: space-between;

}

.searchBox {
    display: flex;
    width: 688px;
    height: 60px;
    margin: auto;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    background: #2f3640;
    border-radius: 50px;
    position: relative;
}

.searchInput {
    width: 88%;
    border: none;
    background: none;
    outline: none;
    color: white;
    font-size: 15px;
    padding: 22px 52px 22px 22px;
}

.searchButton {
    color: white;
    position: absolute;
    right: 8px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--gradient-2, linear-gradient(90deg, #2AF598 0%, #009EFD 100%));
    border: 0;
    display: inline-block;
    transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
}

button:hover {
    color: #fff;
    background-color: #1A1A1A;
    box-shadow: rgba(0, 0, 0, 0.5) 0 10px 20px;
    transform: translateY(-3px);
}

button:active {
    box-shadow: none;
    transform: translateY(0);
}

:deep(.el-table),
:deep(.el-table__expanded-cell) {
    background-color: transparent;
    color: #93dcfe;
    font-size: 18px;
}

:deep(.el-table tr th) {
    color: #1196db;

}

:deep(.el-table th),
:deep(.el-table tr),
:deep(.el-table td) {
    background-color: rgba(0, 0, 0, 0.2);
    border: 0px;
    color: white;
    font-size: 18px;
    height: 5px;
    font-family: unset;
    font-weight: Normal;
}

.el-table::before {
    height: 0px;
}

:deep(.el-table__body tr),
:deep(.el-table__body td) {
    padding: 0;
    height: 40px;
}

:deep(.el-table tbody tr:hover > td) {
    background: #3f3f3f !important;
}


:deep(.el-table__header-wrapper) {
    background-color: rgba(0, 0, 0, 0);
}
</style>
  
     
  
      