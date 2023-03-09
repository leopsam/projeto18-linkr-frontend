import { ReactTagify } from "react-tagify";
import StyledPost from "./styled";
import Meta from "../Meta";
import { IconContext } from "react-icons";
import { FaRegHeart } from "react-icons/fa";
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
  return (
    <StyledPost data-test="post">
      <div>
        <img src={pictureUrl} alt={username} />

        <IconContext.Provider
          value={{
            color: "#FFFFFF",
            size: "20px",
            cursor: "pointer"
          }}>
          <FaRegHeart />
        </IconContext.Provider>

        <p>14 likes</p>
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
