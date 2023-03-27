import { useState, useEffect } from 'react';
import { Product_CDN } from './cdn';

const useSingleProduct = (id) => {

    const [singleProduct, setSingleProduct] = useState();

    useEffect(() => {
        getSingleProduct();
    }, []);

    const getSingleProduct = async () => {
        const data = await fetch(Product_CDN + id);
        const json = await data?.json();
        setSingleProduct(json);
    }

    return singleProduct;
}

export default useSingleProduct;