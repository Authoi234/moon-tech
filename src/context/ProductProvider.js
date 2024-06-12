import React, { createContext, useContext, useEffect, useReducer } from 'react';

const PRODUCT_CONTEXT = createContext();

const ProductProvider = ({children}) => {

    const initialState = {}

    const productReducer = (state, action) => {
        return;
    }

    const [state, dispatch] = useReducer(productReducer, initialState)

    useEffect(()=>{
        fetch('/products/products.json')
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])

    const value = {test:'TEST'}

    return <PRODUCT_CONTEXT.Provider value={value}>{children}</PRODUCT_CONTEXT.Provider>;
};

export const useProduct = () => {
    const context = useContext(PRODUCT_CONTEXT);
    return context;
}

export default ProductProvider;