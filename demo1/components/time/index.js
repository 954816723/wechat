Component({
    properties:{
        index:Number
    },
    data:{
        year:0,
        month:'',
        months:['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']
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