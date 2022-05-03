import styled from "@emotion/styled";

interface Props {
  children: React.ReactNode;
}

const ButtonContainer = styled.button`
  height: 36px;
  min-width: 64px;
  margin-left: 10px;
  padding: 0px 16px;
  background-color: rgb(239, 239, 239);
  border-radius: 4px;
  border-style: none;
  cursor: pointer;
`;

const Button = ({ children }: Props) => {
  return <ButtonContainer>{children}</ButtonContainer>;
};

export default Button;
