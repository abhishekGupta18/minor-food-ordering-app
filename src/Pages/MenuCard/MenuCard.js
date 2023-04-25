import { useCartContext } from "../../Context/CartContext";
import "./MenuCard.css";
export const MenuCard = ({
  id,
  name,
  description,
  price,
  image,
  delivery_time,
}) => {
  const { cartHandlerButton } = useCartContext();
  return (
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
      <button
        onClick={() =>
          cartHandlerButton({
            id,
            name,
            description,
            price,
            image,
            delivery_time,
          })
        }
      >
        Add to cart
      </button>
    </article>
  );
};
