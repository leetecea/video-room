import React, { useState } from 'react'
import * as S from './homeStyle'
import { db } from '../../config/firebase-config'
import { collection, addDoc } from 'firebase/firestore'

export default function index() {

  const[nameUser, setNameUser] = useState("");
  const[nameRoom, setNameRoom] = useState("");
  const[codeRoom, setCodeRoom] = useState("");

  const [users, setUsers] = useState([]); 
  const [rooms, setRooms] = useState([]);

  const usersCollectionRef = collection(db, "users");
  const roomsCollectionRef = collection(db, "rooms");

  const createUser = async () => {
    if (nameUser === "" || nameRoom === ""){
      return false
    }else{
      await addDoc(usersCollectionRef, { name: nameUser })  
      await addDoc(roomsCollectionRef, { name: nameRoom })
      setNameRoom("");
      setNameUser("") 
    }
  }

  const loginRoom = async () => {
    if (nameUser === ""){
      return false
    }else{
      await addDoc(usersCollectionRef, { name: nameUser })
      setNameUser("") 
      setCodeRoom("") 
      window.location.replace(`http://localhost:5173/room/:${codeRoom}`)

    }
  }
  
  return (
    <S.Container>
      <h1>video room</h1>
      <S.Box>
        <div>
          <h2>Crie uma nova sala</h2>
          <div>
            <label htmlFor="nameRoom">Nome da sala</label>
            <input type="text" id="nameRoom" value={nameRoom} placeholder="Sala de reunião"  onChange={e => setNameRoom(e.target.value)} />
          </div>
          <div>
            <label htmlFor="name">Seu nome</label>
            <input type="text" id="nameUser" placeholder="Digite seu nome" onChange={e => setNameUser(e.target.value)} />
          </div>
          <button onClick={() => {createUser()}}>Entrar</button>
        </div>

        <div>
          <h2>Tem um código de sala?</h2>
          <div>
            <label htmlFor="nameRoom">Utilize o código aqui:</label>
            <input type="text" id="nameRoom" placeholder="Digite o código da sala"   onChange={event => setCodeRoom(event.target.value)} />
          </div>
          <div>
            <label htmlFor="name2">Seu nome</label>
            <input type="text" id="nameUser2" placeholder="Digite seu nome" onChange={e => setNameUser(e.target.value)} />
          </div>
          <button onClick={() => {loginRoom()}}>Entrar</button>
        </div>
      </S.Box>
    </S.Container>
  )
}
