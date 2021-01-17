import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
//Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { fetchTopPosts } from './actions'

const store = createStore(rootReducer, applyMiddleware(thunk));
store.dispatch(fetchTopPosts());

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
