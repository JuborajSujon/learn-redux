import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./postSlice";

const PostView = () => {
  const { isLoading, posts, error } = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  return (
    <div>
      <h1>Posts</h1>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      <section>
        {posts &&
          posts.map((post) => (
            <div key={post.id}>
              <article>
                <h4>{post.title}</h4>
                <p>{post.body}</p>
              </article>
            </div>
          ))}
      </section>
    </div>
  );
};

export default PostView;
