import { useState, useEffect } from 'react';
import { Product_CDN } from './cdn';
import { filterData } from './helper';

const useProducts = () => {

    const [allProducts, setAllProducts] = useState();
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchText, setSearchText] = useState("");

    const handleSearch = () => {
        const data = filterData(searchText, allProducts);
        setFilteredProducts(data);
    }

    const getRestaurants = async () => {
        const data = await fetch(
            Product_CDN
        );
        const json = await data?.json();
        setAllProducts(json);
        setFilteredProducts(json);
    }

    useEffect(() => {
        getRestaurants();
    }, [])

    return [allProducts, filteredProducts, searchText, setSearchText, handleSearch];
}

export default useProducts