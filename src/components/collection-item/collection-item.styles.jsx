import styled from 'styled-components';

export const CollectionItemContainer = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 3vw;
  height: auto;
  align-items: center;
  position: relative;

  &:hover {
    cursor: pointer;
    .image {
      opacity: 0.8;
      transform: scale(1.1);
      opacity: 0.4;
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CollectionFooter = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  margin-bottom: 1vw;
  justify-content: space-between;
  font-size: 18px;
`;

export const SpanName = styled.span`
  width: auto;
  margin-bottom: 30px;
`;

export const SpanPrice = styled.span`
  width: auto;
  text-align: right;
  color: red;
`;
