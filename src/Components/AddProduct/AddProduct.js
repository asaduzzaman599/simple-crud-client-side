import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const AddProduct = ({ reload }) => {
    const [isReload, setIsReload] = reload
    const navigate = useNavigate()
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = productInfo => {
        fetch('http://localhost:2000/product', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(productInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.result.acknowledged) {
                    setIsReload(!isReload)
                    reset();
                    navigate('/')
                }
            })

    };
    return (
        <Container className='mt-5'>
            <h3>Add Product</h3>
            <form className='d-flex flex-column w-50 mx-auto gap-2' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Product Name' {...register("name")} />
                <input placeholder='Product Price' {...register("price")} />
                <textarea placeholder='Product Descriptions' {...register("description")} />
                <input className='w-75 btn btn-primary mx-auto' type="submit" />
            </form>
        </Container>
    );
};

export default AddProduct;