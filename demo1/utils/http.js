import {config} from '../config.js'

const tips = {
    1:'抱歉,出现一个错误',
    1000:	'输入参数错误',
    1001: '输入的json格式不正确',
    1002: '找不到资源',
    1003: '未知错误',
    1004: '禁止访问',
    1005: '不正确的开发者key',
    1006: '服务器内部错误',
    2000: '你已经点过赞了',
    2001: '你还没点过赞',
    3000: '该期内容不存在'
}

class HTTP {
    constructor(){
        this.baseUrl = config.api_base_link
    }
    request({url,data={},method='GET'}){
        return new Promise((resolve,reject)=>{
            this._request(url,resolve,reject,data,method)
        })
    }
    _request(url,resolve,reject,data={},method='GET'){
        wx.request({
            url:this.baseUrl + url,
            method:method,
            data:data,
            header:{
                'content-type':'application/json',
                'appkey':config.appkey
            },
            success:(res) => {
                const code = res.statusCode.toString()
                if(code.startsWith('2')){
                    resolve(res.data)
                }else{
                    reject()
                    let err_code = res.data.erorr_code
                    this._show_error(err_code)
                }
            },
            fail:(err) => {
                reject()
                this._show_error()
            }
        })
    }
    _show_error(err_code = 1){
        const tip = tips[err_code]
        wx.showToast({
            title: tip ? tip : tips[1] ,
            icon: 'none',
            duration: 2000
        })
    }
}

export {
    HTTP
}