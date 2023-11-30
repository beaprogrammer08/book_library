const mongoose=require("mongoose");

const bookSchema=new mongoose.Schema({
    Bookname:{type:String,required:true},
    Description:{type:String,required:true},
    author:{type:String,required:true},
    
    image:{type:String,required:true},
    price:{type:Number,required:true}
});

module.exports=new mongoose.model("books",bookSchema)