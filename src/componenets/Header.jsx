import React from "react";
import { GrRestaurant } from "react-icons/gr";
import { BsFillSearchHeartFill } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import "./header.css";

import { Container } from "reactstrap";
const Header = () => {
  return (
    <header className="header">
      <Container>
        <div className="logo">
          <h2>
            <span>
              <GrRestaurant /> Master Chef Food
            </span>
            <div className="nav_menus">
              <ul className="nav_list">
                <li className="nav_item">
                  <a href="#">Home</a>
                </li>
                <li className="nav_item">
                  <a href="#">About</a>
                </li>
                <li className="nav_item">
                  <a href="#">Menu</a>
                </li>
                <li className="nav_item">
                  <a href="#">Recipes</a>
                </li>
                <li className="nav_item">
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </h2>
        </div>
        <div className="menu_right">
          <div className="custom_search">
            <input type="" placeholder="Saerch items here..."></input>
            <BsFillSearchHeartFill />
          </div>
        </div>
        <div className="mobile_menu">
          <AiOutlineMenu />
        </div>
      </Container>
    </header>
  );
};

export default Header;
