import React from "react";
import { Container, Row, Col } from "reactstrap";

import { ProductCard } from "./index";
import { popularMenuFood } from "../assets/fake-data/products";

const PopularMenu = () => {
  return (
    <section>
      <Container className="pt-0">
        <Row>
          <Col lg="22" className="mb-5">
            <h2 className="popular__menu-title">Popular food menu</h2>
          </Col>
          {popularMenuFood.map((item) => (
            <Col lg="3" key={item.id}>
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default PopularMenu;
