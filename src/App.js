import React, { useMemo, useState } from "react";

import "./styles/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";
import PostFilter from "./components/PostFilter";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "aa", body: "zzz" },
    { id: 2, title: "sasJS", body: "vvv" },
    { id: 3, title: "zzz", body: "aaa" },
  ]);

  // const [selectedSort, setSelectedSort] = useState("");
  // const [searchQuery, setSearchQuery] = useState("");

  const [filter, setFilter] = useState({ sort: "", query: "" });

  // const getSortedPosts = () => {
  //   console.log("сработала");
  //   if (selectedSort) {
  //     return [...posts].sort((a, b) =>
  //       a[selectedSort].localeCompare(b[selectedSort])
  //     );
  //   }
  //   return posts;
  // };

  // const sortedPosts = getSortedPosts();

  const sortedPosts = useMemo(() => {
    console.log("сработала");
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query)
    );
  }, [filter.query, sortedPosts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  // const sortPosts = (sort) => {
  //   setSelectedSort(sort);
  //   // setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  // };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "10px" }} />
      <PostFilter filter={filter} setFilter={setFilter} />

      {sortedAndSearchedPosts.length ? (
        // <PostList remove={removePost} posts={posts} />
        // <PostList remove={removePost} posts={sortedPosts} />
        <PostList remove={removePost} posts={sortedAndSearchedPosts} />
      ) : (
        <h1 style={{ textAlign: "center" }}>Посты не найдены</h1>
      )}
    </div>
  );
}
export default App;
