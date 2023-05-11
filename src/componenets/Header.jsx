import React, { useRef } from "react";
import { GrRestaurant } from "react-icons/gr";
import { BsFillSearchHeartFill } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import "./header.scss";
import { Container } from "reactstrap";

import { navLinks } from "../utils/constants";

const Header = () => {
  const menuRef = useRef();
  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  return (
    <header className="header">
      <Container>
        <div className="navigation">
          <div className="logo">
            <h2 className=" d-flex align-items-center gap-1">
              <GrRestaurant />
              Master Chef Food
            </h2>
          </div>

          <div className="nav__menu " ref={menuRef}>
            <div className="nav__list__wrapper d-flex align-items-center gap-5">
              <ul className="nav__list">
                {navLinks.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <a href={item.url} onClick={menuToggle}>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="menu__right">
                <div className="custom__search ">
                  <input type="text" placeholder="search item...." />
                  <BsFillSearchHeartFill />
                </div>
              </div>
            </div>
          </div>

          <div>
            <span className="cart__icon">
              <AiOutlineShoppingCart />
              <span className="badge">2</span>
            </span>
          </div>

          <div className="mobile__menu">
            <span>
              <AiOutlineMenu onClick={menuToggle} />
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
