import React from "react";
import styled from "styled-components";

const Section = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
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
const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;
const Tittle = styled.h1`
  font-size: 60px;
  @media only screen and (max-width: 768px) {
    font-size: 30px;
    margin: 0px;
  }
`;
const Whatwedo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  @media only screen and (max-width: 768px) {
    margin: 0px;
    gap: 0px;
  }
`;
const Line = styled.img`
  height: 5px;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const Subtitle = styled.h2``;
const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
  @media only screen and (max-width: 768px) {
    padding: 12px;
    font-size: 19px;
    margin: 0px;
    text-align: justify;
  }
`;
const Button = styled.button`
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
const Img = styled.img`
  width: 800px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;
  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;
const Right = styled.div`
  flex: 3;
  position: relative;
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

export const Profile = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Tittle>DILIN AM</Tittle>
          <Whatwedo>
            <Line src="/img/line.png" />
            <Subtitle>Full stack developer</Subtitle>
          </Whatwedo>
          <Desc>
            I am experienced in leveraging agile frameworks to provide a robust
            synopsis for high-level overviews. Iterative approaches to corporate
            strategy foster collaborative thinking to further the overall value
            proposition.
          </Desc>
          <Button>More</Button>
        </Left>
        <Right>
          {/* 3rdmodel */}
          <Img src="./assets/moon.png"></Img>
        </Right>
      </Container>
    </Section>
  );
};
