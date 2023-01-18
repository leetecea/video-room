import React, { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom';
import YouTube from 'react-youtube'
import getYouTubeID from 'get-youtube-id' 


// const socket = io.connect('http://localhost:5171')

export default function index() {
  
  const[url, setUrl] = useState('');
  const inputRef = useRef(null)
  

  useEffect((e) =>{
    if(inputRef) inputRef.current.focus();
  },[])

  const handleChange = (e) =>{
    setUrl(getYouTubeID(e.target.value))
  }

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };
  // socket.on('getNewVideo', (videoId) =>{
  //   ytPlayerChangeVideo(videoId);
  // })
  

  const params = useParams();
  const {id} = params;


  return (
    <>
    <div>
      <div>
        <h1>video room</h1>
        <p>id da sala: {id}</p>
      </div>
      <section> 
      <input type="text" name="url" id="url" ref={inputRef} value={url} onChange={handleChange}/>
      </section>
    </div>
    <div>
      <YouTube videoId={url} opts={opts} />
    </div>
    <section>
      Listar participantes
    </section>
    </>
  )
}
