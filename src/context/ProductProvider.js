import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { initialState, productReducer } from '../state/reducers/ProductReducer';
import { FETCHING_ERROR, FETCHING_START, FETCHING_SUCCESS } from '../state/actionTypes/ActionTypes';

const PRODUCT_CONTEXT = createContext();

const ProductProvider = ({children}) => {

    const [state, dispatch] = useReducer(productReducer, initialState)

    useEffect(()=>{
        dispatch({type: FETCHING_START})
        fetch('/products/products.json')
        .then(res => res.json())
        .then(data => dispatch({type: FETCHING_SUCCESS, payload: data.data }))
        .catch(err => {
            dispatch({type: FETCHING_ERROR})
        })
    }, [])

    const value = {state, dispatch}

    return <PRODUCT_CONTEXT.Provider value={value}>{children}</PRODUCT_CONTEXT.Provider>;
};

export const useProduct = () => {
    const context = useContext(PRODUCT_CONTEXT);
    return context;
}

export default ProductProvider;