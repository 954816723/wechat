// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isLike:{
      type:Number,
      value:0
    },
    num:{
        type:Number,
        value:0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    likeSrc:"./images/like.png",
    unLikeSrc:"./images/unlike.png"
  },

  /**
   * 组件的方法列表
   */
  methods: {
      clickHeart(){
          let status = this.properties.isLike,
                num = this.properties.num
          this.setData({
              isLike: !status,
              num: status ? --num : ++num
		  })
		  let behavior = this.properties.isLike ? 'like' : 'cancel'
          this.triggerEvent('changeLike', {behavior})
      }
  }
})
