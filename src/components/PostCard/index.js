import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Moment from 'react-moment';
import * as actions from '../../actions';
import CloseIcon from './closeIcon';
import ChevronRightIcon from './chevronRightIcon';
import { Card, CardInner, CardTop, CardBody, CardBottom, Comments, Image, Author, UnreadMarker, Time, Title, DismissButton } from './style';

const PostCard = ({ post, postIndex }) => {
  const [unread, setUnread] = useState(true);
  const [animate, setAnimate] = useState(false);
  const readPost = useSelector(state => state.reddit.readPosts);
  const dispatch = useDispatch();

  const handleSelectPost = (post) => {
    dispatch(actions.selectPost(post));
    dispatch(actions.readPost(post.id));
  };

  const handleDismissPost = (e, postIndex) => {
    //prevents triggering parent's handleSelectPost
    e.stopPropagation();
    //triggers dissmissAnimation for the card
    setAnimate(true);
    //after animation duration, triggers dismissPost and removes card from state
    setTimeout(() => {
      dispatch(actions.dismissPost(postIndex))
    }, 400);
  };

  const checkReadStatus = (readPost, postId) => {
    if (readPost.includes(postId)) {
      setUnread(false);
    }
  };

  useEffect(() => checkReadStatus(readPost, post.id), [readPost, post.id]);

  return (
    <Card onClick={(e) => handleSelectPost(post)} animate={animate}>
      <CardInner animate={animate}>
        <CardTop>
          {unread && <UnreadMarker />}
          <Author>
            {post.author}
          </Author>
          <Time>
            <Moment fromNow>{post.created * 1000}</Moment>
          </Time>
        </CardTop>
        <CardBody>
          <Image src={post.thumbnail} alt={post.title} />
          <Title>{post.title}</Title>
          <ChevronRightIcon />
        </CardBody>
        <CardBottom>
          <DismissButton onClick={(e) => handleDismissPost(e, postIndex)}>
            <CloseIcon />
            Dismiss post
          </DismissButton>
          <Comments>{post.num_comments} comments</Comments>
        </CardBottom>
      </CardInner>
    </Card>
  );
};

export default PostCard;