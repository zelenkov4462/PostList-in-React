import React from "react";
import Button from "./UI/button/Button";
import { useNavigate } from "react-router-dom";

const PostItem = ({ post, number, remove }) => {
  const router = useNavigate();
  console.log(router);
  return (
    <div>
      <div className="post">
        <div className="post__content">
          <h1>
            {post.id}. {post.title}
          </h1>
          <div>{post.body}</div>
        </div>
        <div className="btn">
          <Button onClick={() => router(`/posts/${post.id}`)}>Open</Button>
          <Button onClick={() => remove(post)}>Delete</Button>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
