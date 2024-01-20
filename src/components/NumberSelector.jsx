/* eslint-disable react/prop-types */
import styled from "styled-components";

export const NumberSelector = ({ selectedNumber, setSelectedNumber }) => {
  const arr = [1, 2, 3, 4, 5, 6];

  return (
    <NumberSelectorContainer className="">
      <div className="flex">
        {arr.map((val, idx) => {
          return (
            <Box
              isSelected={val === selectedNumber}
              key={idx}
              onClick={() => setSelectedNumber(val)}
            >
              {val}
            </Box>
          );
        })}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;

  .flex {
    display: flex;
    gap: 24px;
  }

  p {
    font-size: 24px;
    font-weight: 700;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${({ isSelected }) => (isSelected ? "black" : "white")};
  color: ${({ isSelected }) => (isSelected ? "white" : "black")};
`;
