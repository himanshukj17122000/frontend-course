import React from 'react';

import {
  CollectionItemContainer,
  CollectionFooter,
  SpanName,
  SpanPrice,
  BackgroundImage,
} from './collection-item.styles';

const ProductItem = ({ data: { title, partner, image, link } }) => {
  return (
    <CollectionItemContainer>
      <BackgroundImage
        onClick={() => window.location.replace(`${link}`)}
        className='image'
        imageUrl={image}
      ></BackgroundImage>
      <CollectionFooter>
        <SpanName onClick={() => window.location.replace(`${link}`)}>
          {title}
        </SpanName>
        <SpanPrice>{partner}</SpanPrice>
      </CollectionFooter>
    </CollectionItemContainer>
  );
};

export default ProductItem;
