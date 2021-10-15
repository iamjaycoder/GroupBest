import React from "react";
import styled from "styled-components";
import { AiOutlineLine } from "react-icons/ai";

const Search = () => {
  return (
    <Container>
      <Searchsection>
        <Input type="text" placeholder="Email" />
        <Button>Sign up <AiOutlineLine /> its free </Button>
      </Searchsection>
    </Container>
  );
};

export default Search;

const Container = styled.div`
width:100%;
`;

const Searchsection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 48px;
  // flex-wrap:wrap;
`;
const Input = styled.input`
  width: 100%;
  height: 45px;
  border-radius: 6px;
  margin-right: 20px;
//   border: 1px solid transparent;
  overflow: visible;
  box-sizing: border-box;
  background:color:#fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  color: #495057;
  

  ::placeholder{
      padding-left:10px;
      font-size:20px;
      
  }
`;
const Button = styled.div`
  height: 40px;
  width: 300px;
  background-color: #0065ff;
  border-color: #0065ff;
  border-radius: 5px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-top: 1px;
  transition: all 350ms;

  :hover{
    background-color: blue;
  }
`;