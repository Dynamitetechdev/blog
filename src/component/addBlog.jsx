import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const blog = { title, body };
    fetch("http://localhost:8080/blog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blog),
    }).then(() => {
      setIsLoading(false);
      alert("New Blog Added");
      navigate("/");
    });
  };

  return (
    <div className="blog-page">
      <h2>add blog</h2>
      <form onSumbit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <button onClick={handleSubmit}>
          {isLoading ? "Adding Blog..." : "Add Blog"}
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
