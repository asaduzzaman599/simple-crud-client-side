import React from 'react';
import { Outlet } from 'react-router-dom';
import AddProduct from '../AddProduct/AddProduct';

const Home = () => {
    return (
        <>
            <Outlet />
        </>
    );
};

export default Home;