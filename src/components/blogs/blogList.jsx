import React from "react";
import "./blogList.css";
import arrowLeft from "../../resources/arrow-left.png";
import arrowRight from "../../resources/arrow-right.png";
import ListIcon from "../../resources/list.png";

const BlogList = () => {
    return (
        <div className="blog-header">
        <div className="back-button">
            <img src={arrowLeft} alt="Back" className="icon"/>
        </div>
        <div className="blogs-list">
            <img src={ListIcon} alt="" className="icon" />
            <span className="button-text">List</span>
        </div>
        <div className="next-button">
        <img src={arrowRight} alt="Next" className="icon"/>
        </div>
        </div>
    );
}

export default BlogList;