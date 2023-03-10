import { useContext, useState } from "react";
import { linkrContext } from "../../contexts/LinkrContext";
import { createPost } from "../../services/linkr-api";
import Button from "../../style/button.styled";
import UserPictureStyled from "../../style/UserPicture.styled";
import { CardStyled, FormStyled, InputStyled, TextAreaStyled } from "./styled";

const PostCreator = () => {
  const [content, setContent] = useState("");
  const [sharedUrl, setSharedUrl] = useState("");
  const [disabledValue, setDisabledValue] = useState(false);
  const [buttonText, setButtonText] = useState("Publish");
  const {
    infoUser: { pictureUrl, username },
    botaoLoading,
    token,
  } = useContext(linkrContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisabledValue(true);
    setButtonText(botaoLoading);

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
    <CardStyled>
      <UserPictureStyled src={pictureUrl} alt={username} />
      <FormStyled onSubmit={handleSubmit}>
        <h3>What are you going to share today?</h3>
        <InputStyled value={sharedUrl} onChange={(e) => setSharedUrl(e.target.value)} placeholder="http://..." />
        <TextAreaStyled
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Awesome article about #javascript"
        />
        <Button disabled={disabledValue} width={"112px"} height={"31px"} fontSize={"14px"}>
          <p>{buttonText}</p>
        </Button>
      </FormStyled>
    </CardStyled>
  );
};

export default PostCreator;
