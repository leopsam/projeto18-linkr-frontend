import { useState } from "react";
import { createPost } from "../services/linkr-api";
import styled from "styled-components";
import Cookies from "js-cookie";
import ButtonLoading from "../components/ButtonLoading";

const PostCreator = () => {
  const [content, setContent] = useState("");
  const [sharedUrl, setSharedUrl] = useState("");
  const [disabledValue, setDisabledValue] = useState(false);
  const [buttonText, setButtonText] = useState("Publish");
  const picture_url = Cookies.get("picture_url");
  const username = Cookies.get("username");
  const token = Cookies.get("token");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisabledValue(true);
    setButtonText(ButtonLoading);

    // falta fazer um parser de context com regex, encontrar as hashtags e enviar request pra criar da ligacao
    // na table hashtag_posts, estou com sono logo paro por aqui

    try {
      console.log("sharedUrl", sharedUrl);
      await createPost({ content, sharedUrl, token });
    } catch (error) {
      alert(error);
    }

    setContent("");
    setSharedUrl("");
    setDisabledValue(false);
    setButtonText("Publish");
    //falta charmar de novo a funcao fetchData pra atualizar os posts (ja tem getPosts em services)
  };

  return (
    <CardStyled data-test="publish-box">
      <img src={picture_url} alt={username} />
      <Form onSubmit={handleSubmit}>
        <h3>What are you going to share today?</h3>
        <InputStyled 
          data-test="link"
          value={sharedUrl} 
          onChange={(e) => setSharedUrl(e.target.value)} 
          placeholder="http://..." 
        />
        <TextAreaStyled
        data-test="description"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Awesome article about #javascript"
        />
        <Button data-test="publish-btn" disabled={disabledValue}>{buttonText}</Button>
      </Form>
    </CardStyled>
  );
};

export default PostCreator;

const CardStyled = styled.div`
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
  img{
    height: 50px;
    width: 50px;
    border-radius: 50%;
  }
  @media (max-width: 768px) {
    border-radius: 0;
    width: 100%;
    img{
      display: none;
    }
  } 
`
const Form = styled.form`
  display: flex;
  flex-direction: column; 
  align-items: flex-end;
  width: 502px;
  height: 100%;
  h3 {
    width: 100%;
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    font-family: "Lato", sans-serif;
    margin-bottom: 15px;    
  }
  @media (max-width: 768px) {   
    h3{
      text-align: center;
    }
  } 
`
const TextAreaStyled = styled.textarea`
  border: none;
  resize: none;
  font-size: 15px;
  width: 100%;
  height: 66px;
  background-color: #efefef;
  border-radius: 5px;
  padding-left: 12px;
  padding-right: 12px;
  margin: 5px 0;
  ::placeholder {
    color: #949494;
  }
`
const InputStyled = styled.input`
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
`
const Button = styled.button`
  width: 112px;
  height: 31px;
  background-color: #1877f2;
  border-radius: 5px;
  font-family: "lato", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  color: #ffffff;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`