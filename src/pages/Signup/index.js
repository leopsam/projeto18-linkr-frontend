import Button from "../../style/button.styled";
import Input from "../../style/Input.styled";
import ContainerPage from "../../style/ContainerPage.styled";
import SigninContainer from "../../style/ContainerSignin.styled";
import TitleContainer from "../../style/ContainerTitle.styled";
import LinkSignUp from "../../style/Link.styled";
import Form from "../../style/Form.styled";
import { linkrContext } from "../../contexts/LinkrContext";
import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signUp } from "../../services/linkr-api";

export default function Login() {
  const { botaoLoading } = useContext(linkrContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [pictureUrl, setPictureUrl] = useState("");
  const [buttonText, setButtonText] = useState("Sign Up");
  const [disabledValue, setDisabledValue] = useState("");
  const navegate = useNavigate();

  const signup = async (e) => {
    e.preventDefault();
    setButtonText(botaoLoading);
    setDisabledValue("disabled");

    try {
      await signUp({ email, password, username, pictureUrl });

      navegate("/");
      alert("successfully registered user");
    } catch (error) {
      setButtonText("Sign Up");
      setDisabledValue("");
      alert(error);
    }
  };

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
            value={pictureUrl}
            disabled={disabledValue}
            onChange={(e) => setPictureUrl(e.target.value)}
            required
          />
          <Button
            data-test="sing-up-btn"
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
