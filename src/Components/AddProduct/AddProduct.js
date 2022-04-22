import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm();
    const onSubmit = productInfo => {
        console.log(productInfo)
        fetch('http://localhost:2000/product', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(productInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.result.acknowledged) {

                }
            })

    };
    return (
        <Container>
            <h3>Add Product</h3>
            <form className='d-flex flex-column w-50 mx-auto gap-2' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Product Name' {...register("name")} />
                <input placeholder='Product Price' {...register("price")} />
                <textarea placeholder='Product Descriptions' {...register("description")} />
                <input className='w-75 btn btn-primary' type="submit" />
            </form>
        </Container>
    );
};

export default AddProduct;