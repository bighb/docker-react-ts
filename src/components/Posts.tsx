// components/Posts.tsx
import React from "react";

interface Post {
  customerNumber: number;
  customerName: string;
  contactLastName: string;
}

interface PostsProps {
  posts: Post[];
}

const Posts: React.FC<PostsProps> = ({ posts }) => (
  <ul>
    {posts.map((post) => (
      <li key={post.customerNumber}>
        <h2>{post.customerName}</h2>
        <p>{post.contactLastName}</p>
      </li>
    ))}
  </ul>
);

export default Posts;
