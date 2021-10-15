import React from 'react';
import styled from  'styled-components'
import img from '../asset/board.png';
import google from '../asset/googlepng.png';
import fendar from '../asset/logo.png';
import Squarespace from '../asset/Squarespace.png';
import costco from '../asset/costco2.png';
import { BsArrowRight } from "react-icons/bs";

const Component2 = () => {

    return (
        <Container>
            <Wrapper>
                <TextSection>
                    <Title>It’s more than work. It’s a way of working together.</Title>
                    <Text>Start with a Trello board, lists, and cards. Customize and expand with more features as your teamwork grows. Manage projects, organize tasks, and build team spirit—all in one place.</Text>
                    <Button>Start doing <BsArrowRight /></Button>
                </TextSection>
                <ImageSection>
                    <Image src = {img} />
                </ImageSection>
                <IconSection>
                    <Text2>Join over 1,000,000 teams worldwide that are using Trello to get more done.</Text2>
                    <IconCard>
                        <Icons src ={google}/>
                        <Icons src ={fendar}/>
                        <Icons src ={ Squarespace}/>
                        <Icons src ={ costco} />
                        
                        
                    </IconCard>
                </IconSection>
                
                
            </Wrapper>
        </Container>
        
    )

}
export default Component2;
const Container = styled.div`
height: 100%;
width:100%; 
min-height:100vh;
`;
const Wrapper = styled.div`
background-color:#fff;
height: 100%;
width:100%;
display:flex;
flex-wrap:wrap;
flex-direction:column;
align-items:center;
padding-top:80px;

`;
const TextSection = styled.div`
width: 1000px;
display:flex;
flex-direction:column;
align-items:center;
color:#091e42;
line-height: 1.5;
line-spacing:1.5px;
`;
const Image = styled.img`
height:100%;
width:100%;
object-fit:cover;

`;
const ImageSection = styled.div`
width:1100px;
height:700px;
// background-color:wh;
`;
const IconSection = styled.div`
width:1100px;
display:flex;
flex-direction: column;
align-items:center;
text-align:center;
`;
const Title = styled.div`
font-size:40px;
font-weight:500;

`;
const Text = styled.div`
font-size:20px;
font-weight:400;
padding-top:30px;

`;
const Button = styled.button`
height:40px;
width:150px;
transition: 350ms;
border:2px solid;
border-color:blue;
border-radius:5px;
font-size: 20px;
margin: 40px 0px 40px 0px;
color:blue;
align-items:center;

:hover{
    background-color:blue;
    color:white;
}

`;
const Text2 = styled.div`
// width: 100%;
// background-color: red;
font-size:22px;
margin-top:25px;

`;
const IconCard = styled.div`
display:flex;
// justify-content:space-between;
`;
const Icons = styled.img`
margin-left: 30px;
width:150px;
height:40px;
// background-color: red;
margin-bottom: 50px;
margin-top:20px;
`;