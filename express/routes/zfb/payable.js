// 文件：zfb/payable.js  
// 初始版本由余文建在 2023-04-25 创建，该项功能为调用支付宝沙盒

var express = require('express');
var router = express.Router();
const axios = require('axios')
// 引入支付宝配置信息
const alipaySdk = require('./zfb')
const AlipayFromData = require('alipay-sdk/lib/form').default;
let name = '';
let money = null;
let account = '';

//触发支付宝沙盒支付
router.post('/', (req, res) => {
    // 前端给后端的数据（订单号，金额，商品描述等信息）
    let orderId = new Date();
    let orderMoney = req.body.price;
    let orderTitle = req.body.name;
    let orderInfo = req.body.account;
    name = req.body.name;
    money = req.body.price
    account = req.body.account;
    // 对接支付宝
    const formData = new AlipayFromData()
    formData.setMethod('get')
    // 付款成功打开的链接
    formData.addField('returnUrl', `http://localhost:8080/#/payLoading`);
    formData.addField('bizContent', {
        // 传递的订单号
        outTradeNo: orderId,
        productCode: 'FAST_INSTANT_TRADE_PAY',
        // 金额
        total_amount: orderMoney,
        subject: orderTitle,
        body: orderInfo,
    });


    const result = alipaySdk.exec(
        'alipay.trade.page.pay',
        {},
        { formData: formData },
    )
    result.then((resp) => {
        res.send({
            success: '跳转支付',
            code: 200,
            result: resp
        });
    });

})


//触发支付宝沙盒支付
router.post('/market', (req, res) => {
    // 前端给后端的数据（订单号，金额，商品描述等信息）
    let orderId = new Date();
    let orderMoney = req.body.price;
    let orderTitle = req.body.card_name;
    let orderInfo = req.body.card_name;
    name = req.body.card_name;
    // 对接支付宝
    const formData = new AlipayFromData()
    formData.setMethod('get')
    // 付款成功打开的链接
    formData.addField('returnUrl', `http://localhost:8080/#/market`);
    formData.addField('bizContent', {
        // 传递的订单号
        outTradeNo: orderId,
        productCode: 'FAST_INSTANT_TRADE_PAY',
        // 金额
        total_amount: orderMoney,
        subject: orderTitle,
        body: orderInfo,
    });

    const result = alipaySdk.exec(
        'alipay.trade.page.pay',
        {},
        { formData: formData },
    );
    result.then((resp) => {
        res.send({
            success: '跳转支付成功',
            code: 200,
            result: resp
        });
    });
})

//获取支付状态
router.post('/orderStatu', (req, res) => {
    let out_trade_no = req.body.out_trade_no;
    let trade_no = req.body.trade_no;
    // 对接支付宝
    const formData = new AlipayFromData()
    formData.setMethod('get')
    formData.addField('bizContent', {
        out_trade_no,
        trade_no
    });

    const result = alipaySdk.exec(
        'alipay.trade.query',
        {},
        { formData: formData },
    );

    result.then((resData) => {
        axios({
            url: resData,
            method: 'get'
        }).then(data => {
            let r = data.data.alipay_trade_query_response;
            if (r.code === '10000') {
                switch (r.trade_status) {
                    case 'WAIT_BUYER_PAY':
                        res.send({
                            success: true,
                            code: 400,
                            msg: '支付宝有交易记录，没付款'
                        })
                        break;
                    case 'TRADE_FINISHED':
                        res.send({
                            success: true,
                            code: 200,
                            msg: '交易完成，不能退款',
                        })
                        break;
                    case 'TRADE_SUCCESS':
                        res.send({
                            success: true,
                            code: 200,
                            msg: '成功交易',
                            name: name,
                            trade_no: r.trade_no,
                            num: money,
                            for: account,
                        })
                        break;
                    case 'TRADE_CLOSED':
                        res.send({
                            success: true,
                            code: 400,
                            msg: '交易关闭，没有支付成功'
                        })
                        break;
                }
            } else if (r.code === '40004') {
                res.json('交易不存在')
            }
        }).catch(err => {
            res.json({
                msg: '查询失败',
                err
            })
        })
    });
})

module.exports = router;