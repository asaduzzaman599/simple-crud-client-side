import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import AddProduct from '../AddProduct/AddProduct';
import Product from '../Product/Product';

const Home = ({ reload }) => {
    const [isReload, setIsReload] = reload
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:2000/product')
            .then(res => res.json())
            .then(data => setProducts(data))
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