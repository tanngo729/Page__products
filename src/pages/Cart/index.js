import { useDispatch, useSelector } from "react-redux";
import CartList from "./CartList";
import './Cart.scss';
import { deleteAll } from "../../actions/Cart";


function Cart() {
    const cart = useSelector(state => state.cartReducer);
    const dispatch = useDispatch();

    const handleDeleteAll = () => {
        dispatch(deleteAll());
    }

    const total = cart.reduce((sum, item) => {
        const priceNew = (item.info.price * (100 - item.info.discountPercentage) / 100).toFixed(0);
        return sum + priceNew * item.quantity;
    }, 0);

    return (
        <>
            <div className="cart__header">
                <h2>Giỏ hàng</h2>
                <button onClick={handleDeleteAll}>Xoá tất cả</button>
            </div>

            <div>
                {cart.length > 0 ? (
                    <>
                        <CartList />
                        <div className="cart__total">
                            Tổng tiền: <span>{total.toFixed(2)}$</span>
                        </div>
                    </>
                ) : (
                    <>Giỏ hàng trống</>
                )}
            </div>
        </>
    )
}

export default Cart;