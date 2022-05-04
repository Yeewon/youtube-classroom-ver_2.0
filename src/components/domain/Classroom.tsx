import styled from "@emotion/styled";
import FilterButtons from "../../components/domain/FilterButtons";
import Button from "../../components/base/Button";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Classroom = () => {
  return (
    <ButtonContainer>
      <FilterButtons />
      <Button>🔍 동영상 검색</Button>
    </ButtonContainer>
  );
};

export default Classroom;
