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

export const Topblackgorund= styled.div`

 background: rgb(131,58,180);
 background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
 height: 30vh;
 width: 90vw;
 max-width: 800px;
 border-radius: 30px;
 display: flex;
 align-items: center;
 justify-content: center;

 img{
    max-width: 100%;
    max-height: 100%;
 }

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

export const Button=styled.button`
 border: none;
  background: rgb(131,58,180);
 background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
 font-size: 20px;
 color: #ffff;
 padding: 16px 23px;
 width: fit-content;
 cursor: pointer;
 border-radius: 20px;

 &:hover{
    opacity: 0.8;
 }

 &:active{
    opacity: 0.5;
 }



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