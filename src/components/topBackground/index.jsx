import UsersImage from "../../pages/Home/assets/users.png";
import { Background } from "./style";



function TopBackground(){
    return(
     <>
     <Background>
          <img src={UsersImage}/>
        </Background>
     </>
    )
}

export default TopBackground