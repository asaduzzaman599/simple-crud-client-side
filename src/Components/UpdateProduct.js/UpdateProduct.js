import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateProduct = ({ reload }) => {
    const [isReload, setIsReload] = reload;
    const { productId } = useParams()
    const navigate = useNavigate()
    const { register, handleSubmit, setValue, reset } = useForm();
    const [product, setProduct] = useState({})

    useEffect(() => {
        const url = `http://localhost:2000/product/${productId}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setValue("name", data[0].name)
                setValue("price", data[0].price)
                setValue("description", data[0].description)
                setProduct(data[0])


            })
    }, [])


    const onSubmit = productInfo => {
        const url = `http://localhost:2000/product/${productId}`
        fetch(url, {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(productInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setIsReload(!isReload)
                    reset();
                    navigate('/')
                }
            })

    };
    return (
        <Container>
            <h3 className='mt-5'>Update Product</h3>
            <form className='d-flex flex-column w-50 mx-auto gap-2' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Product Name'  {...register("name")} />
                <input placeholder='Product Price'  {...register("price")} />
                <textarea placeholder='Product Descriptions' {...register("description")} />
                <input className='w-75 btn btn-primary mx-auto' type="submit" />
            </form>
        </Container>
    );
};
export default UpdateProduct;