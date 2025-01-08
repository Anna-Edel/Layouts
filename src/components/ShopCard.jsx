import PropTypes from "prop-types";
import './index.css';
import './Store.css';


const ShopCard = ({ product }) => (
  <div className="shop-card">
    <img src={product.img} alt={product.name} />
    <h3>{product.name}</h3>
    <p>Color: {product.color}</p>
    <p>Price: ${product.price}</p>
  </div>
);

ShopCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
};

export default ShopCard;
