// 文件：card.js  
// 初始版本由余文建在 2023-04-20 创建，该项功能为封装藏品路由

import card from './request'

const getCardList = data => {
    return card.get({
        url: 'api/card/getCardList',
        data
    })
}

const getAllCard = data => {
    return card.get({
        url: 'api/card/getAllCard',
        data
    })
}

const getCardByType = data => {
    return card.post({
        url: 'api/card/getCardByType',
        data
    })
}

const getMyCardList = data => {
    return card.post({
        url: 'api/card/getMyCardList',
        data
    })
}

const getCard = data => {
    return card.post({
        url: 'api/card/getCard?:name',
        data
    })
}


const getMyCard = data => {
    return card.post({
        url: 'api/card/getMyCard?:name',
        data
    })
}

const saleCard = data => {
    return card.post({
        url: 'api/card/saleCard',
        data
    })
}

const getMarket = data => {
    return card.get({
        url: 'api/card/getMarket',
        data
    })
}

const searchMarket = data => {
    return card.post({
        url: 'api/card/searchMarket',
        data
    })
}



const soldCard = data => {
    return card.post({
        url: 'api/card/soldCard',
        data
    })
}



const addHashCard = data => {
    return card.post({
        url: 'api/card/addHashCard',
        data
    })
}

const updateHash = data => {
    return card.post({
        url: 'api/card/updateHash',
        data
    })
}

const addOwner = data => {
    return card.post({
        url: 'api/card/addOwner',
        data
    })
}

const cardStatus = data =>{
    return card.post({
        url: 'api/card/cardStatus',
        data
    })
}



const changePrice = data => {
    return card.post({
        url: 'api/card/changePrice',
        data
    })
}


const transOwner = data => {
    return card.post({
        url: 'api/card/transOwner',
        data
    })
}


const delist = data => {
    return card.post({
        url: 'api/card/delist',
        data
    })
}

export default {
    getCardList, getAllCard, getCardByType, getMyCardList, getCard, getMarket, getMyCard,
    saleCard, searchMarket, soldCard, addHashCard, updateHash,addOwner, changePrice, 
    transOwner,delist,cardStatus,
}