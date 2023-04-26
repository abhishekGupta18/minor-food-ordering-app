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
    <article className="food-card">
      <img src={image} alt={name} />
      <p style={{ fontSize: "25px", color: "#262626" }}>{name}</p>
      <p>{description}</p>
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
