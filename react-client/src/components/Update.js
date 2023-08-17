import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useEffect , useState } from 'react';


function Update(props) {
    const { _id, name, description, price, imageUrl } = props.productUpdate;
    const [names, setName] = useState('');
    const [descriptions, setDescription] = useState('');
    const [prices, setPrice] = useState('');
    const [imageUrls, setImageUrl] = useState('');
    console.log(names)


    useEffect(()=>{
        setName(name)
        setDescription(description)
        setPrice(price)
        setImageUrl(imageUrl)
    },[])

    const handelClick = ()=>{
        axios.put(`http://localhost:9000/api/update/${_id}`,{
            name : names,
            description : descriptions ,
            price : prices , 
            imageUrl:imageUrls
        }).then((response)=>{
            console.log(response.data)
            alert("pdated successfully")
        }).catch((err)=>{
            console.error(err)
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

export default Update
