import React from "react";
import { AiFillStar, AiOutlineShoppingCart } from "react-icons/ai";
import "./productCard.scss";

const ProductCard = ({ item }) => {
  return (
    <div className="single__product">
      <div className="product__img">
        <img src={item.imgUrl} alt="" className="w-100" />
      </div>
      <div className="product__content">
        <div className="rating text-center">
          <span>
            <AiFillStar className="ri-star-s-fill" />
          </span>
          <span>
            <AiFillStar className="ri-star-s-fill" />
          </span>
          <span>
            <AiFillStar className="ri-star-s-fill" />
          </span>
          <span>
            <AiFillStar className="ri-star-s-fill" />
          </span>
          <span>
            <AiFillStar className="ri-star-s-fill" />
          </span>
        </div>
        <h6>{item.title}</h6>
        <div className="d-flex align-items-center justify-content-between">
          <span className="price">
            {" "}
            Price: $<span>{item.price}</span>
          </span>
          <AiOutlineShoppingCart />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
