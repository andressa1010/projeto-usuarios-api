import styled from "styled-components";



export const Container= styled.div`
  background-color: #181f36 ;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px;
  
  `

export const ContainerUser= styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin: 40px 0;

  @media (max-width: 750px){
    grid-template-columns: 1fr;
  }

`

export const CardUsers= styled.div`
 background-color: #252d48;
 padding: 16px;
 border-radius: 32px;
 display: flex;
 justify-content: space-between;
 align-items: center;
 gap: 20px;
 max-width: 400px;

 h3{
    font-size: 24px;
    color: #ffff;
    margin-bottom: 3px;
    text-transform: capitalize;
 }

 p{
    color: #ffff;
 
 }


`



export const TitleNovo=styled.h2`
 color: #ffff;
 text-align: center;
 font-size: 38px;
 font-style: normal;
 font-weight: 600;
 margin-top: 30px;

`



export const TrashIcon=styled.img`
cursor: pointer;
padding-left: 30px;

&:hover{
    opacity: 0.8;
}

&:hover{
    opacity:0.5;
}

`

export const AvatarUser= styled.img`
  height: 80px;
`