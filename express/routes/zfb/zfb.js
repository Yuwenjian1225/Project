// 文件：zfb/zfb.js  
// 初始版本由余文建在 2023-04-25 创建，该项功能为调用支付宝沙盒

const AlipaySdk = require('alipay-sdk').default;
const alipaySdk = new AlipaySdk({
    // appId
    appId: '9021000135652492',
    // 签名算法
    signType: 'RSA2',
    // 支付宝网关地址
    gateway: 'https://openapi-sandbox.dl.alipaydev.com/gateway.do',
    // 支付宝公钥
    alipayPublicKey: 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAmw0BwbdzrjnFI7hibZ0Xs2pNMe7OqsjkdQXNteSckUiVHhFVR41E/qtGhAdSuKv8MVCOpOLb9vlkow7JsHIrqVJkUlYQWKSVKEh5W8tJ4hLX+zCnrU2ZlDQJVn8RTFbLk5byDOoxDkIV1aDsA0zamnixgJcDyrOuk/3XQD+2lez1w2VaZ85ttP/FhC9K9zTlQ1v4mx5+SgZICmV2n96btB6uwTB5rs19mJVLn6Z7eRUwvV2x8vbP8BXWy53YnHK0XSs4iS498G94s5ApkEnL2+oqyReo69VGdTpdyKsiXm7ujlePc5UiVSjKQ5LYeOJRpdXS269pt/xhgEwgesrwhQIDAQAB',
    // 应用私钥
    privateKey: 'MIIEogIBAAKCAQEAis65jYrpx3pcxd9M+KTTwkNhshQLGiYMSdy8M9w1VRsOqJGSt9NF5+akuobfRUEr5kGgFWhIttenWPDJgYlQOOsYHdoIs3DXZmIdDD0BCQTFZkqMpPk9PYlEJ+7bBtmTTWYGmpcmLAqpdfZY7mSnfS3+pbyFlFl3l1C3EzFhh6kqGFsKs6NDofnrO6X0LvEX9oMsieGgc7QBh1ab7rMzq8BoBacvCrYW7n06Z4Yez42gFFcPnkVlIWXmu9rbAOHTY6P4CuoQeMUjPHeV2tLl8W6+maV1D7B+0s2FlPFL8rHPHp3qHCBd9lmU+NVrJdBq1G9qwHdc7WnRoi9JKD2jYwIDAQABAoIBACt1lATr9Ev/VKKjSm8i9CYDgMgHnH5AYWKS2N4H2S7fPNSsV1p0rJNx1CuOZMNDJ2J9M4jgULvmgz/Gi+ChxFs9yBw4krbT4qzslRmq0/Ml6kQfnS9d1b25h3xVPYBEiOkXw4ONRWdOo0YKrkddfk8kInFzuAL9jAL1Q4yfzmBxsTwZM5I47J/6b34IGKBptCqjOYCiIPD0Qojhr6VUoZFxFi8I3XocOREICOQNjPJ1/uS2TfH4mT2IBMU5t4IbY0onwZd98QxPJ/4PPTfMH6Ms2xwx01ypows6AUc+FvzAvDfxIy4SQjVXO27IdzHgpUYb865QphzEo0/nJnp6lrECgYEAx/p6UZeTARLvdxWZuIj5V+EUjL5xYqGTyGyXA7RmIQZysiEyLK7jt/Ree8LqHCzPYGNbzqO8LOgPkQJkITpoSXXiAaLEAUvV4VR5GktX8P4OLmei6FdQajzsCfpcyQX1yR+78Wbh2hK5GSHQXjKnXc5JDV3gGo7VY9ny/1p35ssCgYEAsbFaoe+av4jTsIpP3vfripTSeEWPfL/7n8g9gsGD3qgD5K1C9euQdPHME/3r27WuzH1HBrxyjDMu5/r7oD0WcpECOxXfqV3DmWyjejzO92ef6f+rS+AGWt2n76RrVkMC2fViQ2As+4qUFc8cbmwk+1LDfkG2O4CX2KjNVRMQiskCgYB+UjSuEackiIeHm7dsn+mRn3ZRqYMKILKvahjCmFPjDKWq69k77IWgD9cXKnqjrZKZemnlz/vwCe67VN1XOAPkU3ieO+jAQN0r5yZQe8NjUbg3i/OV/IGpei5H50RxHzixAUDBLpIAJM+Tlo5+0lRypvnyXZhQbmVRG72pm8YdnQKBgEndasqEGrTiAPWTGU6biotKAA/FAred6tBp4b/4B4RIHY4yw/IMYTlrxiTNWf00EhypOxw+u/Mx157RQ0ZB/pHTW7UKC7aQ5p1hfrdyjapkpiIUiLV6w8mD+Kpyk7gBFS9bhORzF1/dJF/If44bYGgk6GUUldc4RmbnDKv/x9GZAoGAIavcyMx+Q0mkU2p6sjTTqEnEtwWPRbTgC4/B8yEKWR9a3MEh/ZcvslMtwlyN1bQxU7P3Qd1kObXML9OKDzhDBB1/KLq9IKgYr6uflDfy2CSYn8hZA+TN3ZrzCkMZha20acQeHWy9CotI/OWRGMYW+s8h0619i/r+lKwWIApcNno='
})
 
//查询订单信息
async function queryOrderStatus(orderId) {  
    try {  
      const result = await alipaySdk.execute('alipay.trade.query', {  
        out_trade_no: orderId, // 订单号  
      });  
      console.log(result); // 打印查询结果，其中包含支付状态信息  
      return result;  
    } catch (error) {  
      console.error('查询支付状态失败：', error);  
      throw error;  
    }  
  }

module.exports = alipaySdk;