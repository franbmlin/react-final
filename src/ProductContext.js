import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ProductContext = createContext();

export const ProductProvider = (props) => {
    const [ products, setProducts ] = useState([]);
    const [ search, setSearch ] = useState('');
    const [ searchResults, setSearchResults ] = useState([]);

    useEffect(() => {
        async function getProducts() {
            await refreshProducts()
        }
        getProducts()
    }, []);

    const searchHandler = (search) => {
        setSearch(search);
        if (search !== '') {
          const newProductList = products.filter((product) => {
            return Object.values(product)
            .join(' ')
            .toLowerCase()
            .includes(search.toLowerCase());
          });
          setSearchResults(newProductList);
        } else {
          setSearchResults(products);
        }
    };

    function refreshProducts() {
        return axios.get("http://localhost:3001/products")
        .then(response => {
            setProducts(response.data)
        });
    }

    function getProducts(id) {
        return axios.get(`http://localhost:3001/products/${id}`)
            .then(response =>
                new Promise((resolve) => resolve(response.data))
            )
            .catch((error) =>
                new Promise((_, reject) => reject(error.response.statusText))
            )
    }

    function createProduct(product) {
        return axios.post("http://localhost:3001/products", product)
        .then(response => {
            refreshProducts()
            return new Promise((resolve) => resolve(response.data));
        })
    }

    function updateProducts(product) {
        return axios.put(`http://localhost:3001/products/${product.id}`, product)
        .then(response => {
            refreshProducts()
            return new Promise((resolve) => resolve(response.data))
        })
    }

    function deleteProduct(id) {
        axios.delete(`http://localhost:3001/products/${id}`)
        .then(refreshProducts);
    }
    
    return (
        <ProductContext.Provider
            value={{
               products: search.length < 1 ? products : searchResults,
                search,
                getProducts,
                createProduct,
                updateProducts,
                deleteProduct,
                searchHandler
            }}
        >
            { props.children }
        </ProductContext.Provider>    
    )
}