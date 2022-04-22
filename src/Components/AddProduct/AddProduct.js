import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <Container>
            <h3>Add Product</h3>
            <form className='d-flex flex-column w-50 mx-auto gap-2' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Product Name' {...register("name")} />
                <input placeholder='Product Price' {...register("price")} />
                <textarea placeholder='Product Descriptions' {...register("description")} />
                <input type="submit" />
            </form>
        </Container>
    );
};

export default AddProduct;