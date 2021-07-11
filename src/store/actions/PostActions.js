import { getUsersPromise } from "./UserActions";

export const actionTypes = {
  REQUEST_SENT: "POST_REQUEST_SENT",
  POSTS_RECEIVED: "POSTS_RECEIVED",
  ERROR: "POSTS_ERROR",

  COMMENT_REQUEST: "COMMENT_REQUEST",
  COMMENTS_RECEIVED: "COMMENTS_REVEIVED",
  COMMENTS_ERROR: "COMMENTS_ERROR",
};

export const getPosts = () => {
  return (dispatch) => {
    dispatch({ type: actionTypes.REQUEST_SENT });
    let posts = [];
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((result) => {
        return result.json();
      })
      .then((result) => {
        posts = result;
        return getUsersPromise();
      })
      .then((result) => {
        const users = result;

        const updatedPosts = posts.map((post) => {
          post.createdBy = users.filter((user) => {
            return user.id === post.userId;
          })[0];
          return post;
        });
        dispatch({
          type: actionTypes.POSTS_RECEIVED,
          payload: updatedPosts,
        });
      })
      .catch((error) => {
        dispatch({ type: actionTypes.ERROR });
      });
  };
};

export const getComments = (postId) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.COMMENT_REQUEST });

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((result) => {
        return result.json();
      })
      .then((result) => {
        dispatch({
          type: actionTypes.COMMENTS_RECEIVED,
          payload: result,
        });
      })
      .catch((error) => {
        dispatch({ type: actionTypes.ERROR });
      });
  };
};
