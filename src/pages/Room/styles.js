import styled from 'styled-components'

export const Container = styled.section`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
gap: 1em;

button{
  width: 10%;
  padding: .5em .5em .5em .5em;
  align-self: center;
  border-radius: 10px;
  border: none;
  cursor: pointer;
}


`

export const Contain = styled.section`

`

export const Box = styled.section`
width: 20%;
display: flex;
flex-direction: column;
gap: 1em;
align-items: center;
position: relative;
top: 20px;

h1{
  font-size: 2em;
  width: 6.5em;
  text-align: center;
  background-color: #ffffff;
  border: 1px solid #000000;
  box-shadow: #AABBCC 4px 4px 0 0,#000 4px 4px 0 1px;
}

p{
  width: 70%;
  word-wrap: break-word;
  text-align: center;
}
`

export const Video = styled.section`

display: flex;
flex-direction: column;
align-items: center;
gap: 1em;

input{
  width: 25%;
  height: 3em;
  border: 1px solid gray;
  border-radius: 1.2em;
  font-family: 'Inter', sans-serif;
  color: #000000;
  font-weight: 500;
  padding-left: .5em;

}
`