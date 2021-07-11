import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import PostList from "../../components/post-list/PostsList";
import Loading from "../../../shared/components/ui-elements/loading/Loading";
import { getPosts } from "../../../store/actions/PostActions";

const Posts = () => {
  const posts = useSelector((state) => state.posts.posts);
  const isLoading = useSelector((state) => state.posts.isLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!posts.length) {
      dispatch(getPosts());
    }
  }, [posts]);
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="posts">
      <PostList posts={posts} />
    </div>
  );
};

export default Posts;
