import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CartList = (props) => {
  const [data, setData] = useState([]); // State variable should be 'data', not 'set'
  const [comment, setComment] = useState("");

  console.log(comment);

  useEffect(() => {
    axios.get("http://localhost:9000/api/products").then((res) => {
      setData(res.data); // Use setData to update the state
      console.log(res.data)
    }).catch((error) => {
      console.log(error);
    });
  }, []);

  const handleCommentChange = (event, index) => { // Accept index as a parameter
    const updatedData = [...data]; // Create a copy of the data array
    updatedData[index].comment = event.target.value; // Update the comment in the copy
    setData(updatedData); // Update the state with the modified data
  };

  const handleAddComment = (index) => { // Accept index as a parameter
    const commentData = {
      comment: data[index].comment,
    };

    axios
      .post("http://localhost:9000/api/comment", commentData)
      .then((result) => {
        console.log("Comment added successfully");
      })
      .catch((error) => {
        console.log("Error adding comment:", error);
      });
  };

  

  return (
    <div className='cart-list'>
      <h4>My cart</h4>
      {  props.data && props.data.map((e, i) => (
        <div key={i} className='cart-item'>
          <span>Product Name: {e.name}</span>
          <span>Price: {e.price}</span>
          <button className='cart-list-button'>Remove</button>
          <input
            type='text'
            value={e.comment}
            onChange={(event) => handleCommentChange(event, i)} // Pass the index 'i'
            placeholder='Enter your comment'
          />
          <button onClick={() => handleAddComment(i)}>Add Comment</button> {/* Pass the index 'i' */}
        </div>
      ))}
      <h3>Total: 0$</h3>
    </div>
  );
};

export default CartList;
