import React, { Fragment } from "react";
import {
  Header,
  Slider,
  PopularMenu,
  ChooseUs,
  MenuPack,
} from "../componenets";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <Slider />
      <PopularMenu />
      <ChooseUs />
      <MenuPack />
    </Fragment>
  );
};

export default Home;
