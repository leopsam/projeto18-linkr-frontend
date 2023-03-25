import Button from "../style/AuthButton.styled";
import Input from "../style/AuthInput.styled";
import ContainerPage from "../style/AuthContainerPage.styled";
import SigninContainer from "../style/AuthContainerSign.styled";
import TitleContainer from "../style/AuthContainerTitle.styled";
import LinkSignUp from "../style/AuthLink.styled";
import Form from "../style/AuthForm.styled";
import Cookies from "js-cookie";
import axios from "axios";
import ButtonLoading from "../components/ButtonLoading";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [buttonText, setButtonText] = useState("Log In");
  const [disabledValue, setDisabledValue] = useState("");
  const navigate = useNavigate();
  
  function signin(e) {
    e.preventDefault();
    setButtonText(ButtonLoading);
    setDisabledValue("disabled");

    const body = { email, password }
    const url = process.env.REACT_APP_API_URL + '/sign-in'
    const promise = axios.post(url, body)
    console.log(url)

    promise.then((res) => { 
      navigate('/timeline')
      Cookies.set("email", email, { expires: 7 });
      Cookies.set("password", password, { expires: 7 });
      Cookies.set("username", res.data.user.username, { expires: 7 });
      Cookies.set("picture_url", res.data.user.picture_url, { expires: 7 });
      Cookies.set("id", res.data.user.id, { expires: 7 });
      Cookies.set("token", res.data.token, { expires: 7 });
      alert("User logged in successfully")
      
  })

    promise.catch(err => { 
      setButtonText("Log in") 
      setDisabledValue("")
      alert("Invalid email or password") 
      console.log(err.response.data)    
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
        <Form onSubmit={signin}>
          <Input
            data-test="email"
            id="email"
            type="email"
            placeholder="e-mail"
            value={email}
            disabled={disabledValue}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            data-test="password"
            id="password"
            type="password"
            placeholder="password"
            value={password}
            disabled={disabledValue}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button data-test="login-btn" disabled={disabledValue} type="submit">
            <p>{buttonText}</p>
          </Button>
        </Form>
        <LinkSignUp>
          <Link data-test="sign-up-link" to={`/sign-up`}>
            <p>First time? Create an account!</p>
          </Link>
        </LinkSignUp>
      </SigninContainer>
    </ContainerPage>
  );
}
