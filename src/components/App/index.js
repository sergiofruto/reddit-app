import React from 'react';
import MainContent from '../MainContent';
import Sidebar from '../Sidebar';
import { MainGrid } from './style';

const App = () => {
  return (
    <MainGrid>
      <Sidebar />
      <MainContent />
    </MainGrid>
  );
};

export default App;
