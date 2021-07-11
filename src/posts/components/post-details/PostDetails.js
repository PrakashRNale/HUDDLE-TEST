import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import PostComments from "../post-comments/PostComments";
import Item from "../../../shared/components/ui-elements/item/Item";
import Loading from "../../../shared/components/ui-elements/loading/Loading";

import { getComments, getPosts } from "../../../store/actions/PostActions";

import "./PostDetails.scss";

const PostDetails = (post) => {
  const posts = useSelector((state) => state.posts.posts);
  const comments = useSelector((state) => state.posts.commentsForPost);
  const isLoading = useSelector((state) => state.posts.isLoading);

  const postId = useParams().postId;
  const filteredPost = posts.filter((post) => post.id == postId)[0];

  const dispatch = useDispatch();
  useEffect(() => {
    if (!comments.length) {
      dispatch(getComments(postId));
    }
    if (!posts.length) {
      dispatch(getPosts());
    }
  }, [comments, posts]);
  if (isLoading || !filteredPost) {
    return <Loading />;
  }

  return (
    <Item>
      <h2>{filteredPost.title}</h2>
      <h4 className="user-email">Added by {filteredPost.createdBy.name}</h4>
      <ul className="post-comments">
        {comments.map((comment) => (
          <PostComments key={comment.id} comment={comment} />
        ))}
      </ul>
    </Item>
  );
};

export default PostDetails;
