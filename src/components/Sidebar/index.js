import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import PostCard from '../PostCard';
import { Aside, Title, DismissAllButton } from './style';
import * as actions from '../../actions';

const Sidebar = () => {
  const posts = useSelector(state => state.reddit.posts);
  const dispatch = useDispatch();

  const handleDismissAllPost = () => {
    dispatch(actions.dismissAllPosts());
  }

  useEffect(() => dispatch(actions.fetchTopPosts()), [dispatch]);

  return (
    <Aside>
      <Title>Reddit Posts</Title>
      <div className="post-list">
        {posts && posts.map((post, i) => (
          <PostCard key={post.data.id} post={post.data} postIndex={i} />
        ))}
      </div>
      {posts && 
        <DismissAllButton onClick={() => handleDismissAllPost()}>
          Dismiss All
        </DismissAllButton>
      }
    </Aside>
  );
};

export default Sidebar;