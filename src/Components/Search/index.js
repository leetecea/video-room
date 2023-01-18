import React, { useState, useEffect, useRef } from 'react'

export default function Search() {
  let[ input, setInput ] = useState("");
  const inputRef = useRef(null)

  useEffect(() =>{
    if(inputRef) inputRef.current.focus();
  },[])

 const PressEnter = (e) => {
    if(input.length > 0 && e.key === "Enter"){
     let pesquisarVideo = input;
    }
  }

  const onSubmit = e =>{
    e.preventDefault();
    onSearch(setInput)
  }

  const handleInputChange = (e) =>{
    e.preventDefault();
    setInput(e.target.value)
  }
  return (
    <>
     <form onSubmit={onSubmit}> 
        <input type="search" name="searchVideosYT" id="searchvideosYT" value={input} onChange={() => {handleInputChange()}} ref={inputRef}/>
      </form>

    </>
  )
}
