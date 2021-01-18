import React from 'react';
// import { useSelector, useDispatch } from "react-redux";
import MainContent from '../MainContent';
import Sidebar from '../Sidebar';
import { MainGrid } from './style';
// import { fetchTopPosts } from '../../actions'

const App = () => {
  return (
    <MainGrid>
      <Sidebar />
      <MainContent />
    </MainGrid>
  );
};

export default App;
