// 文件：config.js  
// 初始版本由余文建在 2023-03-20 创建，该项功能为封装https请求

import axios from 'axios'
import { ElMessage } from 'element-plus'

//创建axios实例
const Service = axios.create({
    // 设置baseURL地址
    baseURL: 'http://localhost:3000',
    //定义统一的请求头
    headers: {
        'Content-Type': "application/x-www-form-urlencoded;charset=UTF-8" 
    },
    withCredentials: true,
    //配置请求超时时间
    timeout: 10000
})


//响应拦截器
Service.interceptors.response.use((response) => {
    //获取接口返回结果
    const res = response
    if (res.status === 200) {
        return res
    }
    else {
        ElMessage.error(res.message || '网络异常')
        return res
    }
})

export default Service