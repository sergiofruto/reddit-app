import { combineReducers } from 'redux';
import postsReducers from './postsReducers';

const rootReducer = combineReducers({
  reddit: postsReducers
});

export default rootReducer;