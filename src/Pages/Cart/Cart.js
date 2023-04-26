import { useCartContext } from "../../Context/CartContext";

import "./Cart.css";

export const Cart = () => {
  const {
    cart,
    removeFromCart,
    totalPrice,
    disscountPrice,
    disscount,
    setDisscount,
  } = useCartContext();
  return (
    <div className="cart-container">
      <div className="total-price">
        <h3>Total Price: ₹{disscount ? totalPrice : disscountPrice}</h3>
        <button
          onClick={() => setDisscount(!disscount)}
          disabled={cart.length === 0}
        >
          {disscount ? "Apply Coupon" : "Remove Coupon"}
        </button>
      </div>
      <ul>
        {cart?.map(
          ({
            id,
            name,
            description,
            price,
            image,
            delivery_time,
            quantity,
          }) => (
            <article className="cart-items">
              <img src={image} alt={name} />
              <p>
                <strong>Name: </strong> {name}
              </p>
              <p>
                <strong>Description: </strong>
                {description}
              </p>
              <p>Price: {price}</p>
              <p>Delivery Time: {delivery_time}min</p>
              <p>Quantity: {quantity}</p>
              <button onClick={() => removeFromCart(id)}>
                Remove from cart
              </button>
            </article>
          )
        )}
      </ul>
    </div>
  );
};
