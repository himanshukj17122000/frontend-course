import React from 'react';

import './collection-preview.styles.scss';
import ProductItem from '../collection-item/project-item.components';

const CollectionPreview = ({ title, items }) =>
  title === 'WIKIPEDIA' ? (
    <div>{items}</div>
  ) : (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {/* {items.map(item => (
        <p>{item.name}</p>
      ))} */}
        {items.map(item => (
          <ProductItem data={item} />
        ))}
      </div>
    </div>
  );

export default CollectionPreview;
