import PropTypes from "prop-types";
import '../index.css';
import '../Store.css';


const ShopItem = ({ product }) => (
    <div className="list-el">
      <img src={product.img} alt={product.name} />
      <p className="name">{product.name}</p>
      <p className="price">${product.price}</p>
      <button className="button">Buy</button>
    </div>
  );
  
  ShopItem.propTypes = {
    product: PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
    }).isRequired,
  };
  
  export default ShopItem;
