import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


function AddProduct() {

    const [name , setName] = useState("")
    const [description , setDescription] = useState("")
    const [price , setPrice] = useState("")
    const [imageUrl , setImageUrl] = useState("")
    console.log("add")

    const handelClick =()=>{

            axios.post("http://localhost:9000/api/products" , {
            name:name,
            description:description,
            price:price,
            imageUrl:imageUrl

            })
    }



    return (
      <Box
      component="form"
      className="form-container"
      noValidate
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch'  ,  background:"white"},
      }}
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="name"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />

        <TextField
          required
          id="outlined-required"
          label="description"
          name="description"
          onChange={(e) => setDescription(e.target.value)}
        />

        <TextField
          required
          id="outlined-required"
          label="price"
          name="price"
          onChange={(e) => setPrice(e.target.value)}
        />
        <TextField
          required
          id="outlined-required"
          label="imageUrl"
          name="imageUrl"
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </div>
      <button className="add-button" onClick={()=>{
        handelClick()
      }}>
        Update
      </button>
    </Box>

  )
}

export default AddProduct
