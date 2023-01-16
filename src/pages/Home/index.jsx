import React, { useEffect, useState } from 'react'
import Card from '../../components/Card'
import * as S from './homeStyle'
import { db } from '../../../server/config/firebase-config'
import { collection, getDocs } from 'firebase/firestore'

export default function index() {

  const [users, setUsers] = useState([]); 
  const usersCollectionRef = collection(db, "users");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef)
      console.log(data)
    }
    getUsers();
  },[])
  
  return (
    <S.Container>
      <h1>video room</h1>
      <S.Box>
        <Card title="Crie uma nova sala" 
        labelOne="Nome da sala" 
        labelTwo="Seu nome" 
        placeholderOne="Sala de reunião" 
        placeholderTwo="Digite seu nome" />

        <Card title="Tem um código de sala?" 
        labelOne="Utilize o código aqui:" 
        labelTwo="Seu nome"
        placeholderOne="65316562" 
        placeholderTwo="Digite seu nome" />
      </S.Box>
    </S.Container>
  )
}
