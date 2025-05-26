import React from "react";

export default function Card({ image, price, title, description }) {
  return (
    <div class="row align-items-center mb-5">
      <div class="col-4 col-sm-3">
        <img class="w-100 rounded-circle mb-3 mb-sm-0" src={image} alt="" />
        <h5 class="menu-price">{price} $</h5>
      </div>
      <div class="col-8 col-sm-9">
        <h4>{title}</h4>
        <p class="m-0">{description}</p>
      </div>
    </div>
  );
}
