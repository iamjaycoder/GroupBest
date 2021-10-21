import styled from 'styled-components';
import img from './asset/hero.png'




const HeroContent = () => {
    return ( 
        <Container>
            <Wrapper>
            <ContentHead>
                    <Content>
                        <Title>Trello helps teams move work forward.</Title>
                        <Para>Collaborate, manage projects, and reach new productivity peaks.
                             From high rises to the home office, the way your team works is unique—accomplish it all with Trello.</Para>
                             <Sub>
                             <Input placeholder="Email"/>
                             <Button>Sign Up-it's free!</Button>
                             </Sub>
                    </Content>
                    <Image src={img}/>
                </ContentHead>
           </Wrapper>
        </Container>
     );
}
 
export default HeroContent;

const Container = styled.div`
width: 100%;
height: 100%;
min-height: 100vh;
`;
const Wrapper = styled.div`
width: 100%;
height: 100%;
min-height:100vh
`;
const ContentHead = styled.div`
`;
const Title = styled.div`
width: 600px;
font-weight: bold;
font-size: 45px;
margin-bottom: 10px;
font-family: Nunito;
opacity: 0.9;
`;
const Content = styled.div`
width: 610px;
font-size: 22px;
margin-bottom: 20px;
font-family: Nunito;
`;
const Image = styled.div`
width: 450px;
height: 400px;
`;
const Para = styled.div`

`;
const Sub = styled.div`

`;
const Input = styled.input`

`;
const Button = styled.button`

`;
