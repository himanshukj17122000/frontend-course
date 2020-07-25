import React, { useState, useEffect } from 'react';
import './projects.styles.scss';
import { connect } from 'react-redux';
import CollectionPreview from '../../components/collection-preview/collection-preview';
import { getItems } from '../../actions/products';
import Spinner from './Spinner';
const Projects = ({
  getItems,
  products: { products, loading, searchText },
  history,
}) => {
  const [product, setProduct] = useState('');
  useEffect(() => {
    setProduct(searchText);
  }, [searchText]);
  const onSubmit = e => {
    e.preventDefault();
    if (product !== '') {
      getItems(product);
      console.log(products);
    } else {
      history.push('/');
    }
  };

  return loading ? (
    <Spinner />
  ) : (
    <div className='shop-page'>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder={product}
          onChange={event => {
            setProduct(event.target.value);
          }}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>

      {/* {products.map(product => (
        <p>{product.id}</p>
      ))} */}
      {/* {products.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))} */}
      {Object.keys(products).map(item =>
        products[item].length != 0 ? (
          <CollectionPreview key={item} items={products[item]} title={item} />
        ) : null
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  products: state.products,
});
export default connect(mapStateToProps, { getItems })(Projects);
