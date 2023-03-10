import { ReactTagify } from "react-tagify";
import StyledPost from "./styled";
import Meta from "../Meta";
import { IconContext } from "react-icons";
import { FaRegHeart } from "react-icons/fa";
import { RiHeartFill } from "react-icons/ri";
import { useState } from "react";
export default function Post({
  id,
  content,
  sharedUrl,
  username,
  pictureUrl,
  url,
  title,
  image,
  description
}) {

  const [liked, setLiked] = useState(true);
  const [likesQty, setLikesQty] = useState(5);

  function changeLike() {
    setLiked(!liked)
    if (liked) {
      setLikesQty(likesQty - 1);
    } else {
      setLikesQty(likesQty + 1)
    }
  }

  return (
    <StyledPost data-test="post">
      <div>
        <img src={pictureUrl} alt={username} />
        
        

  {liked? 
    <div onClick={changeLike}>
    <IconContext.Provider
      value={{
        color: "#AC0000",
        size: "20px",
        cursor: "pointer",
      }}>
      <RiHeartFill />
    </IconContext.Provider>
    </div>
    :
    <div onClick={changeLike}>
    <IconContext.Provider
    value={{
      color: "#FFFFFF",
      size: "20px",
      cursor: "pointer",
    }}>
    <FaRegHeart />
  </IconContext.Provider>
  </div>
}


        <p>{likesQty} likes</p>
      </div>
      <div>
        <h2>{username}</h2>
        <ReactTagify tagStyle={{ color: "#fff", fontWeight: 700 }}>
          <p>{content}</p>
        </ReactTagify>
        <Meta title={title} description={description} url={url} image={image} />
      </div>
    </StyledPost>
  );
}
