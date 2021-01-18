import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import * as actions from '../../actions';

import { Card, CardTop, CardBody, CardBottom, Author, UnreadMarker } from './style';

const PostCard = ({ post }) => {
  const readPost = useSelector(state => state.reddit.readPosts);
  const dispatch = useDispatch();
  const [unread, setUnread] = useState(true);

  const handleSelectPost = (e, post) => {
    dispatch(actions.selectPost(post));
    dispatch(actions.readPost(post.id));
  };

  const checkReadStatus = (readPost, postId) => {
    if (readPost.indexOf(postId) > -1) {
      setUnread(false);
    }
  };

  useEffect(() => checkReadStatus(readPost, post.id), [readPost, post.id]);

  return (
    <Card onClick={(e) => handleSelectPost(e, post)}>
      <CardTop className="card-top">
        {unread && <UnreadMarker /> }
        <Author>{post.author}</Author>
        <time>18 hours ago</time>
      </CardTop>
      <CardBody className="card-body">
        <img src={post.thumbnail} alt={post.title} />
        <h1>{post.title}</h1>
      </CardBody>
      <CardBottom className="card-bottom">
        <button>Dismiss post</button>
        <span>{post.num_comments} comments</span>
        {console.log(post)}
      </CardBottom>
    </Card>
  );
};

export default PostCard;