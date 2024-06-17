// components/Home.tsx
import React from "react";
import { useFetch } from "../hooks/useFetch";
import Posts from "./Posts";

const Home: React.FC = () => {
  const { data, error, isLoading } = useFetch(
    "http://localhost:3000/api/hello"
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Home</h1>
      <Posts posts={data.list} />
    </div>
  );
};

export default Home;
