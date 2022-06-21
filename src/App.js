import React, { useState } from "react";

import "./styles/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "aa", body: "zzz" },
    { id: 2, title: "sasJS", body: "vvv" },
    { id: 3, title: "zzz", body: "aaa" },
  ]);

  const [selectedSort, setSelectedSort] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const getSortedPosts = () => {
    console.log("сработала");
    if (selectedSort) {
      return [...posts].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort])
      );
    }
    return posts;
  };

  const sortedPosts = getSortedPosts();

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    // setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "10px" }} />
      <MyInput
        placeholder="Поиск..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <MySelect
        value={selectedSort}
        onChange={sortPosts}
        defaultValue="Сортировка"
        options={[
          { value: "title", name: "По названию" },
          { value: "body", name: "По описанию" },
        ]}
      />

      {posts.length ? (
        // <PostList remove={removePost} posts={posts} />
        <PostList remove={removePost} posts={sortedPosts} />
      ) : (
        <h1 style={{ textAlign: "center" }}>Посты отсутсвуют</h1>
      )}
    </div>
  );
}
export default App;
