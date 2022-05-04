import styled from "@emotion/styled";
import Button from "../base/Button";

const FilterButtonsContainer = styled.div`
  margin-right: 50px;
`;

const FilterButtons = () => {
  return (
    <FilterButtonsContainer>
      <Button>👁️ 볼 영상</Button>
      <Button>✅ 본 영상</Button>
      <Button>👍🏻 좋아요 한 영상</Button>
    </FilterButtonsContainer>
  );
};

export default FilterButtons;
