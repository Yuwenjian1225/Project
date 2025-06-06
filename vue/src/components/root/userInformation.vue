<template>
  <div class="rootbody">
    <div class="table" style="margin: 8px auto;margin-top: 8px;">
      <el-table :data="users" max-height="466" border style="width: 100%;">
        <el-table-column prop="id" label="ID" sortable align="center" width="100" />
        <el-table-column prop="account" label="登录账号" width="200" />
        <el-table-column prop="name" label="昵称" width="250" />
        <el-table-column prop="address" label="钱包地址" sortable width="500" />
        <el-table-column label="操作" align="center" width="200">
          <template v-slot="scope">
            <el-button v-model="scope.row" v-if="scope.row.permit == 1" type="danger" @click="updateRow(scope.row)">封禁该账号
            </el-button>
            <el-button v-model="scope.row" v-if="scope.row.permit == 0" type="success" @click="updateRow(scope.row)">解禁该账号
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <el-dialog v-model="updatePermit" class="dialog" width="360px" top="25vh" destroy-on-close :show-close="false"
      :lock-scroll="false">
      <div class="card">
        <svg t="1713427957719" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
          p-id="5109" width="50" height="50">
          <path
            d="M512 298.666667a42.666667 42.666667 0 0 1 42.666667 42.666666v170.666667a42.666667 42.666667 0 0 1-85.333334 0V341.333333a42.666667 42.666667 0 0 1 42.666667-42.666666z m-30.165333 311.168a42.624 42.624 0 1 1 60.330666 60.330666 42.624 42.624 0 1 1-60.330666-60.330666zM512 128c-212.096 0-384 171.904-384 384s171.904 384 384 384 384-171.904 384-384-171.904-384-384-384z m0-85.333333c259.2 0 469.333333 210.133333 469.333333 469.333333s-210.133333 469.333333-469.333333 469.333333S42.666667 771.2 42.666667 512 252.8 42.666667 512 42.666667z"
            fill="#2D8FE8" p-id="5110"></path>
        </svg>
        <p class="cookieHeading">操作提示</p>
        <p class="cookieDescription">对用户的账号进行操作往往会造成一定的损失<br>你确定要这么做吗</p>
        <div class="buttonContainer">
          <button class="acceptButton" @click="submit()">确定</button>
          <button class="declineButton" @click="updatePermit = false">取消</button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import api from '@/api/root/rootApi.js'
import { ElMessage } from 'element-plus';
export default {
  name: "rootindex",
  data() {
    return {
      users: [],
      updatePermit: false,
      updatePermitId: null,
      Row: ''
    }
  },
  mounted() {
    api.userInformation().then(res => {
      this.users = res.data
    }).catch(error => {
      console.log(error)
    })
  },
  methods: {
    updateRow(row) {
      this.updatePermit = true
      this.Row = row
      this.updatePermitId = row.id
    },
    submit() {
      api.updatePermit({ id: this.updatePermitId }).then(res => {
        if (res.data.affectedRows == 1) {
          this.Row.permit = 1 - this.Row.permit
          ElMessage({
            message: '操作成功',
            type: 'success',
            duration: 1000
          })
          this.updatePermit = false
        }
      })
    },
  }
}

</script>


<style>
.dialog {
  --el-dialog-bg-color: unset;
  --el-dialog-box-shadow: unset;
  --el-dialog-title-font-size: unset;
  padding: unset;
}

.dialog .el-dialog__body {
  padding: unset;
}
</style>
<style lang="scss" scoped>
.card {
  width: 300px;
  height: 220px;
  background-color: rgb(255, 255, 255);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 30px;
  gap: 13px;
  position: relative;
  overflow: hidden;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.062);
}

#cookieSvg {
  width: 50px;
}

#cookieSvg g path {
  fill: rgb(97, 81, 81);
}

.cookieHeading {
  font-size: 1.2em;
  font-weight: 800;
  color: rgb(26, 26, 26);
}

.cookieDescription {
  text-align: center;
  font-size: 0.9em;
  font-weight: 600;
  color: rgb(99, 99, 99);
}

.buttonContainer {
  display: flex;
  gap: 20px;
  flex-direction: row;
}

.acceptButton {
  width: 80px;
  height: 30px;
  background-color: #7b57ff;
  transition-duration: .2s;
  border: none;
  color: rgb(241, 241, 241);
  cursor: pointer;
  font-weight: 600;
  border-radius: 20px;
  box-shadow: 0 4px 6px -1px #977ef3, 0 2px 4px -1px #977ef3;
  transition: all .6s ease;
}

.declineButton {
  width: 80px;
  height: 30px;
  background-color: #dadada;
  transition-duration: .2s;
  color: rgb(46, 46, 46);
  border: none;
  font-weight: 600;
  border-radius: 20px;
  box-shadow: 0 4px 6px -1px #bebdbd, 0 2px 4px -1px #bebdbd;
  transition: all .6s ease;
}

.declineButton:hover {
  background-color: #ebebeb;
  box-shadow: 0 10px 15px -3px #bebdbd, 0 4px 6px -2px #bebdbd;
  transition-duration: .2s;
}

.acceptButton:hover {
  background-color: #9173ff;
  box-shadow: 0 10px 15px -3px #977ef3, 0 4px 6px -2px #977ef3;
  transition-duration: .2s;
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

:deep(.el-table tbody tr:hover>td) {
  background: #3f3f3f !important;
}


:deep(.el-table__header-wrapper) {
  background-color: rgba(0, 0, 0, 0);
}
</style>

   

    