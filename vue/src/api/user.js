// 文件：user.js  
// 初始版本由余文建在 2023-03-21 创建，该项功能为封装用户请求

import login from './request'

const loginApi = data => {
    return login.post({
        url:'api/login',
        data
    })
}

const registerApi = data => {
    return login.post({
        url:'api/register',
        data
    })
}

const information = data => {
    return login.post({
        url:'api/information',
        data
    })
}


const editForm = data => {
    return login.post({
        url:'api/information/editForm',
        data
    })
}


const validate = data => {
    return login.post({
        url:'api/information/validate',
        data
    })
}

const addBalance = data => {
    return login.post({
        url: 'api/information/addBalance',
        data
    })
}

const reduceBalance = data => {
    return login.post({
        url: 'api/information/reduceBalance',
        data
    })
}

const income = data => {
    return login.post({
        url: 'api/information/income',
        data
    })
}
const getSession = data => {
    return login.get({
        url:'api/information',
        data
    })
}

const userTexture = data => {
    return login.post({
        url:'api/information/userTexture',
        data
    })
}
const getTexture = data => {
    return login.post({
        url:'api/information/getTexture',
        data
    })
}

export default {
    loginApi,registerApi,information,editForm,validate,
    addBalance,reduceBalance,income,
    getSession,userTexture,getTexture
}