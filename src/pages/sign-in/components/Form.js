import axios from "axios"
import { useState, useContext } from "react"
import { LagContext } from "../../../contexts/LinkrContext"
import { useNavigate } from "react-router-dom"
import Form from "../../../style/auth/Form.styled";
import Input from "../../../style/auth/Input.styled";
import Button from "../../../style/auth/button.styled";


export default function FormSignIn() {
const { setToken, setUserName, setUserId, setAvata, botaoLoading, inputAtivo, inputDesbotado, REACT_APP_API_URL, setTipo } = useContext(LagContext)
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [textoBotao, setTextoBotao] = useState("Log In")
    const [desabilitado, setDesabilitado] = useState("")
    const navegacao = useNavigate()

    function signin(e) {
        e.preventDefault()
        setTextoBotao(botaoLoading) 
        setDesabilitado("disabled") 

        const body = { email, senha }
        const url = REACT_APP_API_URL + "/login"
        const promise = axios.post(url, body)
       
        promise.then((res) => {
                setToken(res.data.token)
                setUserName(res.data.name) 
                setUserId(res.data.userId)
                setAvata(res.data.avatar) 
                setTipo(res.data.type) 
                console.log("Logado com sucesso")  
                navegacao('/home')
            })

            promise.catch(err => { 
                setTextoBotao("Entrar") 
                setDesabilitado("")
                alert("E-mail ou senha inválida") 
                console.log(err.response.data)
                console.log("erro no login")                
            })
    }

    return (
        <Form onSubmit={signin}>
        <Input 
            id="email"
            type="email"
            placeholder="e-mail" 
            value={email} 
            disabled={desabilitado} 
            corFundo={desabilitado ? inputDesbotado : inputAtivo } 
            onChange={e => setEmail(e.target.value)} 
            required
        />
        <Input 
            id="password"
            type="password" 
            placeholder="password" 
            value={senha} 
            disabled={desabilitado} 
            corFundo={desabilitado ? inputDesbotado : inputAtivo } 
            onChange={e => setSenha(e.target.value)}
            required
        />
        <Button data-test="sign-in-submit" disabled={desabilitado} type="submit">{textoBotao}</Button> 
        </Form>
       )
    }