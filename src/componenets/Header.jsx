import React from "react";
import { GrRestaurant } from "react-icons/gr";
import { BsFillSearchHeartFill } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import "./header.scss";
import { Container } from "reactstrap";

import { navLinks } from "../utils/constants";

const Header = () => {
  return (
    <header className="header">
      <Container>
        <div className="navigation">
          <div className="logo">
            <h2 className="d-flex align-items-center gap-1">
              <span>
                <GrRestaurant /> Master Chef Food
              </span>
            </h2>
          </div>

          <div className="nav__menu">
            <ul className="nav__list">
              {navLinks.map((item, i) => (
                <li className="nav__item" key={`${i}nth_navigation`}>
                  <a href={item.url}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="menu__right">
            <div className="custom__search ">
              <input type="" placeholder="Saerch items here..."></input>
              <BsFillSearchHeartFill />
            </div>
          </div>
          <div className="mobile__menu">
            <AiOutlineMenu />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
