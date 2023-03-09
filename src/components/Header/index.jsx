import HeaderStyled from "./styled.js";
import Menu from "../../style/Logout.styled";
import { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
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
          <IconContext.Provider
            value={{
              color: "#FFFFFF",
              size: "30px",
            }}
          >
            {open ? (
              <AiOutlineDown onClick={() => setOpen(!open)} />
            ) : (
              <AiOutlineUp onClick={() => setOpen(!open)} />
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
