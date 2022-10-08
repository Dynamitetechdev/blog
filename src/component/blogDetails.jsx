import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    data: blog,
    isPending,
    error,
  } = useFetch(`http://localhost:8080/blog/${id}`);
  const handleDelete = () => {
    fetch(`http://localhost:8080/blog/${id}`, {
      method: "DELETE",
    }).then(() => {
      alert("Blog Deleted");
      navigate("/");
    });
  };
  return (
    <>
      {isPending && <h1>Loading Blog details...</h1>}
      {error && <h1>Could load blog details!</h1>}
      {blog && (
        <div className="blog-details">
          <h1>{blog.title}</h1>
          <p>{blog.body}</p>
          <button onClick={handleDelete}>delete blog</button>
        </div>
      )}
    </>
  );
};

export default BlogDetails;
