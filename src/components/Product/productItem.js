import { useDispatch } from 'react-redux';
import { addToCart, updateQuantity } from '../../actions/Cart';
import { useSelector } from "react-redux";

function ProductItem(props) {
    const { item } = props;
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cartReducer);

    const handleAddToCart = () => {
        if (cart.some(itemCart => itemCart.id === item.id)) {
            dispatch(updateQuantity(item.id));
        } else {
            dispatch(addToCart(item.id, item));
        }
    }

    return (
        <>
            <div className='product__item'>
                <div className='product__image'>
                    <img src={item.thumbnail} alt={item.title}></img>
                </div>
                <div className='product__content'>
                    <h3>{item.title}</h3>
                    <div className='product__sub'>
                        <div className='product__content--price-new'>{(item.price * (100 - item.discountPercentage) / 100).toFixed(0)}$</div>
                        <div className='product__content--price-old'>{item.price}$</div>
                        <p className='product__content--percent'>{item.discountPercentage}%</p>
                        <button onClick={handleAddToCart}>Thêm vào giỏ hàng</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ProductItem;