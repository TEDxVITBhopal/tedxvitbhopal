import React from "react";
import "./blogPage.css";
import BlogImage from "../../resources/inaug-blog.jpg";

const BlogPage = () => {
    return(
        <>
            <div className="blog-title">
                <h1 className="title-style">The Beauty of Metamorphosis: <span className="red">Discover Your Own Cosmic Butterfly</span></h1>
                <h5 className="by-line">By Atharv Pal and Astha Tripathi </h5>
            </div>
            <div className="blog-image">
                <img src={BlogImage} alt="BlogImg" className="image-style"/>
            </div>
            <div className="blog-content">
                <p className="content-style">
                In 2009, the Hubble Space Telescope's Wide Field Camera 3 captured an image of a nebula that is now known as the Butterfly Nebula. The image showcases the stunning beauty of a dying star shedding its outer layers into space, taking on the shape of a butterfly. It can be seen as a metaphor for transformation and growth, reflecting the natural order of the universe. Let’s call it –  "Cosmic Butterfly"<br /><br />
                The "Cosmic Butterfly" is a powerful metaphor. It is indeed cosmic in its own sense; interpretations of the word "cosmos" as a metaphor are vast, ranging from a grand stage of life to a mirror for one to look inside. Whatever the interpretation may be, our new metaphor provides us with a framework for interpreting and connecting ourselves in our own language with a world far beyond our comprehension.<br /><br />
                At TEDx VIT Bhopal, we embrace the “Cosmic Butterfly” metaphor as a symbol of personal transformation and growth with the intention of motivating people to discover their own potential and have a positive influence on the world. It also reminds us of the beauty and impermanence of life, as well as the endless potential for growth and change. No matter how small or large their ideas may seem, we think everyone has the ability to bring about positive change. <br /><br />
                Our chapter's aim is to create a space where individuals can explore their own potential, develop their ideas, and share their stories with the world. By embracing the transformative potential of the “Cosmic Butterfly”, we hope to inspire individuals to step outside of their comfort zones and pursue their passions and ideas with confidence and purpose. Everyone has a special story to tell and ideas to share, and we believe that by building a community of passionate and curious people, we can collectively change the world, one idea at a time. Just like the “Cosmic Butterfly”, we too have the ability to shed our old layers and emerge as something new and beautiful.<br /><br />
                We come together as a community of passionate and curious individuals, sharing personal transformations and stories with one another that can inspire each other to reach new heights and achieve our greatest potential. Our chapter and metaphor are about the growth and transformation of ideas and people through the lens of this enchanting symbol. Together, we have the power to change things and build a better future for future generations as well as ourselves. At TEDx VIT Bhopal, we believe it is important for individuals to grow at their own pace, gradually writing their own stories. And as you write your story, our chapter's "Cosmic Butterfly" will fly out to invite you. There is a quote that encapsulates the butterfly effect in general terms, which goes like this— "Sometimes, when I consider what tremendous consequences come from little things, I am tempted to think... there are no little things."
                </p>
            </div>
        </>
    )
}

export default BlogPage;