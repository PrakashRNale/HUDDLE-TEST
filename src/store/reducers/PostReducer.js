import { actionTypes } from "../actions/PostActions";

const initialState = {
  isLoading: false,
  posts: [],
  error: false,
  commentsForPost: [],
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REQUEST_SENT:
      return {
        ...state,
        isLoading: true,
      };

    case actionTypes.POSTS_RECEIVED:
      return {
        ...state,
        isLoading: false,
        posts: action.payload,
      };

    case actionTypes.ERROR:
      return {
        ...state,
        isLoading: false,
        error: true,
      };

    case actionTypes.COMMENT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case actionTypes.COMMENTS_RECEIVED:
      return {
        ...state,
        isLoading: false,
        commentsForPost: action.payload,
      };

    case actionTypes.COMMENTS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: true,
      };

    default:
      return state;
  }
};

export default postReducer;
