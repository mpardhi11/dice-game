import styled from "styled-components";

// eslint-disable-next-line react/prop-types
export const TotalScore = ({ score = 0 }) => {
  return (
    <ScoreContainer className="">
      <h1>{score}</h1>
      <p>Total Score</p>
    </ScoreContainer>
  );
};

const ScoreContainer = styled.div`
  max-width: 200px;
  text-align: center;
  h1 {
    font-size: 100px;
    line-height: 100px;
  }
  p {
    font-size: 24px;
    font-weight: 500;
  }
`;
