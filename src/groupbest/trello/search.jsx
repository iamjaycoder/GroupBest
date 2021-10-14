import React from "react";
import styled from "styled-components";

const Search = () => {
  return (
    <Container>
      <Searchsection>
        <Input Placeholder="Email" />
        <Button>Sign up-its free </Button>
      </Searchsection>
    </Container>
  );
};

export default Search;

const Container = styled.div``;

const Searchsection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Input = styled.input`
  width: 400px;
  height: 40px;
`;
const Button = styled.div`
  height: 40px;
  width: 150px;
  background-color: #0065ff;
  border-color: #0065ff;
  border-radius: px;
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
