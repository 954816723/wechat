import { ClassicModel} from '../../models/classics.js'
let classicModel = new ClassicModel()
Page({
    data: {
        classic:null
    },
    onLoad(options){
        const latest = classicModel.getLatest()
        latest.then(res=>{
            console.log(res)
            this.setData({
                classic:res
            })
        })
    },
    changeLike(){
        console.log(123)
    }
})