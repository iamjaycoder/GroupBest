import React from "react";
import styled from "styled-components";
import Header from "./header";
import ThirdCOmponent from "../Mine";
import FeatureComponent from "../jay/FeaturesContent";
import CardSection from "../Mayowa/Component2";
import Hero from "../Bright/hero";
import Sliders from "../Bright/slider";
const Home = () => {
  const [changeHeader, setChangeHeader] = React.useState(false);

  const headerChange = () => {
    const heightOfScreen = window.scrollY;
    if (heightOfScreen >= 150) {
      setChangeHeader(true);
    } else {
      setChangeHeader(false);
    }
    console.log(heightOfScreen);
  };

  window.addEventListener("scroll", headerChange);
  return (
    <Container>
      <Header bg={changeHeader ? "bg" : ""} bs={changeHeader ? "bs" : ""} />
      <Hero />
      <CardSection />
      <FeatureComponent />
      <ThirdCOmponent />
      <Sliders />
    </Container>
  );
};

export default Home;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: #eeebfd;
`;
