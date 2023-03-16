import React from "react";
import "./blogList.css";
import arrowLeft from "../../resources/arrow-left.png";
import arrowRight from "../../resources/arrow-right.png";

const BlogList = () => {
    return (
        <div className="blog-header">
        <div className="back-button">
            <img src={arrowLeft} alt="Back" className="icon"/>
        </div>
        <div className="blogs-list">Viewing Blog 1 of 1</div>
        <div className="next-button">
        <img src={arrowRight} alt="Next" className="icon"/>
        </div>
        </div>
    );
}

export default BlogList;