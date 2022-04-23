import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product: { _id, name, description, price }, reload }) => {
    const [isReaload, setIsReload] = reload;
    const handleDelete = (id) => {
        const url = `http://localhost:2000/product/${id}`
        axios.delete(url).then(res => {
            if (res.data.deletedCount) {
                setIsReload(!isReaload)
            }
        });


        /* fetch(url, {
            method: "DELETE"
        }).then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    setIsReload(!isReaload)
                }
            }) */
    }
    return (
        <div className='d-flex justify-content-between p-4 m-4 bg-secondary rounded text-light'>
            <h3>{name}</h3>
            <p>{description}</p>
            <p>${price}</p>
            <p><Link className='btn btn-success me-3' to={`/update/${_id}`}>Update</Link><button onClick={() => handleDelete(_id)} className='btn btn-danger'>X</button></p>
        </div>
    );
};

export default Product;