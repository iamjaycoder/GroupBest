import React from "react";
import styled from "styled-components";

export const PeterScreen = () => {
  return (
    <Container>
      <Wrapper>
        <Card>Hello from Group Best</Card>
      </Wrapper>
    </Container>
  );
};

const Card = styled.div``;
const Wrapper = styled.div``;
const Container = styled.div`
  width: 100%;
  height: 50vh;
  background-color: lightblue;
`;
