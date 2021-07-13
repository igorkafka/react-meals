import { useContext, useState } from 'react';
import CartContext from '../store/cart-context';

import Modal from '../UI/Modal';
import classes from './Cart.module.css'
import CartItem from './CartItem';
import CheckOut from './Checkout';

const Cart = props => {
    const [isCheckout, setIsCheckout] = useState(true);
    const cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;
    const cartItemRemoveHandler = id => {
        cartCtx.removeItem(id);

    };
    const cartItemAddHandler = item => {
        cartCtx.addItem({...item, amount: 1});
    }
    const cartItems = <ul className={classes['cart-items']}>{cartCtx.items.map((item) => <CartItem 
        key={item.id}
         name={item.amount} 
         price={item.price} onRemove={cartItemRemoveHandler.bind(null, item.id)}
         onAdd={cartItemAddHandler.bind(null, item)}/>)}</ul>
    const modalActions =  <div className={classes.actions}>
    <button className={classes['button--alt']} onClick={props.onCloseChart}>Close</button>
    {hasItems && <button className={classes.button}>Order</button>}
</div>
return (
   <Modal onClose ={props.onCloseChart}>
     <div>
        {cartItems}
        <div>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
         {isCheckout && <CheckOut onCancel={props.onCloseChart}/>}
         {!isCheckout && modalActions}
    </div>
    </Modal>
    )
}

export default Cart;