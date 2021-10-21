import styled from 'styled-components'
import Img from './asset/hero.png'
import Search from "./Mayowa/search";

const HeroContent = () => {
    return ( 
        <Container>
            <Wrapper>
                <ContentHead>
                <Content>
                Trello helps teams move work forward.
                </Content>
                <Sub>
                Collaborate, manage projects, and reach new productivity peaks. From high rises to the home office, the way your team works is unique—accomplish it all with Trello.
                </Sub>
                <Search />
                </ContentHead>
                <Image src={Img}/>
           </Wrapper>
        </Container>
     );
}
 
export default HeroContent;
const ContentHead = styled.div`
display:flex;
flex-direction:column;
margin:0 30px;
width:700px;
padding: 0 70px;
`
const Container = styled.div`
width: 100%;
height: 100%;
min-height: 100vh;
`;
const Wrapper = styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: space-around;
align-items: center;
`;

const Content = styled.div`
color: #000;
font-size: 45px;
font-family: Segoe UI;
font-weight: bold;
margin-bottom: 10px;
`;
const Sub = styled.div`
color: #000;
font-size: 20px;
font-family: Segoe UI;
`;

const Image = styled.img`
width:400px;
height:500px;
margin-top: 10px;
margin-right: 40px;
`;
