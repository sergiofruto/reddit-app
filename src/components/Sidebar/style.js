import styled, { css, keyframes } from 'styled-components';

const dismissAllAnimation = keyframes`
 0% { transform: scale(1); opacity: 1; }
 100% { transform: scale(0); opacity: 0;}
`

export const Aside = styled.aside`
  position: relative;
  max-height: 100vh;
  background-color: black;
  color: white;
  overflow: scroll;
`;

export const Title = styled.h1`
  margin: 0;
  padding: .8rem 0;
  background-color: #1b1b1b;
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
`;

export const PostsList = styled.div`
  min-height: calc(100vh - 36px - 48px);
  transform-origin: top left;
  opacity: 1;
  ${props => props.animate && css`
    animation: ${dismissAllAnimation};
    animation-duration: .45s;
    animation-fill-mode: forwards;`
  }
`;

export const DismissAllButton = styled.button`
  position: sticky; 
  bottom: 0;
  left: 0;
  width: 100%;
  padding: .6rem;
  border: 0;
  background-color: #000000;
  font-size: 0.9rem;
  color: orange;
  cursor: pointer;
  outline: none;
`;