Component({
    properties:{
        index:{
        type:Number,
        observer(newVal,oldVal,path){
            let res = newVal >=10 ? newVal : '0'+newVal
            this.setData({
                _index:res
            })
        }}
    },
    data:{
        year:0,
        month:'',
        months:['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
        _index:0
    },
    lifetimes:{
        attached(){
            let date = new Date()
            this.setData({
                year:date.getFullYear(),
                month: this.data.months[date.getMonth()]
            })
        }
    },
    methods:{

    }
})