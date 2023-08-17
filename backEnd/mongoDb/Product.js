const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const productSchema = new mongoose.Schema({
  name: String , 
  description : String,
  price: String , 
  imageUrl: String
});

const commentSchema = new mongoose.Schema({
  comment: String,
});

const Product = mongoose.model("Product", productSchema);
const Comment = mongoose.model("Comment", commentSchema);

module.exports = {
  Product,
  Comment,
};
