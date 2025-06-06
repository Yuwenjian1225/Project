//管理员路由
import rootApi from '../request'


const getMoney = data => {
    return rootApi.get({
        url: 'api/root/getMoney',
        data
    })
}

const addCard = data => {
    return rootApi.post({
        url: 'api/root/addCard',
        data
    })
}


const orderList = data => {
    return rootApi.get({
        url: 'api/root/orderList',
        data
    })
}

const userInformation = data => {
    return rootApi.get({
        url: 'api/root/userInformation',
        data
    })
}

const rootLogin = data => {
    return rootApi.post({
        url: 'api/root/rootLogin',
        data
    })
}

const updatePermit = data => {
    return rootApi.post({
        url: 'api/root/updatePermit',
        data
    })
}

const searchOwner = data => {
    return rootApi.post({
        url: 'api/root/searchOwner',
        data
    })
}
export default {
    getMoney, addCard, orderList, userInformation,rootLogin,updatePermit,searchOwner
}