import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import PostCard from '.';

let mockData = require('./../../__tests__/mock.json');
const mockStore = configureStore([]);

describe('PostCard React-Redux Component', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      reddit: mockData.reddit,
    });
    component = renderer.create(
      <Provider store={store}>
        <PostCard post={mockData.reddit.posts[0].data}/>
      </Provider>
    );
  });

  it('should render with given state from Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should dispatch an action on button click', () => {

  });
});