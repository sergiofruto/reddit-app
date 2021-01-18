import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import MainContent from '../MainContent';
import Sidebar from '../Sidebar';
import { MainGrid } from './style';
import { fetchTopPosts } from '../../actions'

const App = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.reddit.posts);

  useEffect(() => dispatch(fetchTopPosts()), [dispatch]);

  return (
    <MainGrid>
      <Sidebar posts={posts}/>
      <MainContent />
      {console.log('Uno', posts)}
    </MainGrid>
  );
};

export default App;
