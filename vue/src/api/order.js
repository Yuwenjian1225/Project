// 文件：order.js  
// 初始版本由余文建在 2023-05-20 创建，该项功能为封装订单路由

import order from './request'

const getOrder = data => {
    return order.post({
        url: 'api/order/getOrder',
        data
    })
}
const getRid = data => {
    return order.post({
        url: 'api/order/getRid',
        data
    })
}

const addOrder = data => {
    return order.post({
        url: 'api/order/addOrder',
        data
    })
}




const addRecharge = data => {
    return order.post({
        url: 'api/order/addRecharge',
        data
    })
}




export default {
    getOrder, addOrder,getRid, addRecharge
}