import React from "react";
import CommentCard from "../CommentCard/CommentCard";
import "./Comment.scss";

const Comment = () => {
  return (
    <section id="comment" className="comment">
      <CommentCard
        text={`“Testimonials provide a sense of what it's like to work with you or use your products. Change the text and add your own."`}
        title="Alexa Young, CA"
      />
      <CommentCard
        text={`"A great testimonial can boost your brand’s image. Click to edit and add your own."`}
        title="Morgan James, NY"
      />
      <CommentCard
        text={`“Have customers review you and share what they had to say. Click to edit and add their testimonial.”`}
        title="Lisa Driver, MI"
      />
    </section>
  );
};

export default Comment;
