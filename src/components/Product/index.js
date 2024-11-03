import { useState, useEffect } from 'react';
import { getProductList } from '../../services/ProductServices';
import './Product.scss';
import ProductItem from './productItem';

function Product() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            const result = await getProductList();
            setProducts(result);
        }
        fetchAPI();
    }, []);
    return (
        <>
            <div className='product'>
                {products.map(item => (
                    <ProductItem item={item} key={item.id} />
                ))}
            </div>
        </>
    )
}

export default Product;
