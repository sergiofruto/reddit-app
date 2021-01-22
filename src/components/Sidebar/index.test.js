import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import SideBar from '.';

let mockData = require('./../../__tests__/mock.json');
const mockStore = configureStore([]);

describe('SideBar React-Redux Component', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      reddit: mockData.reddit,
    });

    store.dispatch = jest.fn();

    component = renderer.create(
      <Provider store={store}>
        <SideBar />
      </Provider>
    );

  });
  it('should render with given state from Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});