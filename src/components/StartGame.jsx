import styled from "styled-components";
import { Button } from "../style/Button";

// eslint-disable-next-line react/prop-types
export const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div className="">
        <img src="dices.png" alt="main dice image" />
      </div>
      <div className="main_heading">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now </Button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  margin: 0 auto;
  height: 100vh;
  align-items: center;

  .main_heading {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;
