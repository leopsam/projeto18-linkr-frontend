import { IconContext } from "react-icons";
import { FaRegHeart } from "react-icons/fa";
import { RiHeartFill } from "react-icons/ri";

export default function LikeIcon({ liked, changeLike }) {
  return liked ? (
    <div onClick={changeLike}>
      <IconContext.Provider
        value={{
          color: "#AC0000",
          size: "20px",
          cursor: "pointer"
        }}>
        <RiHeartFill />
      </IconContext.Provider>
    </div>
  ) : (
    <div onClick={changeLike}>
      <IconContext.Provider
        value={{
          color: "#FFFFFF",
          size: "20px",
          cursor: "pointer"
        }}>
        <FaRegHeart />
      </IconContext.Provider>
    </div>
  );
}
