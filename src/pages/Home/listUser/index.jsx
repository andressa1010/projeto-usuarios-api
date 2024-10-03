import TopBackground from "../../../components/topBackground";
import api from "../../../services/api";
import { useEffect } from "react";
import { useState } from "react";
import { CardUsers, Container, ContainerUser, TitleNovo, TrashIcon } from "./style";
import { Button } from "../../../components/Button/style";
import trash from "../assets/trash.svg"

function ListUser() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const { data } = await api.get("/usuarios");
      setUser(data);
    }

    getUsers();
  }, []);

  return (
    <>
      <Container>
        <TopBackground />

        <TitleNovo>Lista de Usuários</TitleNovo>

        <ContainerUser>
          <CardUsers key={user.id}>
            {user.map((user) => (
              <div>
                <p>{user.name}</p>
                <p>{user.age}</p>
                <p>{user.email}</p>
              </div>
            ))}
            <TrashIcon src={trash} />
          </CardUsers>
        </ContainerUser>

        <Button type="button">Voltar</Button>
      </Container>
    </>
  );
}

export default ListUser;
