import React from "react";
import BlogList from "./blogList";
import BlogPage from "./blogPage";
import Blog1Text from "./content/blog1";
import "./blogComponent.css";

const BlogComponent = () => {
    return(
        <div className="container">
        <BlogList />
        <BlogPage 
            title_black={"The Beauty of Metamorphosis:"}
            title_red={"Discover Your Own Cosmic Butterfly"}
            by={"Atharv Pal and Astha Tripathi"}
            content={Blog1Text}/>
        </div>
    );
}

export default BlogComponent;