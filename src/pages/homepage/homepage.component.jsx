import React, { useState } from 'react';
import { connect } from 'react-redux';
import Directory from '../../components/directory/directory.component';
import './homepage.styles.scss';
import ReactSearchBox from 'react-search-box';
import { getItems } from '../../actions/products';
import { Redirect } from 'react-router-dom';
const HomePage = ({ getItems, history }) => {
  const [prod, setProd] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    if (prod !== '') {
      getItems(prod);
      history.push('/products');
    }
  };

  return (
    <div className='Container'>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search Topics...'
          onChange={event => setProd(event.target.value)}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      <div className='homepage'>
        <Directory />
      </div>
    </div>
  );
};

export default connect(null, { getItems })(HomePage);
