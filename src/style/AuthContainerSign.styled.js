import styled from "styled-components";

const SigninContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: #333333;
    @media (max-width: 768px) {
        justify-content: flex-start;
    } 
`
export default SigninContainer;