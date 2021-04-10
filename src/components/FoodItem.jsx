import React from "react";
import PropTypes from "prop-types";

import "../styles/FoodItem.css";

const FoodItem = ({ item }) => {
  const { name, img, category } = item;
  return (
    <div className="food">
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p>{category}</p>
    </div>
  );
};

FoodItem.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  category: PropTypes.string,
};

export default FoodItem;
