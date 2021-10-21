import React from "react";
import styled from "styled-components";
import img from "../asset/logo.svg";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Logo src={img}/>
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
  height: 70px;
  background: #eae6ff;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.img`
  width: 200px;
  height: 50px;
  object-fit: contain;
  margin-left: 20px;
  // background-color : red;
  // font-size: 40px;
  // color: #5a6480;
  // letter-spacing: 5;
  // font-weight: bold;

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
  color: #0052cc;
  // font-weight: bold
  margin: 0 20px;
  font-size: 15px;
  font-family: sans-serif;
  text-decoration: underline;


  :hover {
    cursor: pointer;
  }
`;
const Button = styled.div`
  background-color:#2F54FF;
  width: 85px;
  height: 35px;
  border-radius: 5px;
  color: #FFFFFA;
  font-size: 15px;
  font-family: sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    background-color: #0052cc;
    cursor: pointer;
  }
`;
