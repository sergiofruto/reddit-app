import { FETCH_TOP_POSTS, SELECT_POST, READ_POST, DISMISS_POST } from '../actions/types';

const initialState = {
  posts: [],
  selectedPost: [],
  readPosts: [],
};

const postsReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TOP_POSTS:
      return {
        ...state,
        posts: action.payload,
      }
    case SELECT_POST:
      return {
        ...state,
        selectedPost: action.payload.post,
      }
    case READ_POST:
      return {
        ...state,
        readPosts: [...state.readPosts, action.payload.postId]
      }
    case DISMISS_POST:
      return {
        ...state,
        posts: state.posts.filter((post, index) => index !== action.payload.index),
      }
    default:
      return {
        ...state
      }
  }
}

export default postsReducers;