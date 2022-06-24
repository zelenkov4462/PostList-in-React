import About from "../pages/About";
import Posts from "../pages/Posts";

import PostIdPage from "../pages/PostIdPage";
import React from "react";
import Error from "../pages/Error";
import Login from "../pages/Login";

export const privateRoutes = [
  { path: "/", element: <Posts /> },
  { path: "/about", element: <About /> },
  { path: "/posts", element: <Posts /> },
  { path: "/posts/:id", element: <PostIdPage /> },
  { path: "/*", element: <Posts /> },
];

export const publicRoutes = [
  { path: "/login", element: <Login /> },
  // { path: "/*", element: <Login /> },
];
