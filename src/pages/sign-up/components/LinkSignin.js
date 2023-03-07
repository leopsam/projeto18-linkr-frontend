import { Link } from "react-router-dom"
import LinkSignUp from "../../../style/auth/Link.styled";

export default function LinkSignup() {
    
    return (
        <LinkSignUp>
            <Link to={`/`}>
                <p>Switch back to log in</p>
            </Link>                
        </LinkSignUp>
    )
}