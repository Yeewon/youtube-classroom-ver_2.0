import styled from "@emotion/styled";
import { USER_INFO } from "../../constants/classroom";

const Title = styled.h2`
  font-weight: bold;
  text-align: center;
`;

const Header = () => {
  return <Title>👩🏻‍💻 {USER_INFO.name}의 유튜브 강의실 👨🏻‍💻</Title>;
};

export default Header;
