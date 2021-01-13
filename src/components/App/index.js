import React, { Component } from 'react';
import MainContent from '../MainContent';
import Sidebar from '../Sidebar';

class App extends Component {
  render() {
    return (
      <div>
        <Sidebar />
        <MainContent />
      </div>
    );
  }
};

export default App;