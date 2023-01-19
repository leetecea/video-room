import React, { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom';
import YouTube from 'react-youtube'
import getYouTubeID from 'get-youtube-id' 
import { io } from 'socket.io-client'
import * as S from './styles'


let socket = io.connect('http://localhost:5171')

export default function index() {
  
  const[url, setUrl] = useState('');
  const[urlReceived, setUrlReceived] = useState('');

  const inputRef = useRef(null)
  

  useEffect(() =>{
    if(inputRef ) inputRef.current.focus();
    socket.on("receive_url", (data) => {
      setUrlReceived(data.url)
    })
  },[socket])
  
    const sendUrl = () => {
      socket.emit('send_url', { url })
    }

  const handleChange = (e) =>{
    setUrl(getYouTubeID(e.target.value))
  }

  const opts = {
    height: '400',
    width: '700',
    videoId: 'M7lc1UVf-VE',
    playerVars: {
      autoplay: 0,
      controls: 1,
    },
  };
  
 
  const params = useParams();
  const {id} = params;


  return (
    <S.Container>
    <S.Contain>
      <S.Box>
        <h1>video room</h1>
        <p>id da sala: {id}</p>
      </S.Box>
      <S.Video> 
        <input type="text" name="url" id="url"  value={url} ref={inputRef} onChange={handleChange} placeholder="Digite a url de um vídeo do Youtube"/>
        <YouTube videoId={url} opts={opts} />
      </S.Video>
    </S.Contain>
    <button onClick={sendUrl}>Transmitir vídeo para convidados</button>
    </S.Container>
  )
}