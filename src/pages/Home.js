import React from 'react';
import { useProduct } from '../context/ProductProvider';
import ProductCard from '../Components/ProductCard';

const Home = () => {
    const {state: {products}} = useProduct();
    console.log(products)

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
            {
                products.map(product => <ProductCard product={product}></ProductCard>)
            }
        </div>
    );
};

export default Home;