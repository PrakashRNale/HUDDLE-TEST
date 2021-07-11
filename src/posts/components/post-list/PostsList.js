import React from "react";
import { Link, useHistory } from "react-router-dom";
import Card from "../../../shared/components/ui-elements/card/Card";

import "./PostsList.scss";

const PostList = (props) => {
  const history = useHistory();

  const postClickhandler = (postId) => {
    history.push(`/post/${postId}`);
  };

  return (
    <ul className="post-list">
      {props.posts.map((post) => (
        <Card>
          <div
            className="post-item center"
            onClick={() => postClickhandler(post.id)}
          >
            <h5>{post.title}</h5>
            <Link
              onClick={(e) => e.stopPropagation()}
              to={`/user/${post.createdBy.id}`}
            >
              {post.createdBy.name}
            </Link>
          </div>
        </Card>
      ))}
    </ul>
  );
};

export default PostList;
