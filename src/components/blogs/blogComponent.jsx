import React from "react";
import BlogList from "./blogList";
import BlogPage from "./blogPage";
import "./blogComponent.css";

const BlogComponent = () => {
    return(
        <div className="container">
        <BlogList />
        <BlogPage />
        </div>
    );
}

export default BlogComponent;