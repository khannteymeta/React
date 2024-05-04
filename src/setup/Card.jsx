import PropTypes from "prop-types";
import "./Card.css";
const Card = ({ img, brand, detail, price }) => {
  return (
    <article>
      <img src={img} alt="shoe" />
      <h3>{brand}</h3>
      <p>{detail}</p>
      <span>{price}</span>
    </article>
  );
};
Card.propTypes = {
  img: PropTypes.arrayOf(PropTypes.object).isRequired,
  brand: PropTypes.arrayOf(PropTypes.object).isRequired,
  detail: PropTypes.arrayOf(PropTypes.object).isRequired,
  price: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default Card;
