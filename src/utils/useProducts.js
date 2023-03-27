import { useState, useEffect } from 'react';
import { Product_CDN } from './cdn';
import { filterData } from './helper';

const useProducts = () => {

    const [allProducts, setAllProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchText, setSearchText] = useState("");

    const handleSearch = () => {
        const data = filterData(searchText, allProducts);
        setFilteredProducts(data);
    }

    const getProducts = async () => {
        const data = await fetch(
            Product_CDN
        );
        const json = await data?.json();
        setAllProducts(json);
        setFilteredProducts(json);
    }

    useEffect(() => {
        getProducts();
    }, [])

    return [allProducts, filteredProducts, searchText, setSearchText, handleSearch];
}

export default useProducts