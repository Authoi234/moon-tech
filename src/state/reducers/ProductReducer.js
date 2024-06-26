import { ADD_TO_CART, FETCHING_ERROR, FETCHING_START, FETCHING_SUCCESS } from "../actionTypes/ActionTypes";

export const initialState = {
    loading: false,
    products: [],
    error: false,
    cart: []
}

export const productReducer = (state, action) => {
    switch(action.type){
        case FETCHING_START:
            return{
                ...state,
                loading: true
            };
        case FETCHING_SUCCESS:
            return{
                ...state,
                loading: false,
                products: action.payload
            };
        case FETCHING_ERROR:
            return{
                ...state,
                loading: false,
                error: true
            };
        case ADD_TO_CART:
            return{
                ...state,
                loading: false,
                error: true
            };
        default:
            return state;
    }
}