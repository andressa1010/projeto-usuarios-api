import { useRef } from "react";
import api from "../../services/api";

import {
  Estilo,
  Topblackgorund,
  Form,
  Title,
  ContainerInputs,
  Input,
  Button,
  InputLabel,
} from "./style";

import Users from "../Home/assets/users.png";

function App() {

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
        <Topblackgorund>
          <img src={Users}/>
        </Topblackgorund>

        <Form>
          <Title>Cadastra Usuários</Title>

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
                Email <span>*</span>{" "}
              </InputLabel>
              <Input type="email" placeholder="E-mail do Usuário" ref={inputEmail} />
            </div>
        
          <Button type="button" onClick={registerNewUse}  >Cadastrar Usuários</Button>

    
        </Form>
      </Estilo>
    </>
  );
}

export default App;
