import Header from "../../components/Header";
import BodyStyled from "../../style/Body.styled";

import { linkrContext } from "../../contexts/LinkrContext"
import { useContext } from "react";


export default function Login() {   
    const { token } = useContext(linkrContext) 
        
    return (
        <>
            <Header />
            <BodyStyled>
               
                <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                {token}
            </BodyStyled>
        </>
        
    )
}

