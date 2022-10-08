import React from "react";
import BlogList from "./blogList";
import useFetch from "./useFetch";

const HomeBlog = () => {
  const { data, isPending, error } = useFetch("http://localhost:8080/blog");
  return (
    <div className="blog-page">
      {error && <h1>{error}</h1>}
      {isPending && <h1>Loading...</h1>}
      {data && <BlogList data={data} />}
    </div>
  );
};

export default HomeBlog;
