import HeaderStyled from "./styled.js";
import Menu from "../../style/Logout.styled";
import Cookies from "js-cookie";
import Search from "../../style/Search.styled";
import SearchContainer from "../../style/SearchContainer.styled";
import { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { IconContext } from "react-icons";
import { linkrContext } from "../../contexts/LinkrContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {DebounceInput} from 'react-debounce-input';

export default function LinkSignup() {
  const { infoUser, setInfoUser, setToken } = useContext(linkrContext);
  const [open, setOpen] = useState(false);
  const [state, setState] = useState([]);
  const navegacao = useNavigate();

  function logout() {
    setInfoUser({});
    setToken("");
    navegacao("/");
    Cookies.remove("email");
    Cookies.remove("password");
  }
 
  return (
    <>
      <HeaderStyled>
        <h1>linkr</h1>       
        <Search>          
          <DebounceInput
            minLength={3}
            debounceTimeout={300}
            placeholder = "Search for people"
            value={state}
            onChange={(e) => {setState(e.target.value)}} 
          />        
          <SearchContainer>
              <p>{state}</p>                    
          </SearchContainer>
        </Search>      
        <div>
          <IconContext.Provider
            value={{
              color: "#FFFFFF",
              size: "30px",
            }}
          >
            {open ? (
              <AiOutlineUp onClick={() => setOpen(!open)} />
            ) : (
              <AiOutlineDown onClick={() => setOpen(!open)} />
            )}
          </IconContext.Provider>
          <img data-test="avatar" src={infoUser.pictureUrl} alt="profile" />
        </div>
      </HeaderStyled>

      <Menu data-test="menu" open={open}>
        <p data-test="logout" onClick={() => logout()}>
          Logout
        </p>
      </Menu>
    </>
  );
}
