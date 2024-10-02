import styled from "styled-components";

 export const Estilo= styled.div`
   background-color: #775678;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-evenly;
   padding: 20px;
   height: 100vh;
`



export const Form=styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  max-width: 500px;
`

export const Title=styled.h2`
 color: #ffff;
 text-align: center;
 font-size: 38px;
 font-style: normal;
 font-weight: 600;

`

export const ContainerInputs=styled.div`
  display: flex;
  gap: 20px;
`

export const Input=styled.input`
border-radius: 10px;
border: 1px solid #ddd;
background-color: #ffff;
padding: 12px 20px;
outline: none;
width: 100%;

`



export const InputLabel=styled.label`
   color: #ffff;
   font-size: 12px;
   font-weight: 500;

   span{
    color: red;
    font-weight: bold;
   }
`