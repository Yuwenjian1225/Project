import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import mitt from "mitt";
import './assets/fonts/font.css'
import { defineComponent, onMounted, ref } from 'vue'; 

const app = createApp(App);
app.provide('bus', new mitt())

app.use(router).use(ElementPlus).mount("#app");
