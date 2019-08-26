import { ClassicModel } from '../../models/classics.js'
import { LikeModel } from '../../models/like.js'
let classicModel = new ClassicModel(),
    likeModel = new LikeModel()
Page({
    data: {
        classic:null,
        latest:true,
        first:false,
        likeCount:0,
        likeStatus:false
    },
    onLoad(options){
        const latest = classicModel.getLatest()
        latest.then(res=>{
            console.log(res)
            this.setData({
                classic:res,
                likeStatus:res.like_status,
                likeCount:res.fav_nums
            })
        })
    },
    changeLike(e){
        let behavior = e.detail.behavior
        likeModel.like(behavior,this.data.classic.id,this.data.classic.type)
    },
    onNext(){
        this._updateClassic('next')
    },
    onPrevious(){
        this._updateClassic('previous')
    },
    _updateClassic(nextOrPrevious){
        let index = this.data.classic.index
        let result = classicModel.getClassic(index,nextOrPrevious)
        result.then(res => {
            this._getLikeStatus(res.id,res.type)
            this.setData({
                classic:res,
                latest:classicModel.isLatest(res.index),
                first:classicModel.isFirst(res.index)
            })
        })
    },
    _getLikeStatus(artID,category){
        let result = likeModel.getClassicLikeStatus(artID,category)
        result.then(res => {
            this.setData({
                likeCount:res.fav_nums,
                likeStatus:res.like_status
            })

        })
    }
})