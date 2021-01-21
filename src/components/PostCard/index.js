import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import * as actions from '../../actions';
import CloseIcon from './closeIcon';
import ChevronRightIcon from './chevronRightIcon';
import { Card, CardTop, CardBody, CardBottom, Comments, Image, Author, UnreadMarker, Time, Title, DismissButton } from './style';

const PostCard = ({ post }) => {
  const [unread, setUnread] = useState(true);
  const readPost = useSelector(state => state.reddit.readPosts);
  const dispatch = useDispatch();

  const handleSelectPost = (e, post) => {
    dispatch(actions.selectPost(post));
    dispatch(actions.readPost(post.id));
  };

  const checkReadStatus = (readPost, postId) => {
    if (readPost.includes(postId)) {
      setUnread(false);
    }
  };

  useEffect(() => checkReadStatus(readPost, post.id), [readPost, post.id]);

  return (
    <Card onClick={(e) => handleSelectPost(e, post)}>
      <CardTop className="card-top">
        {unread && <UnreadMarker />}
        <Author>
          {post.author}
        </Author>
        <Time>18 hours ago</Time>
      </CardTop>
      <CardBody className="card-body">
        <Image src={post.thumbnail} alt={post.title} />
        <Title>{post.title}</Title>
        <ChevronRightIcon />
      </CardBody>
      <CardBottom className="card-bottom">
        <DismissButton><CloseIcon />Dismiss</DismissButton>
        <Comments>{post.num_comments} comments</Comments>
      </CardBottom>
    </Card>
  );
};

export default PostCard;