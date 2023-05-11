import React, { Fragment } from "react";
import {
  Header,
  Slider,
  PopularMenu,
  ChooseUs,
  MenuPack,
  Testimonials,
  Download,
} from "../componenets";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <Slider />
      <PopularMenu />
      <ChooseUs />
      <MenuPack />
      <Testimonials />
      <Download />
    </Fragment>
  );
};

export default Home;
