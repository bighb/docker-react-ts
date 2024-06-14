// components/Posts.tsx
import React from "react";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostsProps {
  posts: Post[];
}

const Posts: React.FC<PostsProps> = ({ posts }) => (
  <ul>
    {posts.map((post) => (
      <li key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </li>
    ))}
  </ul>
);

export default Posts;
