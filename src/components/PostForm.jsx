import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import Button from "./UI/button/Button";

const PostForm = ({create}) => {
	const [post, setPost] = useState({title:'', body: ''})
	
	const addNewPost = (e) => {
		e.preventDefault();
		const newPost = {
			...post, id: Date.now()
		}
		create(newPost)
		setPost({title: '', body: ''})
		
	}
	return (
		<form>
			<MyInput
				value={post.title}
				onChange={e => setPost({...post, title: e.target.value})}
				placeholder='Название поста'/>
			<MyInput
				value={post.body}
				onChange={e => setPost({...post, body: e.target.value})}
				placeholder='Описание поста'/>
			<Button onClick={addNewPost}>Create post</Button>
		</form>
	);
};

export default PostForm;