import TypeIt from "typeit-react";
import styled from "styled-components";

const WelcomeContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Welcome = () => {
  setTimeout(() => {
    document.querySelector("div").style.background = "black";
  }, 5000);
  return (
    <WelcomeContainer>
      <TypeIt
        getBeforeInit={(instance) => {
          instance
            .type("Welcome!")
            .pause(750)
            .delete(8)
            .pause(500)
            .type("My name is JeongWuk!")
            .pause(750)
            .delete(20)
            .type("Hope you enjoy~!💛");

          return instance;
        }}
        style={{ fontSize: "80px", fontWeight: "bold" }}
      />
    </WelcomeContainer>
  );
};

export default Welcome;
