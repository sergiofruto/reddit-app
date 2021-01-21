import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import PostCard from '../PostCard';
import { Aside, Title, DismissAllButton } from './style';
import { fetchTopPosts } from '../../actions'

const Sidebar = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.reddit.posts);

  useEffect(() => dispatch(fetchTopPosts()), [dispatch]);

  return (
    <Aside>
      <Title>Reddit Posts</Title>
      <div className="post-list">
        {posts && posts.map((post, i) => (
          <PostCard key={post.data.id} post={post.data} postIndex={i} />
        ))}
      </div>
      <DismissAllButton>
        Dismiss All
      </DismissAllButton>
    </Aside>
  );
};

export default Sidebar;