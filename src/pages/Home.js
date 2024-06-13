import React from 'react';
import { useProduct } from '../context/ProductProvider';
import ProductCard from '../Components/ProductCard';
import { MdError } from "react-icons/md";

const Home = () => {
    const { state: { products, loading, error, cart } } = useProduct();
    console.log(products)

    let content;

    if (loading) {
        content = <p>Loading...</p>
    }

    if (error) {
        content = <div id="alert" className="flex justify-center items-center bg-red-100 rounded-full py-4" role="alert">
            <strong className="font-bold text-2xl px-2"><MdError className='text-red-500'></MdError></strong>
            <span>404 | Something went wrong. Please try again.</span>
        </div>
    }

    if (!loading && !error && products.length) {
        content = products.map(product => <ProductCard product={product}></ProductCard>)
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
            {
                content
            }
        </div>
    );
};

export default Home;