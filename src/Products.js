import React, { useContext, useEffect, useState } from "react";
import { Card, Button, Stack, Spinner, Alert } from 'react-bootstrap'
import { useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "./ProductContext";

function Products() {

    let params = useParams();
    let navigate = useNavigate();

    let { getProducts, deleteProduct, updateProducts } = useContext(ProductContext);
    let [ product, setProduct ] = useState();
    let [ error, setError ] = useState();

    useEffect(() => {
        setError(null)
        async function fetch() {
            await getProducts(params.id)
            .then((product) => setProduct(product))
            .catch((message) => setError(message))
        }
        fetch()
    }, [params.id, getProducts])

    function handleDeleteProduct(id) {
        deleteProduct(id)
        navigate('/products')
    }

    function editProduct(id) {
        updateProducts(id)
        navigate(`/edit/${id}`)
    }

    function errorMessage() {
        return <Alert variant='danger'>There was an error attempting to load this product: {error}</Alert>
    }

    function loading() {
        return <div className="w-25 text-center"><Spinner animation="grow" variant="warning" size='sm' /></div>
    }

    function productCard() {
        let { id, name, description, servingSize, imageUrl } = product
        return (
            <Card className='align-self-start w-51'>
                <Card.Img variant="top" src={imageUrl}/>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Serves: {servingSize}</Card.Subtitle>
                    <Card.Text>
                    <strong>Description:</strong> <span>{description}</span>
                    </Card.Text>
                    <Stack direction='horizontal' gap={3}>
                        <Button variant="outline-primary" onClick={editProduct.bind(this, id)}>Edit</Button>
                        <Button variant="outline-danger" onClick={handleDeleteProduct.bind(this, id)}>Delete</Button>
                    </Stack>
                 
                </Card.Body>
            </Card>
        )
    }
    if (error) return errorMessage()
    if (product === undefined) return loading()
    return product.id !== parseInt(params.id) ? loading() : productCard()
}

export default Products;