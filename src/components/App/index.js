import React from 'react';
import { useDispatch } from "react-redux";
import { useSwipeable } from "react-swipeable";
import MainContent from '../MainContent';
import Sidebar from '../Sidebar';
import { MainGrid } from './style';
import * as actions from '../../redux/actions';

const App = () => {
  const dispatch = useDispatch();

  const handlers = useSwipeable({
    onSwipedLeft: () => dispatch(actions.toggleSideBar(false)),
    onSwipedRight: () => dispatch(actions.toggleSideBar(true)),
  });

  return (
    <MainGrid {...handlers}>
      <Sidebar />
      <MainContent />
    </MainGrid>
  );
};

export default App;
