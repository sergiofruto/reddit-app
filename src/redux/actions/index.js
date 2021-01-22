import axios from 'axios';
import { FETCH_TOP_POSTS, SELECT_POST, READ_POST, DISMISS_POST, DISMISS_ALL_POSTS, TOGGLE_SIDEBAR } from './types.js';

const apiUrl = 'https://www.reddit.com/r/all/top.json?limit=1';

export const selectPost = post => {
  return {
    type: SELECT_POST,
    payload: {
      post
    }
  }
};

export const readPost = postId => {
  return {
    type: READ_POST,
    payload: {
      postId
    }
  }
};

export const dismissPost = postId => {
  return {
    type: DISMISS_POST,
    payload: {
      postId
    }
  }
};

export const dismissAllPosts = () => {
  return {
    type: DISMISS_ALL_POSTS,
    payload: {
    }
  }
};

export const toggleSideBar = sidebar => {
  return {
    type: TOGGLE_SIDEBAR,
    payload: {
      sidebar
    }
  }
};

export const fetchTopPosts = () => {
  return (dispatch) => {
    return axios.get(apiUrl)
      .then(response => {
        return response.data
      })
      .then(posts => {
        dispatch({
          type: FETCH_TOP_POSTS,
          payload: posts.data.children
        })
      })
      .catch(error => {
        throw (error);
      });
  };
};