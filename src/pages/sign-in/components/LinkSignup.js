import { Link } from "react-router-dom"
import LinkSignUp from "../../../style/auth/Link.styled";

export default function LinkSignup() {
    
    return (
        <LinkSignUp>
            <Link to={`/signup`}>
                <p>First time? Create an account!</p>
            </Link>                
        </LinkSignUp>
    )
}