import { ReactTagify } from "react-tagify";
import styled from "styled-components";

import Meta from "./Meta";

import { useState } from "react";
import LikeIcon from "./likeIcon";

import { FaPencilAlt, FaTrash } from "react-icons/fa";
import { IconContext } from "react-icons";

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
        <div>
          <h2>{username}</h2>
          <IconContext.Provider
            value={{
              color: "#fff",
              size: "16px",
              cursor: "pointer"
            }}>
            <FaPencilAlt />
          </IconContext.Provider>
          <IconContext.Provider
            value={{
              color: "#fff",
              size: "16px",
              cursor: "pointer"
            }}>
            <FaTrash />
          </IconContext.Provider>
        </div>
        <ReactTagify tagStyle={{ color: "#fff", fontWeight: 700 }}>
          <p>{content}</p>
        </ReactTagify>
        
      </div>
    </StyledPost>
  );
}

const StyledPost = styled.div`
  width: 611px;
  height: 276px;
  margin-bottom: 29px;
  background: #171717;
  border-radius: 16px;
  padding: 18px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  h2 {
    color: #fff;
    font-size: 19px;
    line-height: 23px;
    margin-right: auto;
  }
  p {
    color: #b7b7b7;
    font-size: 17px;
    line-height: 20px;
    margin: 7px 0 10px;
  }
  & > div:first-of-type {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50px;
    img {
      display: block;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-bottom: 19px;
    }
    p {
      font-size: 11px;
      line-height: 13px;
      text-align: center;
      color: #ffffff;
      margin-top: 4px;
    }
  }
  & > div > div {
    display: flex;
    gap: 10px;
  }
  @media (max-width: 768px) {
    width: 100%;
    border-radius: 0;
    } 
`;