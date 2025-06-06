// 文件：notify.js  
// 初始版本由余文建在 2023-05-22 创建，该项功能为封装消息路由

import notify from './request'

const getNotify = data => {
    return notify.post({
        url: 'api/notify/getNotify',
        data
    })
}

const addNotify = data => {
    return notify.post({
        url: 'api/notify/addNotify',
        data
    })
}

const notifyStatus = data => {
    return notify.post({
        url: 'api/notify/notifyStatus',
        data
    })
}

export default {
    getNotify,addNotify,notifyStatus
}