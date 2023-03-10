import { ReactTagify } from "react-tagify";
import StyledPost from "./styled";
import Meta from "../Meta";

import { useState } from "react";
import LikeIcon from "../LikeIcon";
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
    setLiked(!liked);
    if (liked) {
      setLikesQty(likesQty - 1);
    } else {
      setLikesQty(likesQty + 1);
    }
  }

  return (
    <StyledPost data-test="post">
      <div>
        <img src={pictureUrl} alt={username} />
        <LikeIcon liked={liked} changeLike={changeLike} />
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
