import React from "react";
import { AiFillStar, AiOutlineShoppingCart } from "react-icons/ai";
import "./product-card.scss";

const ProductCard = (props) => {
  const { title, imgUrl, price } = props.item;

  return (
    <div className="single__product">
      <div className="product__img">
        <img src={imgUrl} alt="" className="w-100" />
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

        <h6>{title}</h6>

        <div className=" d-flex align-items-center justify-content-between">
          <span className="price d-flex align-items-center">
            {" "}
            Price: $<span>{price}</span>
          </span>
          <span className="shopping__icon">
            <AiOutlineShoppingCart />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
