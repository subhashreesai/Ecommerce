import React from 'react';
import Loader from './Loader';
import Message from './Message';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { useGetTopProductsQuery } from '../slices/productsApiSlice';
import { Carousel } from 'react-bootstrap';

const ProductCarousel = () => {
    const { data: products, isLoading, error} = useGetTopProductsQuery();

  return isLoading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : (
    <Carousel pause='hover' className='bg-primary mb-4'>
    {products.map((product) => (
        <Carousel.Item key={product._id}>
        <Link to={`/product/${product._id}`}>
        <Image src={product.image} alt={product.name} />
        <Carousel.Caption className='carousel-caption'>
        <h2>{product.name} (${product.price})</h2>
        </Carousel.Caption>
        </Link>
        </Carousel.Item>
    ))}

    </Carousel>
  )
}

export default ProductCarousel