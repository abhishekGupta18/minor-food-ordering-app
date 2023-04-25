import { useCartContext } from "../../Context/CartContext";
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
    <div>
      <h2>Total price: {disscount ? totalPrice : disscountPrice}</h2>
      <button
        onClick={() => setDisscount(!disscount)}
        disabled={cart.length === 0}
      >
        {disscount ? "Apply Coupon" : "Remove Coupon"}
      </button>
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
            <article>
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
