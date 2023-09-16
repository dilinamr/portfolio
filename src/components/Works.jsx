import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
const Section = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url("/img/bgc.jpg");
  justify-content: space-between;
  scroll-snap-align: center;
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

export const Works = () => {
  return (
    <Section>
      <h1 className="title">CONNECT ME</h1>
      <Container>
        <div className="left">
          <div onClick={() => window.open("https://www.github.com")}>
            <h1 className="conect">
              <FontAwesomeIcon icon={faGithub} className="icon" />
              GIT HUB
            </h1>
          </div>
          <div onClick={() => window.open("mailto:dilinam91@gmail.com")}>
            <h1 className="conect">
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              GMAIL
            </h1>
          </div>
        </div>
        <div className="right">
          <div
            onClick={() => window.open("https:www.linkedin.com/in/dilin-am")}
          >
            <h1 className="conect">
              <FontAwesomeIcon icon={faLinkedin} className="icon" />
              LINKEDIN
            </h1>
          </div>
          <div
            onClick={() =>
              window.open("https://stackoverflow.com/users/20275331/dilin-am")
            }
          >
            <h1 className="conect">
              <FontAwesomeIcon icon={faStackOverflow} className="icon" />
              STACK OVERFLOW
            </h1>
          </div>
        </div>
      </Container>
    </Section>
  );
};
