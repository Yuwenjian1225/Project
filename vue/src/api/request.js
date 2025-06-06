// 文件：request.js  
// 初始版本由余文建在 2023-03-20 创建，该项功能为封装get和post请求

import Service from './config';

//封装get请求
const get = (config) => {
    return Service({
        ...config,
        method:'get',
        params:config.data
    })
}

//封装post请求
const post = (config) => {
    return Service({
        ...config,
        method:'post',
        data:config.data
    })
}

export default{
    get,post
}