import React, { useState } from 'react';
import { useSwipeable } from "react-swipeable";
import MainContent from '../MainContent';
import Sidebar from '../Sidebar';
import { MainGrid } from './style';

const App = () => {
  const [slideIn, setSlideIn] = useState(false);
  const handlers = useSwipeable({
    onSwipedLeft: () => setSlideIn(false),
    onSwipedRight: () => setSlideIn(true),
  });

  return (
    <MainGrid {...handlers}>
      <Sidebar slideIn={slideIn} />
      <MainContent />
      {console.log(slideIn)}
    </MainGrid>
  );
};

export default App;
