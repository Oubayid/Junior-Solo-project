const mongoose = require("mongoose");
const mongoUri = "mongodb://localhost:27017/ProjectJuniorPhaseLast";
const {Product, Comment} = require("./Product")



mongoose.connect(mongoUri, { useUnifiedTopology: true, useNewUrlParser: true }).then(()=>{console.log("db mongo connected")}).catch(err=>console.log(err));
const db = mongoose.connection;

const getAllProducts = () => {
return Product.find()
};

const getAllComment = () =>{
  return Comment.find()
}


const addComment = (commentData)=>{
  return Comment.create(commentData)
}

const addProduct =(productData) => {
  return Product.create(productData)
}

const updateProduct = (id , data) => {
  return Product.findByIdAndUpdate({ _id: id } , data , {new:true});
};

const deleteAny= (id) =>{
  return Product.deleteOne({_id : id})
}



module.exports = {
  db,
  getAllProducts , addComment , updateProduct , deleteAny , getAllComment,addProduct
};
