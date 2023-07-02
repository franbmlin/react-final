import React, { useContext, useEffect, useState } from "react";
import { Form, Button } from 'react-bootstrap';
import { useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "./ProductContext";
import './CreateProduct.css';

function CreateProduct() {
    let params = useParams();
    let [ product, setProduct ] = useState({
        id: params.id,
        name: "",
        price: "",
        description: "",
        servingSize: "",
        imageUrl: ""
    });

    let { getProducts, createProduct, updateProducts } = useContext(ProductContext);
    let navigate = useNavigate()
    let { id, name, description, price, servingSize, imageUrl } = product

    useEffect(() => {
        if (id === undefined) return
        async function fetch() {
            await getProducts(id)
            .then((product) => setProduct(product))
        }
        fetch()
    }, [id])

    function handleChange(event) {
        setProduct((preValue) => {
            return { ...preValue, [event.target.name]: event.target.value }
        });
    }

    function addOrUpdate() {
        if (id === undefined) {
            return createProduct(product)
        } else {
            return updateProducts(product)
        }
    }

    function handleSubmit(event) {
        event.preventDefault()
        addOrUpdate().then((product) => 
            navigate(`/products/${product.id}`)
        )
    }

    return (
        <Form className='create' onSubmit={handleSubmit} style={{ padding: '26px' }}>
            <Form.Group className="mb-3">
                <Form.Label>Product Name</Form.Label>
                <Form.Control type="text" name="name" value={name} onChange={handleChange} size='sm' placeholder='Place your catchy title here?' />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={2} type="text" name="description" value={description} onChange={handleChange} size='sm' placeholder='Place a mouth watering description here!'/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control type="text" name="price" value={price} onChange={handleChange} size='sm' placeholder='What is your price for excellence?'/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Serving Size</Form.Label>
                <Form.Control type="text" name="servingSize" value={servingSize} onChange={handleChange} size='sm' placeholder='How many people should this feed?'/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Image</Form.Label>
                <Form.Control type="text" name="imageUrl" value={imageUrl} onChange={handleChange} size='sm' placeholder='A picture is worth a thousand words...'/>
            </Form.Group>
            <Button variant="outline-warning" type="submit">Save</Button>
        </Form>
    )
}

export default CreateProduct;