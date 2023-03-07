import SignInForm from "./components/Form";
import LinkSignup from "./components/LinkSignup";
import ContainerPage from "../../style/auth/ContainerPage.styled";
import SigninContainer from "../../style/auth/ContainerSignin.styled";
import TitleContainer from "../../style/auth/ContainerTitle.styled";

export default function Login() {
        
    return (
        <ContainerPage>
            <TitleContainer>
                <div>
                    <h1>linkr</h1>
                    <h2>save, share and discover the best links on the web</h2>
                </div>
            </TitleContainer>
            <SigninContainer>            
                <SignInForm />
                <LinkSignup />                    
            </SigninContainer>
        </ContainerPage>
        
    )
}