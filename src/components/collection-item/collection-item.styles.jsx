import styled from 'styled-components';

export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 3vw;
  height: 20vw;
  align-items: center;
  position: relative;

  &:hover {
    .image {
      opacity: 0.8;
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
  height: 5%;
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
`;
