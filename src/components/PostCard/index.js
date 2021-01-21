import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Moment from 'react-moment';
import * as actions from '../../actions';
import CloseIcon from './closeIcon';
import ChevronRightIcon from './chevronRightIcon';
import { Card, CardTop, CardBody, CardBottom, Comments, Image, Author, UnreadMarker, Time, Title, DismissButton } from './style';

const PostCard = ({ post, postIndex }) => {
  const [unread, setUnread] = useState(true);
  const readPost = useSelector(state => state.reddit.readPosts);
  const dispatch = useDispatch();

  const handleSelectPost = (post) => {
    dispatch(actions.selectPost(post));
    dispatch(actions.readPost(post.id));
  };

  const handleDismissPost = (e, postIndex) => {
    e.stopPropagation();
    dispatch(actions.dismissPost(postIndex));
  };

  const checkReadStatus = (readPost, postId) => {
    if (readPost.includes(postId)) {
      setUnread(false);
    }
  };

  useEffect(() => checkReadStatus(readPost, post.id), [readPost, post.id]);

  return (
    <Card onClick={(e) => handleSelectPost(post)}>
      <CardTop className="card-top">
        {unread && <UnreadMarker />}
        <Author>
          {post.author}
        </Author>
        <Time>
          <Moment fromNow>{post.created * 1000}</Moment>
        </Time>
      </CardTop>
      <CardBody className="card-body">
        <Image src={post.thumbnail} alt={post.title} />
        <Title>{post.title}</Title>
        <ChevronRightIcon />
      </CardBody>
      <CardBottom className="card-bottom">
        <DismissButton onClick={(e) => handleDismissPost(e, postIndex)}>
          <CloseIcon />
          Dismiss post
        </DismissButton>
        <Comments>{post.num_comments} comments</Comments>
      </CardBottom>
    </Card>
  );
};

export default PostCard;