import HeaderStyled from "../style/pages/Header.styled";
import styled from 'styled-components';
import { useState, useContext } from "react"
import { AiOutlineDown } from "react-icons/ai"
import { IconContext } from "react-icons"


export default function LinkSignup() {
    const [open, setOpen] = useState(false)
    
    return (
        <HeaderStyled>
            <h1>linkr</h1> 
            <div>
            <IconContext.Provider value={{ color: "#FFFFFF", size: "30px", attr:"IoIosArrowUp"}}>
                <AiOutlineDown onClick={() => setOpen(!open)} />
            </IconContext.Provider>
                <Menu open={open}>
                    <p>Logout</p>
                </Menu>               
                <img src="https://conteudo.imguol.com.br/c/entretenimento/e9/2019/06/09/elden-ring-1560122245465_v2_1x1.jpg" alt="profile" />
            </div>         
        </HeaderStyled>
    )
}

const Menu = styled.div`   
    background-color: #171717;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
    top: 72px;
    right: 0;   
    width: 150px;
    height: 47px;
    border-radius: 0 0 0 20px ;
    p {
        margin: 0 auto;
        font-family: 'Lato';
        font-style: normal;
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;  
        color: #FFFFFF;
    }  
`