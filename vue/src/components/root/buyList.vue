<template>
  <div class="rootbody">
    <div class="table" style="margin:auto;margin-top: 8px;margin-left:10px;width: 100%">
      <el-table :data="users" max-height="600" border style="width: 100%;border: 1px solid #1d2125">
        <el-table-column prop="SSID" label="订单ID" align="center" sortable width="310" />
        <el-table-column prop="name" label="所购藏品" align="center" width="120" />
        <el-table-column prop="hash" label="藏品哈希" align="center" width="380" />
        <el-table-column prop="buyer" label="买家" align="center" width="120" />
        <el-table-column prop="seller" label="卖家" align="center" width="120" />
        <el-table-column prop="money" label="订单金额"  width="120" />
        <el-table-column prop="date" label="订单创建时间" />
      </el-table>
    </div>
  </div>
</template>
<script>
import api from '@/api/root/rootApi.js'
export default {
  name: "rootindex",
  data() {
    return {
      users: []
    }
  },
  mounted() {
    api.orderList().then(res => {
        this.users = res.data
      })
  },
  methods: {
    deleteRow(row) {
      console.log(row)
    }
  }
}
</script>

<style lang="scss" scoped>
:deep(.el-table),
:deep(.el-table__expanded-cell) {
  background-color: transparent;
  color: #93dcfe;
  font-size: 18px;
}
:deep(.el-table tr th){
  color: #1196db;

}
:deep(.el-table th),
:deep(.el-table tr),
:deep(.el-table td) {
  background-color: rgba(0,0,0,0.2);
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
  background-color: rgba(0,0,0,0);
}
 
 
</style>

   

    