import HeaderStyled from "./styled.js";
import Menu from "../../style/Logout.styled";
import { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { IconContext } from "react-icons";
import { linkrContext } from "../../contexts/LinkrContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function LinkSignup() {
  const { infoUser, setInfoUser, setToken } = useContext(linkrContext);
  const [open, setOpen] = useState(false);
  const navegacao = useNavigate();

  function logout() {
    setInfoUser({});
    setToken("");
    navegacao("/");
  }

  return (
    <>
      <HeaderStyled>
        <h1>linkr</h1>
        <div>
          <IconContext.Provider value={{ color: "#FFFFFF", size: "30px" }}>
            <AiOutlineDown onClick={() => setOpen(!open)} />
          </IconContext.Provider>
          <img src={infoUser.pictureUrl} alt="profile" />
        </div>
      </HeaderStyled>
      <Menu open={open}>
        <p onClick={() => logout()}>Logout</p>
      </Menu>
    </>
  );
}
