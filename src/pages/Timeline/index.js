import Header from "../../components/Header";
import BodyStyled from "../../style/Body.styled";
import Post from "../../components/Post";
import { mockPost } from "../../mock/mockPost";
export default function Timeline() {
  const posts = mockPost;
  return (
    <>
      <Header />
      <BodyStyled>
        <div>
          {posts.map(post => (
            <Post key={post.postId} {...post} />
          ))}
        </div>
      </BodyStyled>
    </>
  );
}
