import { useRef } from "react";
import api from "../../services/api";

import {
  Estilo,
  Form,
  Title,
  ContainerInputs,
  Input,

  InputLabel,
} from "./style";
import TopBackground from "../../components/topBackground";
import { Button } from "../../components/Button/style";



function Home() {

  const inputName= useRef()
  const inputIdade= useRef()
  const inputEmail= useRef()


 async function registerNewUse(){
  const data=  await api.post("/usuarios", {
    name: inputName.current.value,
    age: parseInt( inputIdade.current.value) ,
    email: inputEmail.current.value
   })

   console.log(data) 
  }


  return (
    <>
      <Estilo>
        <TopBackground/>

        <Form>
          <Title>Cadastrar Usuários</Title>

          <ContainerInputs>
            
              <div>
                <InputLabel>
                  Nome <span>*</span>
                </InputLabel>
                <Input type="text" placeholder="Nome do Usuário" ref={inputName}  />
              </div>

              <div>
                <InputLabel>
                  Idade <span>*</span>
                </InputLabel>
                <Input type="number" placeholder="Idade do Usuário" ref={inputIdade} />
              </div>
            
            </ContainerInputs>

            <div style={{width: "100%"}}>
              <InputLabel>
                Email <span>*</span>
              </InputLabel>
              <Input type="email" placeholder="E-mail do Usuário" ref={inputEmail} />
            </div>
        
          <Button type="button" onClick={registerNewUse} theme="primary"
          >Cadastrar Usuários</Button>

    
        </Form>
        <Button type="button" >Ver lista de usuários</Button>

  
      </Estilo>
    </>
  );
}

export default Home;
