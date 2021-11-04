import React from "react";
import styled from "styled-components";
import appstore from "../asset/download.png";
import googlestore from "../asset/googlestore.png";
import logo from "../asset/logo.svg";
import { BsInstagram, BsGlobe, BsYoutube, BsTwitter } from "react-icons/bs";
import { GrFacebookOption } from "react-icons/gr";
import { TiSocialLinkedin } from "react-icons/ti";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <FooterHead>
          <Space /> <Text>Trello also works great on your smaller screen.</Text>
          <Img src={appstore} />
          <Img src={googlestore} style={{ marginRight: "100px" }} />
        </FooterHead>
        <FooterBody>
          <Icon src={logo} />
          <FooterContent>
            <Div>
              <ul>
                <h5>Get Started</h5>
                <li>Guide</li>
                <li>Templates</li>
                <li>Team solution</li>
                <li>Webinars</li>
                <li>Login</li>
              </ul>
            </Div>
            <Div>
              <ul>
                <h5>Must-Haves</h5>
                <li>Apps</li>
                <li>Automation</li>
                <li>Integrations</li>
                <li>Power-Ups</li>
                <li>Views</li>
              </ul>
            </Div>
            <Div>
              <ul>
                <h5>Level Up</h5>
                <li>Pricing</li>
                <li>Standard</li>
                <li>Premium</li>
                <li>Enterprise</li>
              </ul>
            </Div>
            <Div>
              <ul>
                <h5>Company</h5>
                <li>About</li>
                <li>Jobs</li>
                <li>Legal</li>
              </ul>
            </Div>
            <Div>
              <ul>
                <h5>Resources</h5>

                <li>Blog</li>
                <li>Developers</li>
                <li>Help</li>
              </ul>
            </Div>
          </FooterContent>
        </FooterBody>
        <FooterFooter>
          <Select>
            <BsGlobe /> <option value="English(Us)">English(Us)</option>
          </Select>
          <BottomText>
            <p>Cookie Settings</p>
            <p>Privacy Policy</p>
            <p>Terms</p>
            <p>Copyright © 2021 Atlassian</p>
          </BottomText>
          <IconHolder>
            <Icons>
              <BsInstagram />
            </Icons>
            <Icons>
              <GrFacebookOption />
            </Icons>
            <Icons>
              <TiSocialLinkedin />
            </Icons>
            <Icons>
              <BsTwitter />
            </Icons>
            <Icons>
              <BsYoutube />
            </Icons>
          </IconHolder>
        </FooterFooter>
      </Wrapper>
    </Container>
  );
};

export default Footer;
const Icons = styled.div`
  width: 30px;
  height: 30px;
  background: #344563;
  margin: 10px 20px;
  border-radius: 50%;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  transition: all 350ms;
  transform: scale(1);
  :hover {
    cursor: pointer;
    transform: scale(1.03);
  }
`;

const IconHolder = styled.div`
  display: flex;
`;
const BottomText = styled.div`
  display: flex;
  p {
    font-size: 14px;
    margin: 10px 20px;
    font-weight: bold;
    color: #344563;
    :hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;
const FooterFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 90%;
  margin: 0 40px;
`;
const Select = styled.select`
  border: none;
  background: transparent;
  cursor: pointer;
  font-weight: bold;
  color: #344563;
  option {
    font-size: 13px;
    background: red;
  }
`;

const Div = styled.div`
  margin: 30px;
  h5 {
    font-weight: bold;
    text-transform: uppercase;
    font-size: 17px;

    color: #344563;
  }
  li {
    list-style: none;
    color: #344563;

    :hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

const FooterContent = styled.div`
  display: flex;
`;

const Icon = styled.img`
  width: 200px;
  height: 50px;
  background: transparent;
  margin: 25px;
  object-fit: contain;
`;
const FooterBody = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;

  ::after {
    content: "";
    position: absolute;
    top: 200px;
    left: 0;
    width: 100%;
    height: 1px;
    background: lightgray;
  }
`;

const Img = styled.img`
  width: 200px;
  height: 50px;
  object-fit: cover;
`;
const Text = styled.div`
  font-size: 20px;
  padding: 0 20px;
`;
const Space = styled.div`
  flex: 1;
`;
const FooterHead = styled.div`
  display: flex;
  flex-direction: row;
  height: 60px;
  align-items: center;
  width: 100%;
  justify-content: center;
  position: relative;
  width: 100%;

  ::after {
    content: "";
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    height: 1px;
    background: lightgray;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 50vh;
  background: #f4f5f7;
`;
