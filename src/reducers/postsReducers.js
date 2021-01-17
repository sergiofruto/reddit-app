import { FETCH_TOP_POSTS, SELECT_POST } from '../actions/types';

const initialState = {
  posts: []
};

export default function postsReducers(state = initialState, action) {
  switch (action.type) {
    case FETCH_TOP_POSTS:
      return {
        ...state,
        posts: action.payload.data.children,
      }
    default:
      return state;
  }
}