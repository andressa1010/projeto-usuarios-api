import TopBackground from "../../../components/topBackground";
import api from "../../../services/api";
import { useEffect } from "react";
import { useState } from "react";
import { AvatarUser, CardUsers, Container, ContainerUser, TitleNovo, TrashIcon } from "./style";
import { Button } from "../../../components/Button/style";
import trash from "../assets/trash.svg"
import { useNavigate } from "react-router-dom";

function ListUser() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const { data } = await api.get("/usuarios");
      setUser(data);
    }

    getUsers();
  }, []);


  async function deleteUsers(id){
     await api.delete(`/usuarios/${id}`)

     const updateUsers= user.filter(user => user.id!== id)

     setUser(updateUsers)
  }

  const navigate=useNavigate()

  return (
    <>
      <Container>
        <TopBackground />

        <TitleNovo>Lista de Usuários</TitleNovo>

        <ContainerUser>
        
            {user.map((user) => (
                <CardUsers key={user.id}>
                  <AvatarUser src={`https://avatar.iran.liara.run/public?userName${user.id}`}  />
                 <div>
                <h3>{user.name}</h3>
                <p>{user.age}</p>
                <p>{user.email}</p>
                </div>
                <TrashIcon src={trash} onClick={()=>deleteUsers(user.id)} />
                </CardUsers>
              
            ))}
         
    
        </ContainerUser>

        <Button type="button" onClick={()=> navigate("/")} >Voltar</Button>
      </Container>
    </>
  );
}

export default ListUser;
