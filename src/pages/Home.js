import React from 'react';
import { useProduct } from '../context/ProductProvider';

const Home = () => {
    const {test} = useProduct()

    console.log(test);

    return (
        <div>
            <h1>This is about page</h1>
        </div>
    );
};

export default Home;