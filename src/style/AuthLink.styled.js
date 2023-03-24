import styled from "styled-components";

const LinkSignUp = styled.div`
    margin-top: 5px;    
    p{    
        text-decoration: none;
        font-family: 'Lato', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        color: #FFFFFF;
        text-decoration: underline;
    }
    a{
        text-decoration: none;
    }
    @media (max-width: 768px) {
        p{
            font-size: 17px;
        }
    }
`

export default LinkSignUp;