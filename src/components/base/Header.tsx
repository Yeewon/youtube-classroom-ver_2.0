import styled from "@emotion/styled";
import { USER_INFO } from "../../constants/classroom";

const Title = styled.h2`
  font-weight: bold;
  text-align: center;
`;

const Header = () => {
  return <Title>π©π»βπ» {USER_INFO.name}μ μ νλΈ κ°μμ€ π¨π»βπ»</Title>;
};

export default Header;
