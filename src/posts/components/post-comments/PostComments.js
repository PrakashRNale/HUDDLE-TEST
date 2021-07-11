import React from "react";

import "./PostComments.scss";
const PostComments = ({ comment }) => {
  return (
    <li className="post-comments">
      <h3>{comment.name}</h3>
      <p>{comment.body}</p>
      <h5>{comment.email}</h5>
    </li>
  );
};

export default PostComments;
