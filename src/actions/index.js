import axios from 'axios';
import { FETCH_TOP_POSTS, SELECT_POST } from './types.js';

const apiUrl = 'https://www.reddit.com/r/all/top.json?limit=50';

export const selectPost = post => {
  return {
    type: SELECT_POST,
    payload: {
      post
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
          payload: posts
        })
      })
      .catch(error => {
        throw (error);
      });
  };
};