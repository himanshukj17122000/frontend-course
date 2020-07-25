import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({ title, info, imageUrl, size, history, linkUrl, match }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    {size === 'name' ? (
      <div className='name'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>{info}</span>
      </div>
    ) : (
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>{info}</span>
      </div>
    )}
  </div>
);

export default withRouter(MenuItem);
