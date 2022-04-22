import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product: { _id, name, description, price } }) => {
    return (
        <div className='d-flex justify-content-between p-4 m-4 bg-secondary rounded text-light'>
            <h3>{name}</h3>
            <p>{description}</p>
            <p>${price}</p>
            <p><Link className='btn btn-success me-3' to="/">Update</Link><button className='btn btn-danger'>X</button></p>
        </div>
    );
};

export default Product;