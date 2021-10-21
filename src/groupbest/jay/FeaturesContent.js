import styled from 'styled-components'
import img from '../asset/view.svg'
import img1 from '../asset/card-back.svg'
import img2 from '../asset/automation.png'
import img3 from '../asset/power-ups.png'


const FeaturesContent = () => {
    return ( 
        <Container>
            <Wrapper>
                <Content>
                    <Title>Features to help your team succeed</Title>
                    <Para>Powering a productive team means using a powerful tool (and plenty of snacks).
                         From meetings and projects to events and goal setting,
                         Trello’s intuitive features give any team the ability to quickly set up and customize workflows for just about anything.</Para>
                </Content>
                <ContentHead>
                    <Image src={img}/>
                    <Content1>
                        <Preamble>CHOOSE A VIEW</Preamble>
                        <Title>The board is just the beginning</Title>
                        <Para1>Lists and cards are the building blocks of organizing work on a Trello board.
                             Grow from there with task assignments, timelines, productivity metrics, calendars, and more.</Para1>
                             <Sub>
                             <Sign>+</Sign>
                             <SubContent>Learn more</SubContent>
                             </Sub>
                    </Content1>
                </ContentHead>

                <ContentHead1>
                    <Image2 src={img1}/>
                    <Content2>
                        <Preamble>DIVE INTO THE DETAILS</Preamble>
                        <Title>Cards contain everything you need</Title>
                        <Para1>Trello cards are your portal to more organized work—where every single part of your task can be managed, tracked, and shared with teammates.
                             Open any card to uncover an ecosystem of checklists, due dates, attachments, conversations, and more.</Para1>
                             <Sub>
                             <Sign>+</Sign>
                             <SubContent>Learn more</SubContent>
                             </Sub>
                    </Content2>
                </ContentHead1>

                <ContentHead>
                    <Image src={img2}/>
                    <Content3>
                        <Preamble>MEET YOUR NEW BUTLER</Preamble>
                        <Title>No-code automation</Title>
                        <Para1>Let the robots do the work—so your team can focus on work that matters.
                             With Trello’s built-in automation, Butler, reduce the number of tedious tasks (and clicks) on your project board by harnessing the power of automation across your entire team.</Para1>
                             <Sub>
                             <Sign>+</Sign>
                             <SubContent>Learn more</SubContent>
                             </Sub>
                    </Content3>
                </ContentHead>

                <ContentHead1>
                    <Image2 src={img3}/>
                    <Content4>
                        <Preamble>POWER-UPS</Preamble>
                        <Title>Integrate top work tools</Title>
                        <Para1>Easily connect the apps your team already uses into your Trello workflow, or add a Power-Up that helps fine-tune one specific need.
                             With hundreds of Power-Ups available, your team’s workflow wishes are covered.</Para1>
                             <Sub>
                             <Sign>+</Sign>
                             <SubContent>Learn more</SubContent>
                             </Sub>
                    </Content4>
                </ContentHead1>
            </Wrapper>
        </Container>
     );
}
 
export default FeaturesContent;

const Container = styled.div`
width: 100%;
height: 100%;
min-height: 100vh;
`;
const Wrapper = styled.div`
width: 100%;
height: 100%;
min-height: 100vh;
background: #fff;
`;
const Content = styled.div`
width: 500px;
margin-top: 18px;
margin-left: 230px;
`;
const Title = styled.div`
font-weight: bold;
font-size: 38px;
margin-bottom: 20px;
font-family: Nunito;
opacity: 0.9;
`;
const Para = styled.div`
font-size: 22px;
margin-bottom: 22px;
font-family: Nunito;
`;
const Para1 = styled.div`
font-size: 22px;
color: gray;
margin-bottom: 22px;
font-family: Nunito;
`;
const ContentHead = styled.div`
width: 100%;
display: flex;
justify-content: space-evenly;
align-items: center;
margin-top: 100px;
flex-wrap: wrap;
`;
const ContentHead1 = styled.div`
width: 100%;
display: flex;
justify-content: space-evenly;
align-items: center;
margin-top: 100px;
flex-direction: row-reverse;
flex-wrap: wrap;
`;
const Image = styled.img`
width: 400px;
height: 350px;
position: relative;
left: 30px;
`;
const Image2 = styled.img`
width: 350px;
height: 300px;
position: relative;
right: 80px;
`;
const Preamble = styled.div`
font-weight: bold;
margin-bottom: 10px;
font-family: Nunito;
font-size: 14px;
`;
const Content1 = styled.div`
width: 590px;
position: relative;
right: 100px;
bottom: 36px;
`;
const Content2 = styled.div`
width: 590px;
position: relative;
left: 10px;
`;
const Content3 = styled.div`
width: 590px;
position: relative;
right: 100px;
bottom: 36px;
`;
const Content4 = styled.div`
width: 600px;
position: relative;
left: 10px;
`;
const Sub = styled.div`
display: flex;
align-items: center;
`;
const Sign = styled.div`
font-weight: bold;
font-size: 22px;
`;
const SubContent = styled.div`
margin-left: 10px;
font-weight: bold;
font-size: 22px;
transition: all 350ms;
font-family: Nunito;
opacity: 0.9;

:hover {
    text-decoration: underline;
    cursor: pointer;
}
`;

