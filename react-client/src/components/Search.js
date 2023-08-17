import React, {useState} from 'react'
const Search = (props) => {

const [term , setTerm]= useState ("")

const handleChange=(e)=>{
    setTerm (e.target.value)
}


    return (
        <div className='searchForm'>
            <input type="text" placeholder="looking for ..." className='search' onChange={(e)=>handleChange(e)} />
            <button className='btn' onClick={()=>{props.stat(term)}}>&#x1F50E;</button>
        </div>
    )
}
export default Search