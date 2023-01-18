import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

export default function index() {

  let[ input, setInput ] = useState("");

  const params = useParams();
  const {id} = params;
  

  const enter = (e) => {
    if(input.length > 0 && e.key === "Enter"){
     let pesquisarVideo = input;
    }
  }


  return (
    <>
    <div>
      <div>
        <h1>video room</h1>
        <p>id da sala: {id}</p>
      </div>
      <section> 
        {/* <Search onSearch={Search.PressEnter()}/> */}
      </section>
    </div>
    <section>
      Listar participantes
    </section>
    </>
  )
}
