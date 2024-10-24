const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TodoSchema = new Schema({
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

// module.exports = mongoose.model('TODO', TodoSchema)

const  Todom = mongoose.model('Todo',TodoSchema);

module.exports= Todom 

