import {HTTP} from '../utils/http.js'

class ClassicModel extends HTTP {
    constructor(){
        super()
    }
    getLatest(){
        return this.request({
            url: 'classic/latest'
        })
    }
}

export {
    ClassicModel
}