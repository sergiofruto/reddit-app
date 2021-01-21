import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import PostCard from '../PostCard';
import { Aside, Title, PostsList, DismissAllButton } from './style';
import * as actions from '../../actions';

const Sidebar = () => {
  const [animate, setAnimate] = useState(false);
  const posts = useSelector(state => state.reddit.posts.filter(post => !state.reddit.dismissedPosts.includes(post.data.id)));
  const dispatch = useDispatch();

  const handleDismissAllPost = () => {
    //triggers dissmissAnimation for the posts list dissapearing
    setAnimate(true);
    //after animation duration, triggers dismissPost and removes card from state
    setTimeout(() => {
      dispatch(actions.dismissAllPosts());
    }, 450);
  }

  useEffect(() => dispatch(actions.fetchTopPosts()), [dispatch]);

  return (
    <Aside>
      <Title>Reddit Posts</Title>
      <PostsList animate={animate}>
        {posts && posts.map((post, i) => (
          <PostCard key={post.data.id} post={post.data} postIndex={i} />
        ))}
      </PostsList>
        <DismissAllButton onClick={() => handleDismissAllPost()}>
          Dismiss All
        </DismissAllButton>
    </Aside>
  );
};

export default Sidebar;