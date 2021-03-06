import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers'
import { loadState, saveState } from './../localStorage';

//checks if there is a previous state in localstorage
const persistedState = loadState();

const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(
    applyMiddleware(thunk),
  )
);

//each time that our store changes, we save these changes in localstorage
store.subscribe(() => {
  saveState(store.getState());
});

export default store;