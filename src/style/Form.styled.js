import styled from "styled-components";

const Form = styled.form`
    display: flex;   
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    @media (max-width: 768px) {
        margin: 10px 0;
    }
`

export default Form;