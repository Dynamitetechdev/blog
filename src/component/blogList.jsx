import React from "react";
import { Link } from "react-router-dom";
import useFetch from "./useFetch";

const BlogList = ({ data }) => {
  const blogs = data.map((each) => (
    <div className="blog" key={each.id}>
      <h1>{each.title}</h1>
      <button>
        <Link to={`/blogdetails/${each.id}`}>Read More</Link>
      </button>
    </div>
  ));
  return (
    <div className="blog-list">
      <p>{blogs}</p>
    </div>
  );
};

export default BlogList;
