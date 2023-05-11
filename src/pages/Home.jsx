import React, { Fragment } from "react";
import {
  Header,
  Slider,
  PopularMenu,
  ChooseUs,
  MenuPack,
  Testimonials,
  Download,
  Footer,
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
      <Footer />
    </Fragment>
  );
};

export default Home;
