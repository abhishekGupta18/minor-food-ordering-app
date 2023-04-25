import { useCartContext } from "../../Context/CartContext";
export const Cart = () => {
  const { cart, removeFromCart } = useCartContext();
  return (
    <div>
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
