import PropTypes from "prop-types";
import uniqid from "uniqid";
import ShopItem from "./shopItem";

export default function ListView(props) {
  return (
    <ul className="products-list">
      {props.products.map((product) => {
        return (
          <li className="products-list-item" key={uniqid()}>
            <ShopItem item={product}/>
          </li>
        );
      })}
    </ul>
  );
}

ListView.propTypes = {
  products: PropTypes.array.isRequired,
};