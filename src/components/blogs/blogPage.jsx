import React from "react";
import "./blogPage.css";
import BlogImage from "../../resources/inaug-blog.jpg";

const BlogPage = ({title_black, title_red, by, content}) => {
    return(
        <div className="container">
            <div className="blog-title">
                <h1 className="title-style">{title_black}
                <span className="red"> {title_red}</span></h1>
                <h5 className="by-line">By {by} </h5>
            </div>
            <div className="blog-image">
                <img src={BlogImage} alt="BlogImg" className="image-style"/>
            </div>
            <div className="blog-content">
            <p className="content-style">
                {content}
                </p>
            </div>
        </div>
    )
}

export default BlogPage;