import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import AddProduct from '../AddProduct/AddProduct';
import Product from '../Product/Product';
import axios from "axios";

const Home = ({ reload }) => {
    const [isReload, setIsReload] = reload
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get('http://localhost:2000/product')
            .then(res => {
                setProducts(res.data);
            });

        /* 
        fetch('http://localhost:2000/product')
        .then(res => res.json())
        .then(data => console.log(data)) */
    }, [isReload])

    return (
        <>
            <Outlet />
            <Container className='mt-5'>
                <Row >
                    {
                        products.map(product => <Product
                            key={product._id}
                            product={product}
                            reload={[isReload, setIsReload]}
                        ></Product>)
                    }
                </Row>
            </Container>
        </>
    );
};

export default Home;