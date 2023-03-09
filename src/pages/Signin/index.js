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
import { getCurrentUser, signIn } from "../../services/linkr-api";

export default function Login() {
  const { botaoLoading, setInfoUser, setToken } = useContext(linkrContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [buttonText, setButtonText] = useState("Log In");
  const [disabledValue, setDisabledValue] = useState("");
  const navigate = useNavigate();

  const signin = async (e) => {
    e.preventDefault();
    setButtonText(botaoLoading);
    setDisabledValue("disabled");

    try {
      const {
        data: { token },
      } = await signIn({ email, password });
      setToken(token);

      const { data: user } = await getCurrentUser(token);
      setInfoUser(user);

      navigate("/timeline");
    } catch (error) {
      setButtonText("Log In");
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
          <Button
            data-test="sign-in-btn"
            disabled={disabledValue}
            type="submit"
          >
            {buttonText}
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
