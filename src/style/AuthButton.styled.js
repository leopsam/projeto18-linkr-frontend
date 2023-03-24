import styled from "styled-components";

const Button = styled.button`
  width: 429px;
  height: 65px;
  background-color: #1877f2;
  border-radius: 6px;
  font-family: "Oswald", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 27px;
  color: #ffffff;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 0;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 330px;
    height: 55px; 
    font-size: "22px";  
  }
`;

export default Button;
