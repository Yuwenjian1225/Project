<template>
    <el-card class="TopCard" style="height:30px">
      <!-- 小喇叭 -->
      <i class="el-icon-chat-dot-round" style="color:#606266"/>
      <div class="noticeBox" :style="'width:'+noticeWidth+'px;height:20px;position: absolute;top: 3px;display:inline-block;vertical-align:middle;'">
        <div :style="'margin-left:'+marginLeft+'px;white-space:nowrap'">
          <span class="showNotice">{{showNotice}}</span>
          <span class="notice">{{notice}}</span>
        </div>
      </div>
    </el-card>
  </template>
  
  <script>
  export default {
    name: 'Home',
    data () {
      return {
        noticeWidth: window.screen.width - 150,
        showNotice: '',
        notice: '',
        marginLeft: 1080
      }
    },
    mounted () {
      this.noticeData = ['尊敬的破浪用户们："破浪——让前行无畏"数字个性化定制平台，始终致力于为您提供最前沿、最贴心的数字服务。']
      this.noticeData.forEach((val, index) => {
        if (index === 0) {
          this.showNotice =  val
        }
      })
      setTimeout(() => {
        var oneNoticeWidth = document.getElementsByClassName('showNotice')[0].offsetWidth
        var noticeBoxWidth = document.getElementsByClassName('noticeBox')[0].offsetWidth
        if (oneNoticeWidth) {
          this.notice = this.showNotice + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'
          setTimeout(() => {
            var oneNoticeAddEmptyWidth = document.getElementsByClassName('notice')[0].offsetWidth
            this.showNotice =  this.notice
            this.timer = setInterval(() => {
              this.marginLeft -= 1
              if (this.marginLeft === (-1) * oneNoticeAddEmptyWidth) {
                this.marginLeft = 0
              }
            }, 20)
          }, 10)
        } else {
          this.marginLeft = 0
        }
      }, 10)
    },
  }
  </script>
  <style>
  .el-card{
    border:0px;
    border-radius:0px;
    background-color: rgba(0,0,0,0);
  }
  .TopCard .el-card__body{
    padding:0px 10px;
    background-color: rgba(0,0,0,0.5);
    height:30px;
    position:relative;
  }
  .showNotice,.notice{
    color:white;
    font-family: Alimama;
  }
  </style>
  