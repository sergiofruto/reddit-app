import styled, { css, keyframes } from 'styled-components';

const dismissAnimation = keyframes`
 0% { transform: translateX(0); opacity: 1; }
 100% { transform: translateX(-100%); opacity: 0;}
`

const blinkCard = keyframes`
 0% { background-color: #000000; }
 50% { background-color: #1d1d1d; }
 100% { background-color: #000000; }
`

export const Card = styled.div`
  position: relative;
  padding: 10px 0;
  margin: 0 10px;
  background-color: #000000;
  &:not(:last-child) {
    border-bottom: 1px solid #eee;
  }
  ${props => !props.unread && css`
    animation: ${blinkCard};
    animation-duration: .25s;
    animation-fill-mode: forwards;`
  }
`;

export const CardInner = styled.div`
  opacity: 1;
  ${props => props.animate && css`
    animation: ${dismissAnimation};
    animation-duration: .5s;
    animation-fill-mode: forwards;`
  }
`;

export const CardTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

`;

export const UnreadMarker = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 12px;
  height: 12px;
  background-color: blue;
  border-radius: 50%;
`;

export const Author = styled.h2`
  padding-left: 1.25rem;
  margin: 0;
  font-size: 1rem;
  font-weight: 400;
  color: white;
  transition: color .1s ease-out;
  ${props => !props.unread && css`
    color: #a0a0a0;
  `}
`;

export const Time = styled.span`
  font-size: .8rem;
  color: #dedede;
`;

export const CardBody = styled.div`
  display: flex;
  align-items: center;
  padding: .8rem 0 1rem;
  > svg {
    flex: 0 0 16px;
    margin-left: auto;
  }
`;

export const Image = styled.img`
  max-width: 120px;
  margin-right: .8rem;
  font-size: .4rem;
`;

export const Title = styled.h1`
  margin: 0 .5rem 0 0;
  font-size: .9rem;
  font-weight: 400;
  color: white;
  transition: color .1s ease-out;
  ${props => !props.unread && css`
    color: #a0a0a0;
  `}
`;

export const CardBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DismissButton = styled.button`
  display: flex;
  align-items: center;
  height: 1.6rem;
  padding: 0;
  background-color: transparent;
  border: 0;
  font-size: 0.9rem;
  color: white;
  outline: none;
  cursor: pointer;
  > svg {
    margin-right: .5rem;
  }
`;

export const Comments = styled.span`
  color: orange;
`;