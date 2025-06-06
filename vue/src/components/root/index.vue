<template>
  <div class="rootbody">
    <div class="ahead">
      <el-card style="width: 320px;background-color:white" shadow="always" class="about">
        <div class="card-header">
          <span>欢迎你管理员</span>
        </div>
        <img src="../../assets/picture/root.jpg" alt="" style="width: 72px;border-radius: 50%;">
        <div style="font-size: 17px;text-align: right;font-weight: 700;">祝你开心每一天！</div>
      </el-card>

      <el-card style="width: 320px;background-color:white" shadow="always" class="about">
        <div class="card-header">
          <span>关于项目</span>
        </div>
        <p>高性能 / 精致 / 优雅。基于Vue3 + Element-Plus 的数字个性化平台，破浪--让前行无畏！如果喜欢就点个星星支持一下。</p>
        <el-rate v-model="value" size="small" style="margin-top: 10px;" />
      </el-card>
      <div class="draggable-box">
        <div class="widgets-item" data-draggable="true">
          <div class="el-card is-hover-shadow item-background">
            <div class="card">
              <p class="time-text">
                <span>{{ time }}</span>
                <span class="time-sub-text">{{M}}</span>
              </p>
              <p class="day-text">{{ date }}</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" stroke-width="0"
                fill="currentColor" stroke="currentColor" class="moon">
                <path
                  d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z">
                </path>
                <path
                  d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z">
                </path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="a"  style="height: 800px;"></div>
    <div class="echart">
      <Echarts></Echarts>
    </div>
  </div>
</template> 
<script>
export default {
  data() {
    return {
      date: null,
      time: null,
      clock: null,
      M:null
    };
  },
  mounted() {
    this.clock = setInterval(() => {
      this.date = this.getToday().date;
      this.time = this.getToday().time;
      this.M = this.getToday().M;
    }, 0);
  },
  methods: {
    getToday() {
      var datas = new Date();
      var on1 = "/";
      var on2 = ":";
      var onY = datas.getFullYear(); //年
      var onM = datas.getMonth() + 1; //月
      var onD = datas.getDate(); //日
      var onS = datas.getHours(); //时
      var onF = datas.getMinutes(); //分
      var onN = datas.getSeconds(); //秒
      if (onM >= 1 && onM <= 9) {
        onM = "0" + onM;
      }
      if (onD >= 1 && onD <= 9) {
        onD = "0" + onD;
      }
      if (onS >= 0 && onS <= 9) {
        onS = "0" + onS;
      }
      if (onF >= 0 && onF <= 9) {
        onF = "0" + onF;
      }
      if (onN >= 0 && onN <= 9) {
        onN = "0" + onN;
      }
      if(onS < 12){
        this.M = "AM"
      }else{
        this.M = "PM"
      }
      return {
        date: onY + on1 + onM + on1 + onD,
        time: onS + on2 + onF + on2 + onN,

      };
    }

  },
  beforeDestroy() {
    //清除定时器
    clearInterval(this.clock);
    this.clock = null;
  }
}
</script> 
<script setup>
import Echarts from "./echarts.vue"
import { ref } from 'vue'

const value = ref(null)

</script> 
<style  scoped>
.card-header {
  font-size: 17px;
  font-weight: 700;
  margin-bottom: 1rem;
}

.about {
  width: 320px;
  height: 165px;
}

.about p {
  color: #999;
  font-size: 12px;
  line-height: 1.8;
  font-family: unset;
}

.ahead {
  height: 200px;
  width: 1000px;
  display: flex;
  padding-top: 1rem;
  flex-direction: row;
  justify-content: space-around;
}

.draggable-box .el-card {
  border: 0px;
  position: absolute;
  background-color: unset;
}




.card {
  width: 280px;
  height: 125px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: rgb(0, 0, 0, 0.7) 5px 10px 50px, rgb(0, 0, 0, 0.7) -5px 0px 250px;
  display: flex;
  color: white;
  justify-content: center;
  position: relative;
  flex-direction: column;
  background: linear-gradient(to right, rgb(20, 30, 48), rgb(36, 59, 85));
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
}

.card:hover {
  box-shadow: rgb(0, 0, 0) 5px 10px 50px, rgb(0, 0, 0) -5px 0px 250px;
}

.time-text {
  font-size: 50px;
  margin-top: 0px;
  margin-left: 15px;
  font-weight: 600;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.time-sub-text {
  font-size: 15px;
  margin-left: 5px;
}

.day-text {
  font-size: 18px;
  margin-top: 0px;
  margin-left: 15px;
  font-weight: 500;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.moon {
  font-size: 20px;
  position: absolute;
  right: 15px;
  top: 15px;
  transition: all 0.3s ease-in-out;
}

.card:hover>.moon {
  font-size: 23px;
}

.echart {
  margin-left: 58px;
  position: absolute;
  top: 16rem;
  width: 76rem;
  height: 400px;
  background-color: #1d2125;
  border: 0px;
  border-radius: 10px;
}
</style>

   

    