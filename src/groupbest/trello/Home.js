import React from "react";
import styled from "styled-components";
import Header from "./header";
import HeroContent from "../HeroContent";
import Component2 from '../Mayowa/Component2'
const Home = () => {
  return (
    <Container>
      <Header />
      <HeroContent />
      <Component2 />
    </Container>
  );
};

export default Home;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: #eae6ff;
`;
