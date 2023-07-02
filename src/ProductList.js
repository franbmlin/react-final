import React, { useContext, useRef } from "react";
import { ListGroup, Stack, Button, Image, Form, FormControl, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "./ProductContext";
import './ProductList.css';

function ProductList() {
    const inputElement = useRef('');
    let navigate = useNavigate();
    
    let { products, search ,getProducts, deleteProduct, updateProducts, searchHandler } = useContext(ProductContext);
    let { id } = products
            
    function viewProduct(id) {
        getProducts(id)
        navigate(`/products/${id}`)
    }

    function handleDeleteProduct(id) {
        deleteProduct(id)
        navigate('/products')
    }

    function editProduct(id) {
        updateProducts(id)
        navigate(`/edit/${id}`)
    }

    function getSearchTerm() {
        searchHandler(inputElement.current.value)
    }

    function productList(products) {
        if(products === null) return
        return products.map((product) =>
            <ListGroup.Item key={product.id}>
                <Image src={product.imageUrl} />
                <div>{product.name}</div>
                <div>${product.price}</div>
                <Stack direction="horizontal" gap={3}>
                    <Button variant="outline-info" onClick={viewProduct}>View</Button>
                    <Button variant="outline-primary" onClick={editProduct.bind(this, products.id)}>Edit</Button>
                    <Button variant="outline-danger" onClick={handleDeleteProduct.bind(this, id)}>Delete</Button>
                </Stack>
            </ListGroup.Item> 
        )
    }
    
    return (
        <>
            <h1>Products</h1>
            <Form className='d-flex'>
                <FormControl 
                ref={inputElement}
                type='text' 
                placeholder='Search' 
                className='me-2' 
                aria-label='Search' 
                value={search} 
                onChange={getSearchTerm} 
                />
            </Form>
            <Stack direction="horizontal" gap={3}>
                <Card className="card">
                    <ProductContext.Consumer>
                        {({products}) => (
                            productList(products)
                        )}
                    </ProductContext.Consumer>
                </Card>
            </Stack>
        </>
    )
}

export default ProductList;