import { useDispatch, useSelector } from "react-redux";
import classes from "./CartItem.module.css";
import { cartActions } from "../../store/cart-slice";

const CartItem = (props) => {
  const { id, title, quantity, price } = props;
  const total = quantity * price;

  const dispatch = useDispatch();

  const handleIncreaseQty = (id) => {
    dispatch(cartActions.addToCart(id));
  }

  const handleDecreaseQty = (id) => {
    dispatch(cartActions.decreaseCartQty(id));
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={() => handleDecreaseQty(id)}>-</button>
          <button onClick={() => handleIncreaseQty(id)}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
