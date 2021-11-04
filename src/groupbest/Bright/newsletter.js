import React from "react";
import styled from "styled-components";

const Newsletter = () => {
  return (
    <Container>
      <Wrapper>
        <Card>
          <Text>
            Sign up and get started with Trello today. A world of productive teamwork awaits!
          </Text>
          <InputHolder>
            <Input placeholder="Email" />
            <Button>Sign Up</Button>
          </InputHolder>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default Newsletter;
const Text = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: white;
  padding: 30px 0;
`;
const InputHolder = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  width: 300px;
  height: 40px;
  outline: none;
  border: 1px solid lightgray;
  border-radius: 5px;
  padding-left: 5px;
`;
const Button = styled.div`
  width: 130px;
  height: 40px;
  background: #2c8a5c;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin: 0 10px;
  color: white;
  font-weight: bold;
  font-size: 18px;

  :hover {
    cursor: pointer;
    background: #2a875b;
  }
`;

const Card = styled.div`
  width: 70%;
  height: 200px;
  background: linear-gradient(180deg, #4886ea, #4242a1);
  border-radius: 10px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 50vh;
`;
