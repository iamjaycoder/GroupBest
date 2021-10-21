import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>Trello</Logo>
        <Nav>
          <Bar> Log in </Bar>
          <Button>Sign up</Button>
        </Nav>
      </Wrapper>
    </Container>
    
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 100px;
  background: #eae6ff;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.div`
  width: 200px;
  height: 50px;
  object-fit: contain;
  margin-left: 20px;
  // background-color : red;
  font-size: 40px;
  color: #5a6480;
  letter-spacing: 5;
  font-weight: bold;

  :hover {
    cursor: pointer;
  }
`;
const Nav = styled.div`
  display: flex;
  margin-right: 20px;
  align-items: center;
`;
const Bar = styled.div`
  color: #3d9de8;
  // font-weight: bold;
  margin: 0 10px;
  font-size: 20px;

  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
const Button = styled.div`
  background-color: blue;
  width: 88px;
  height: 38px;
  border-radius: 4px;
  color: #f7ffff;
  font-size: 20px;
  display: flex;
  // align-items: center;
  items-align:center;
  justify-content: center;

  :hover {
    background-color: #0051cc;
    cursor: pointer;
  }
`;
