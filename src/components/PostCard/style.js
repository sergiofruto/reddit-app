import styled from 'styled-components';

export const Card = styled.div`
  padding: 10px 0;
  margin: 0 10px;
  &:not(:last-child) {
    border-bottom: 1px solid #eee;
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
  padding-left: 20px;
  margin: 0;
  font-size: 16px;
  font-weight: 400;
  color: white;
`;

export const Time = styled.span`
  font-size: .8rem;
  color: #dedede;
`;

export const CardBody = styled.div`
  display: flex;
  align-items: center;
  padding: .8rem 0 1rem;
`;

export const Image = styled.img`
  margin-right: .8rem;
`;

export const Title = styled.h1`
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
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
  > svg {
    margin-right: .5rem;
  }
`;

export const Comments = styled.span`
  color: orange;
`;