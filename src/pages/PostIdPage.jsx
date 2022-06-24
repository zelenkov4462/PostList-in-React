import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";

const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id);
    setPost(response.data);
  });
  const [comments, setComments] = useState([]);
  const [fetchCommentById, isLoadingComment, errorComment] = useFetching(
    async (id) => {
      const response = await PostService.getComById(id);
      setComments(response.data);
    }
  );

  console.log(comments);

  useEffect(() => {
    fetchPostById(params.id);
    fetchCommentById(params.id);
  }, []);

  console.log(post);

  return (
    <div>
      {error && <h1>{error}</h1>}
      <div>
        <h1 style={{ textAlign: "center" }}>
          Вы открыли страницу поста с ID - {params.id}
        </h1>
        <hr />
        {isLoading ? (
          <Loader />
        ) : (
          <h1 style={{ textAlign: "center", color: "brown" }}>{post.title}</h1>
        )}
        <h1>Comments</h1>
        {errorComment && <h1>ComError - {errorComment}</h1>}
        {isLoadingComment ? (
          <Loader />
        ) : (
          <div>
            {comments.map((comment) => (
              <div
                key={comment.id}
                style={{ color: "green", marginTop: "15px" }}
              >
                <h5>{comment.email}</h5>
                <div>{comment.body}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PostIdPage;
