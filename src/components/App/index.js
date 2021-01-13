import React, { Component } from 'react';
import MainContent from '../MainContent';
import Sidebar from '../Sidebar';
import { MainGrid } from './style';

class App extends Component {
  render() {
    return (
      <MainGrid>
        <Sidebar />
        <MainContent />
      </MainGrid>
    );
  }
};

export default App;