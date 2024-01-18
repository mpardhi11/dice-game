/* eslint-disable react/prop-types */
import { useState } from "react";
import { styled } from "styled-components";
import { OutLineButton } from "../style/Button";
import { Rules } from "./Rules";

export const RoleDice = ({ currentDice, roleDice, resetScore }) => {
  const [showRules, setRules] = useState(false);

  const onCLickHandler = () => {
    setRules(!showRules);
  };
  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img
          src={`/dice/dice_${currentDice}.png`}
          alt={`Dice ${currentDice}`}
        />
      </div>
      <p>Click on Dice to roll</p>

      <OutLineButton onClick={resetScore}>Reset Gam</OutLineButton>
      <OutLineButton onClick={onCLickHandler}>Show Rules</OutLineButton>
      {showRules ? <Rules /> : ""}
    </DiceContainer>
  );
};

const DiceContainer = styled.div`
  margin-top: 48px;

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;

  p {
    font-size: 24px;
    font-weight: 800;
  }

  .dice {
    cursor: pointer;
  }
`;
