import { styled } from "styled-components";

const Title = styled.div`
  width: 100%;
  height: 50px;
  text-align: center;
  font-size: 30px;
  color: white;
  font-weight: bold;
`;

const Header = () => {
  return (
    <>
      <Title>Header</Title>
    </>
  );
};

export default Header;
