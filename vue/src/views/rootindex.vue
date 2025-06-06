 <!-- 管理员首页 -->
<template> 
    <div class="all">
        <rootHeader></rootHeader>
        <page></page>
        <router-view></router-view>
    </div>
</template> 

<script setup>
import rootHeader from "@/components/rootHeader.vue"
import page from "@/components/page.vue"

</script> 
<style  scoped>
.all{
  background: url('../assets/picture/123.png') no-repeat fixed center;
  background-size: cover;
}
.rootbody {
  display: inline-flex;
  width: 85%;
  height: 93%;
  position: absolute;
}
</style>

   

    