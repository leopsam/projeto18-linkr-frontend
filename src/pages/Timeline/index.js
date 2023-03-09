import Header from "../../components/Header";
import BodyStyled from "../../style/Body.styled";
import Post from "../../components/Post";
import Cookies from "js-cookie";
import { mockPost } from "../../mock/mockPost";
import { linkrContext } from "../../contexts/LinkrContext";
import { useContext, useEffect } from "react";
import { getCurrentUser, signIn } from "../../services/linkr-api";
import { useNavigate } from "react-router-dom";

export default function Timeline() {
  const { setToken, setInfoUser } = useContext(linkrContext);
  const navigate = useNavigate();
  const posts = mockPost;

  useEffect(() => {
    async function persistLogin() {
      try {
        const email = Cookies.get("email");
        const password = Cookies.get("password");
        const {
          data: { token },
        } = await signIn({ email, password });
        setToken(token);

        const { data: user } = await getCurrentUser(token);
        setInfoUser(user);

        Cookies.set("email", email, { expires: 7 });
        Cookies.set("password", password, { expires: 7 });
      } catch (error) {
        alert(error);
        navigate("/");
      }
    }
    persistLogin();
  }, []);

  return (
    <>
      <Header />
      <BodyStyled>
        <div>
          {posts.map((post) => (
            <Post key={post.postId} {...post} />
          ))}
        </div>
      </BodyStyled>
    </>
  );
}
