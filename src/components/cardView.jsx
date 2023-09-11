import PropTypes from "prop-types";
import ShopCard from "./shopCard";
import uniqid from "uniqid";

export default function CardView(props) {
  return (
    <ul className="products-module">
      {props.products.map((product) => {
        return (
          <li key={uniqid()} className="products-list-item">
            <ShopCard item={product}/>
          </li>
        );
      })}
    </ul>
  );
}

CardView.propTypes = {
  products: PropTypes.array.isRequired,
};