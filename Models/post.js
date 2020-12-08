const postRouter = require("..")

const mongoose= reqiure ('mongoose')

const postSchema= new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    content:{
        type:String
    },
    date:{
        type:Date,
        required:true
    },
    upvotes:{
        type:Number,
        required:true
    },
    downvotes:{
        type:Number,
        required:true
    }
    
})

module.exports= postRouter