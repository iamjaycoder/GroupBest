import React from 'react'
import styled from "styled-components"
import Img from "./asset/keyholder.svg";
import img from "./asset/clock.svg";

const Mine = () => {
    return (
        <Container>
            <Wrapper>
                <Section>
                    <Image src={Img}/>
                    <Content>
                    <Title>See our pricing</Title>
                    <Desc>Whether you’re a team of 2 or 2,000, there’s a Trello tailor-made for your organization.</Desc>
                    <Button>Trello pricing</Button>
                    </Content>
                </Section>
                <Section1>
                    <Image src={img}/>
                    <Content>
                    <Title>Take a Trello tour</Title>
                    <Desc>Explore the world of boards and beyond in Trello. Dive deeper into our most popular features.</Desc>
                    <Button>Tour Trello</Button>
                    </Content>
                </Section1>
            </Wrapper>
        </Container>
    )
}

export default Mine

const Container = styled.div`
width: 100%;
height: 100%;
min-height: 50vh;
display: flex;
justify-content: center;
background: #FAFBFC;
}
`
const Wrapper = styled.div`
width: 85%;
height: 250px;
justify-content: space-between;
display: flex;
align-items: center;
border-top: 1px solid grey;
border-bottom: 1px solid grey;
margin: 50px 0;
`
const Section = styled.div`
width: 520px;
display: flex;

`
const Section1 = styled.div`
width: 550px;
display: flex;
`
const Content = styled.div`
display: flex;
flex-direction: column;
`
const Title = styled.div`
font-family: sans-serif;
font-size: 22px;
font-weight: 900;
margin-bottom: 15px;
`
const Button = styled.div`
width: 100px;
height: 35px;
border: 1px solid #0065FF;
outline: none;
border-radius: 4px;
color: #0065FF;
background-color: transparent;
font-size: 15px;
transition: all 400mms;
display: flex;
align-items: center;
justify-content: center;

:hover{
    cursor: pointer;
    color: #0065FF;
    background-color: #EDF5FF;
}

`
const Desc = styled.div`
font-family: sans-serif;
font-size: 20px;
margin-bottom: 15px;
line-height: 28px;
`
const Image = styled.img`
width: 280px;
height 180px;
object-fit: contain;
margin-right: 30px;

}
`