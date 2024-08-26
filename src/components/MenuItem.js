import React from "react";

function MenuItem({ image, name, ingredients, price }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> {ingredients} </p>
      <p><b> Rs. {price} </b></p>
    </div>
  );
}

export default MenuItem;
