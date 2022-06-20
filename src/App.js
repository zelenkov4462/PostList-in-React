import React, { useState } from "react";

import "./styles/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "aa", body: "zzz" },
    { id: 2, title: "sasJS", body: "vvv" },
    { id: 3, title: "zzz", body: "aaa" },
  ]);

  const [selectedSort, setSelectedSort] = useState("");

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortPost = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "10px" }} />
      <MySelect
        value={selectedSort}
        onChange={sortPost}
        options={[
          { value: "title", name: "По названию" },
          { value: "body", name: "По описанию" },
        ]}
        defaultValue="Сортировка"
      />
      {posts.length ? (
        <PostList remove={removePost} posts={posts} />
      ) : (
        <h1 style={{ textAlign: "center" }}>Посты отсутсвуют</h1>
      )}
    </div>
  );
}
export default App;
