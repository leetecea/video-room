import styled from 'styled-components'
import bolinhasColoridas from '../../assets/bolinhas.png'

export const Container = styled.section`
max-width: 100%;
height: 100vh;
display: flex;
gap: 5em;
justify-content: center;
align-items: center;
flex-direction: column;

h1{
  font-size: 2em;
  width: 6.5em;
  text-align: center;
  background-color: #ffffff;
  border: 1px solid #000000;
  box-shadow: #AABBCC 4px 4px 0 0,#000 4px 4px 0 1px;
}

h2{
  padding-left: 2.2em;
  width: 100%;
  background-image: url(${bolinhasColoridas});
  background-position: left;
  background-size: contain;
  background-repeat: no-repeat;
  font-size: 1em;
}

button{
  width: 40%;
  align-self: center;
  padding: .2em;
  background-color: #e6e4e4;
  border: 1px solid #000000;
  border-radius: .6em;
  cursor: pointer;
  transition: 1s all;
}

button:hover{
  background-color: #a09e9e;
}

.boxInputs{
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 70%;
  padding-left: 1em;

}

input::placeholder{
  color: #454545;
}

`

export const Box = styled.section`
display: flex;
justify-content: center;
width: 100%;
height: 20em;
gap: 5em;
`

export const BoxCreateRoom = styled.div`
display: flex;
flex-direction: column;
width: 18em;
height: 15em;
border: 1px solid #000000;
background-color: #ffffff;
box-shadow: #D1F3C8 4px 4px 0 0,#000 4px 4px 0 1px;

h2{
  background-color: #D1F3C8;
  border-bottom: 1px solid #000000;
}


input{
  background-color: #D1F3C8;
  width: 90%;
  border: none;
  padding: .5em;
}


`


export const BoxLoginRoom = styled.div`
display: flex;
flex-direction: column;
width: 18em;
height: 15em;
background-color: #ffffff;
border: 1px solid #000000;
box-shadow: #F7B2B0 4px 4px 0 0,#000 4px 4px 0 1px;

h2{
  background-color: #F7B2B0;
  border-bottom: 1px solid #000000;
}

input{
  background-color: #F7B2B0;
  width: 90%;
  border: none;
  padding: .5em;
}
`