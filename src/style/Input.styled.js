import styled from "styled-components";

const Input = styled.input`
  box-sizing: border-box;
  width: 429px;
  height: 65px;
  background-color: #ffffff;
  border: none;
  border-radius: 5px;
  margin: 6px 0;
  font-family: "Oswald", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 27px;
  line-height: 40px;
  color: #000000;
  padding-left: 10px;
  ::placeholder {
    color: #9f9f9f;
  }
  @media (max-width: 768px) {
    width: 330px;
    height: 55px;
  }
`;
export default Input;
