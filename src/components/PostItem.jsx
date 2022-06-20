import React from 'react';
import Button from "./UI/button/Button";

const PostItem = ({post, number, remove}) => {
	return (
		<div>
			<div className="post">
				<div className="post__content">
					<h1>{number}. {post.title}</h1>
					<div>{post.body}</div>
				</div>
				<div className="btn">
					<Button onClick={() => remove(post)}>Delete</Button>
				</div>
			</div>
		</div>
	);
};

export default PostItem;