import React from 'react'

const secondDetails = (props) => {
console.log(props.details,"heloo" )   
 
return (
  <div>
    <div >
      <img className='two' src={props.details.imageUrl2}  />
    </div>
    <div >
      <h1 className='second-text'>{props.details.name2}</h1>
      <h2 cla>{props.details.price2}</h2>
    </div>
  </div>
);
}

export default secondDetails