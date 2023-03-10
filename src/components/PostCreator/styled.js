import styled from "styled-components";

export const CardStyled = styled.div`
  width: 611px;
  height: 209px;
  display: flex;
  padding-left: 18px;
  padding-top: 16px;
  padding-right: 22px;
  padding-bottom: 16px;
  align-items: flex-start;
  justify-content: space-between;
  background-color: white;
  margin-bottom: 29px;
  border-radius: 16px;
  h3 {
    width: 100%;
    text-align: left;
    font-size: 20px;
    font-weight: 300;
    font-family: "Lato", sans-serif;
  }
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  p {
    font-size: 20px;
    font-family: "Lato", sans-serif !important;
  }
  width: 502px;
  height: 100%;
`;

export const TextAreaStyled = styled.textarea`
  border: none;
  resize: none;
  font-size: 15px;
  width: 100%;
  height: 66px;
  background-color: #efefef;
  border-radius: 5px;
  padding-left: 12px;
  padding-right: 12px;
  ::placeholder {
    color: #949494;
  }
`;

export const InputStyled = styled.input`
  border: none;
  font-size: 15px;
  height: 30px;
  width: 100%;
  padding-left: 12px;
  padding-right: 12px;
  background-color: #efefef;
  border-radius: 5px;
  ::placeholder {
    color: #949494;
  }
`;
