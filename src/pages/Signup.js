import Button from "../style/AuthButton.styled";
import Input from "../style/AuthInput.styled";
import ContainerPage from "../style/AuthContainerPage.styled";
import SigninContainer from "../style/AuthContainerSign.styled";
import TitleContainer from "../style/AuthContainerTitle.styled";
import LinkSignUp from "../style/AuthLink.styled";
import Form from "../style/AuthForm.styled";
import axios from "axios";
import ButtonLoading from "../components/ButtonLoading";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [picture_url, setPictureUrl] = useState("");
  const [buttonText, setButtonText] = useState("Sign Up");
  const [disabledValue, setDisabledValue] = useState("");
  const navegate = useNavigate();

  function signup(e) {
    e.preventDefault();
    setButtonText(ButtonLoading);
    setDisabledValue("disabled");

    const body = { email, password, username, picture_url }
    const url = process.env.REACT_APP_API_URL + "/sign-up"
    const promise = axios.post(url, body)

    promise.then((res) => {      
      alert("User created successfully")
      navegate('/')
  })

    promise.catch(err => { 
      setButtonText("Sign Up") 
      setDisabledValue("")
      alert("Invalid or existing user information") 
      console.log(err.response.data)     
      console.log(url)       
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
          <Input
            data-test="username"
            id="username"
            type="username"
            placeholder="username"
            value={username}
            disabled={disabledValue}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <Input
            data-test="picture-url"
            id="pictureUrl"
            type="url"
            placeholder="picture url"
            value={picture_url}
            disabled={disabledValue}
            onChange={(e) => setPictureUrl(e.target.value)}
            required
          />
          <Button
            data-test="sign-up-btn"
            disabled={disabledValue}
            type="submit"
          >
            {buttonText}
          </Button>
        </Form>
        <LinkSignUp>
          <Link data-test="login-link" to={`/`}>
            <p>Switch back to log in</p>
          </Link>
        </LinkSignUp>
      </SigninContainer>
    </ContainerPage>
  );
}