import { styled } from "styled-components";

const Title = styled.div`
  width: 100%;
  height: 70px;
  text-align: center;
  font-size: 70px;
  color: white;
  font-weight: bold;
  animation: show 5s;

  @keyframes show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Header = () => {
  return (
    <>
      <Title>Pokemon API</Title>
    </>
  );
};

export default Header;
