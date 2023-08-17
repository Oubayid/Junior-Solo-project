const express = require('express');
const cors =require('cors');
const port = 9000;
const app = express();
app.use(express.json())
//uncomment to use mongodb
 const db = require('./mongoDb')
// uncomment to use MYSQL 
// const db = require("./Mysql")
app.use(cors());



app.get('/api/products',(req,res)=> {
   db.getAllProducts().then((result)=>{
    res.status(200).send(result)
   }).catch((error)=>{
    console.log(error)
    res.status(500).send("nope")
   })
})

app.get("/api/getComment" , (req,res)=>{
   db.getAllComment().then((result)=>{
      res.status(200).send(result)
   }).catch((error)=>{
      console.log(error)
      res.status(500).send("internet server error")
   })
})

app.post("/api/comment",(req,res)=>{
   const commentData = req.body
   db.addComment(commentData).then((result)=>{
      res.status(200).send(result)
   }).catch((error)=>{
console.log(error)
   })
})

app.post("/api/products" , (req,res)=>{
   const productData = req.body 
   db.addProduct(productData).then((result)=>{
      res.status(200).send(result)
   }).catch((err)=>{
      console.log(err)
   })
})

app.put("/api/update/:id", (req, res) => {
   const id = req.params.id;
   const newData = req.body;
   
   db.updateProduct(id, newData)
      .then((result) => {
         res.status(200).send(result);
      })
      .catch((error) => {
         console.log(error);
         res.status(500).send("Error updating product.");
      });
});


app.delete("/api/delete/:id" , (req,res)=>{
   const id = req.params.id 
   db.deleteAny(id).then((result)=>{
      res.status(200).send(result)
   }).catch((error)=>{
      console.log(error)
      res.status(500).send("failed to delete")
   })
})

app.listen(port, ()=>{
console.log(`listening on ${port}`);
})