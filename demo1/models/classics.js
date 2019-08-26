import {HTTP} from '../utils/http.js'

class ClassicModel extends HTTP {
    constructor(){
        super()
    }

    async getLatest(){
        let result = await this.request({
            url: 'classic/latest'
        })
        this._setLatestIndex(result.index)
        let key = this._getKey(result.index)
        wx.setStorageSync(key,result)
        return result 
    }

    async getClassic(index,nextOrPrevious){
        let key = nextOrPrevious == 'next' ? this._getKey(index+1) : this._getKey(index-1) 
        let classic = wx.getStorageSync(key)
        if(!classic){
            let result = await this.request({
                url:`classic/${index}/${nextOrPrevious}`
            })
            wx.setStorageSync(this._getKey(result.index),result)
            return result
        }else{
            return classic
        }
    }

    isFirst(index){
        return index == 1 ? true : false
    }

    isLatest(index){
         let latestIndex = this._getLatestIndex()
         return latestIndex == index ? true : false
    }

    _setLatestIndex(index){
        wx.setStorageSync('latest',index)
    }

    _getLatestIndex(){
        let index = wx.getStorageSync('latest')
        return index
    }

    _getKey(index){
        let key = `classic-${index}`
        return key
    }
}

export {
    ClassicModel
}