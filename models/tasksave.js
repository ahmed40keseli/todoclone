const mongoose = require('mongoose')
const Schema = mongoose.Schema

const todoSchema = new Schema({
    title: {
        type:String,
        required:[true,"bu alan zorunludur"]
    },
    description:{
        type:String,
        required:[true,"bu alan zorunludur"]
    },
    completed:{
        type:Boolean,
        required:[true,"bu alan zorunludur"]
    }
});

// } {timestamps:true}) ile zamanı da kayıt edebiliyoruz

const  Todo = mongoose.model('Todo',todoSchema)
module.exports=Todo 

