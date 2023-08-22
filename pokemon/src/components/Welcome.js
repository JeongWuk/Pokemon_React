import TypeIt from "typeit-react";
import styled from "styled-components";

const WelcomeContainer = styled.div.attrs((props) => ({
  className: props.customClassName || "welcome",
}))`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @keyframes scaleUp {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(5);
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

const Welcome = () => {
  setTimeout(() => {
    const $div = document.querySelector(".welcome");
    $div.style.animation = "scaleUp 4s ease-in-out forwards, fadeIn 3s";
  }, 9500);
  setTimeout(() => {
    const $div = document.querySelector(".welcome");
    $div.style.display = "none";
  }, 12400);
  return (
    <WelcomeContainer>
      <TypeIt
        getBeforeInit={(instance) => {
          instance
            .type("Front-End Dev_Course")
            .pause(500)
            .empty()
            .type("4th generation")
            .pause(500)
            .empty()
            .type("👊Fighting👊")
            .pause(500)
            .empty()
            .type("💛Jeong Wuk💛");

          return instance;
        }}
        style={{ fontSize: "80px", fontWeight: "bold" }}
      />
    </WelcomeContainer>
  );
};

export default Welcome;
