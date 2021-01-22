import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import MainContent from '.';

let mockData = require('./../../__tests__/mock.json');
const mockStore = configureStore([]);

describe('MainContent React-Redux Component', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      reddit: mockData.reddit,
    });

    store.dispatch = jest.fn();

    component = renderer.create(
      <Provider store={store}>
        <MainContent post={mockData.reddit.posts[0].data} />
      </Provider>
    );
  });

  it('should render with given state from Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});