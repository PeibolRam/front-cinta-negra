import React from "react";

function Card(props) {
  return (
    <>
      <div className="post-preview">
        <a href="post.html">
          <h2 className="post-title">
           {props.title}
          </h2>
        </a>
        <p className="post-meta">
          Posted by
          <a href="#">{props.author}</a>
          on {props.date}
        </p>
      </div>
      <hr />
    </>
  );
}

export default Card;
