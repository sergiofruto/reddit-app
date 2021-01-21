import { FETCH_TOP_POSTS, SELECT_POST, READ_POST, DISMISS_POST, DISMISS_ALL_POSTS } from '../actions/types';

const initialState = {
  posts: [],
  selectedPost: [],
  readPosts: [],
  dismissedPosts: [],
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
        readPosts: [...state.readPosts, action.payload.postId],
      }
    case DISMISS_POST:
      return {
        ...state,
        dismissedPosts: [...state.dismissedPosts, action.payload.postId],
      }
    case DISMISS_ALL_POSTS:
      return {
        ...state,
        dismissedPosts: state.posts.map(post => post.data.id),
      }
    default:
      return {
        ...state
      }
  }
}

export default postsReducers;