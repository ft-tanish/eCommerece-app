import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../utils/useProducts'
import { ProductCard } from './ProductCard';
import Shimmer from './Shimmer';

const AllProducts = () => {

    const [allProducts, filteredProducts, searchText, setSearchText, handleSearch] = useProducts();

    if (!allProducts) return null;

    return (
        <>
            <h1 className='shop-title'>Shop Now</h1>
            {allProducts?.length === 0 ? <Shimmer /> : (
                <>
                    <div className='search-cointainer'>
                        <input type="text"
                            className='search-input'
                            placeholder='search'
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)} />
                        <button
                            className='search-btn'
                            onClick={handleSearch}
                        >Search</button>
                    </div>
                    <div className='shop'>
                        {filteredProducts?.length === 0 ? <h3>No such product with this name</h3> :
                            filteredProducts?.map((product) => {
                                return (
                                    <Link to={"/products/" + product?.id} key={product?.id}>
                                        <ProductCard {...product} key={product?.id} />
                                    </Link>
                                )
                            })
                        }
                    </div>
                </>
            )
            }
        </>

    )
}

export default AllProducts