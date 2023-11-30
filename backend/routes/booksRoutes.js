const router=require("express").Router();
const bookModel=require("../models/Booksmodel");

router.post("/add",async (req,res)=>{
    try{
        const data=req.body;
        const newBook=new bookModel(data);
        await newBook.save().then(()=>{
            res.status(200).json({message:"Book Added Successfully"});
        });
    }catch(error){
        console.log(error);
    }
});

router.get("/getBooks",async(req,res)=>{
    let books;
    try{
      books=  await bookModel.find();
      res.status(200).json((books));
    }catch(error){
        console.log(error);
    }
});
router.get("/getBooks/:id",async(req,res)=>{
    let book;
    const id=req.params.id;
    try{
      book=  await bookModel.findById(id);
    
      res.status(200).json((book));
    }catch(error){
        console.log(error);
    }
});
router.put("/updateBook/:id",async (req,res)=>{
    const id=req.params.id;
    const {Bookname,Description,author,image,price}=req.body;
   let book;
    try{
        await bookModel.findByIdAndUpdate(id,{Bookname,Description,author,image,price});
       book= await book.save().then(()=>res.json({message:"Data Updated Successfully"}));
    }catch(error){
        console.log(error);
    }
});
router.delete("/deleteBook/:id",async(req,res)=>{
    const id=req.params.id;
    try{
        await bookModel.findByIdAndDelete(id).then(()=>res.status(201).json({message:"Deleted Succesfully"}));

    }catch(error){
        console.log(error);
    }
});
module.exports=router;
