import React from "react";
import { Container, Row, Col } from "reactstrap";
import { AiFillStar, AiOutlineShoppingCart } from "react-icons/ai";
import { popularMenuFood } from "../assets/fake-data/products";

const PopularMenu = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="22" className="mb-5">
            <h2>Popular Food Menu</h2>
          </Col>
          {popularMenuFood.map((item) => (
            <Col lg="3" key={item.id}>
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
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default PopularMenu;
