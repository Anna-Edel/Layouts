import PropTypes from "prop-types";
import ShopItem from "./ShopItem";

const ListView = ({ items }) => (
  <div className="list-view">
    {items.map((product, index) => (
      <ShopItem product={product} key={index} />
    ))}
  </div>
);

ListView.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ListView;
