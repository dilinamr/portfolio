import React from "react";
import styled from "styled-components";

const Section = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-between;
  scroll-snap-align: center;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 768px) {
    height: 100vh;
  }
`;
const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  display: flex;
  width: 1400px;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Tittle = styled.h1`
  font-size: 60px;
  margin-bottom: 5px;
  margin-top: 5px;
  @media only screen and (max-width: 768px) {
    font-size: 30px;
    margin: 0px;
  }
`;
const Whatwedo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Line = styled.img`
  height: 5px;
`;
const Subtitle = styled.h2`
  margin-top: 0px;
  margin-bottom: 0px;
  @media only screen and (max-width: 768px) {
  }
`;
const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
  @media only screen and (max-width: 768px) {
    font-size: 15px;
    margin: 0px;
    text-align: justify;
    line-height: 1.8;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;
export const Main = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Subtitle className="we">Work experiance</Subtitle>
          <Tittle>Beta Squirrel</Tittle>
          <Whatwedo>
            <Line src="/img/line.png" />
            <Subtitle className="dev">
              Full stack developer(2023-present)
            </Subtitle>
          </Whatwedo>
          <Desc>
            <ul>
              <li>REST API Development with PHP/Laravel</li>
              <li>API Documentation using Postman and Hoppscotch</li>
              <li>Relational Database Design with MySQL</li>
              <li>UI Design and Development</li>
              <li>UX Designing and Prototyping with Figma</li>
              <li>Git Branching and Pull Request Review Workflow</li>
              <li>Requirement Analysis and Documentation using Confluence</li>
              <li>Static Web Hosting using GitHub Pages and other providers</li>
              <li>Team Collaboration using Slack, Google Meet.</li>
            </ul>
          </Desc>
        </Left>
        <Right>
          <Subtitle className="wee">SKILLS</Subtitle>
          <Desc>
            <ul className="list">
              <li>HTML</li>
              <li>CSS</li>
              <li>JAVASCRIPT</li>
              <li>BOOTSTRAP</li>
              <li>GIT HUB</li>
              <li>FIGMA</li>
              <li>REACT</li>
              <li>NODE.JS</li>
              <li>MYSQL</li>
            </ul>
          </Desc>
        </Right>
      </Container>
    </Section>
  );
};
