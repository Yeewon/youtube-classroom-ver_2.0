import styled from "@emotion/styled";

interface Props {
  children: React.ReactNode;
}

const Button = styled.button``;

const FilterButton = ({ children }: Props) => {
  return <Button>{children}</Button>;
};

export default FilterButton;
