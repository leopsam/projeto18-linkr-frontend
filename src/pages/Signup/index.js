import Button from '../../style/button.styled';
import Input from '../../style/Input.styled';
import ContainerPage from "../../style/ContainerPage.styled";
import SigninContainer from "../../style/ContainerSignin.styled";
import TitleContainer from "../../style/ContainerTitle.styled";
import LinkSignUp from "../../style/Link.styled";
import Form from '../../style/Form.styled';
import axios from "axios";
import { linkrContext } from "../../contexts/LinkrContext"
import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
    const { botaoLoading, activeInput, inputFaded, REACT_APP_API_URL } = useContext(linkrContext)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [pictureUrl, setPictureUrl] = useState("")
    const [buttonText, setButtonText] = useState("Sign Up")
    const [disabledValue, setDisabledValue] = useState("")
    const navegacao = useNavigate()

    function signup(e) {
        e.preventDefault()
        setButtonText(botaoLoading) 
        setDisabledValue("disabled") 

        const body = { email, password, username, pictureUrl}
        const url = REACT_APP_API_URL + "sign-in"
        const promise = axios.post(url, body)
       
        promise.then((res) => {
                navegacao('/')
                alert("successfully registered user")
               
            })

            promise.catch(err => { 
                setButtonText("Sign Up") 
                setDisabledValue("")
                alert(err)
            })
    }
        
    return (
        <ContainerPage>
            <TitleContainer>
                <div>
                    <h1>linkr</h1>
                    <h2>save, share and discover the best links on the web</h2>
                </div>
            </TitleContainer>
            <SigninContainer>            
                <Form onSubmit={signup}>
                    <Input 
                        id="email"
                        type="email"
                        placeholder="e-mail" 
                        value={email} 
                        disabled={disabledValue} 
                        corFundo={disabledValue ? inputFaded : activeInput } 
                        onChange={e => setEmail(e.target.value)} 
                        required
                    />
                    <Input 
                        id="password"
                        type="password" 
                        placeholder="password" 
                        value={password} 
                        disabled={disabledValue} 
                        corFundo={disabledValue ? inputFaded : activeInput } 
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                    <Input 
                        id="username"
                        type="username" 
                        placeholder="username" 
                        value={username} 
                        disabled={disabledValue} 
                        corFundo={disabledValue ? inputFaded : activeInput } 
                        onChange={e => setUsername(e.target.value)}
                        required
                    />
                    <Input 
                        id="pictureUrl"
                        type="url" 
                        placeholder="picture url" 
                        value={pictureUrl} 
                        disabled={disabledValue} 
                        corFundo={disabledValue ? inputFaded : activeInput } 
                        onChange={e => setPictureUrl(e.target.value)}
                        required
                    />
                    <Button data-test="sign-in-submit" disabled={disabledValue} type="submit">{buttonText}</Button> 
                </Form>
                <LinkSignUp>
                    <Link to={`/`}>
                        <p>Switch back to log in</p>
                    </Link>                
                </LinkSignUp>                   
            </SigninContainer>
        </ContainerPage>
        
    )
}