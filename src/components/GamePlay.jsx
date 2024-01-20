import { useState } from "react";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { styled } from "styled-components";
import { NumberSelector } from "./NumberSelector";
import { RoleDice } from "./RoleDice";
import { TotalScore } from "./TotalScore";

const showToast = (msg) => {
  toast.error(msg, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Slide,
  });
};

export const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  // const [, setErr] = useState("");

  const generateRandomNumber = () => {
    let previousNumber = null;
    let currentNumber = null;

    currentNumber = Math.floor(Math.random() * 6) + 1;

    // Ensure current number is not the same as the previous number
    while (currentNumber === previousNumber) {
      currentNumber = Math.floor(Math.random() * 6) + 1;
    }

    // Update the previous number for the next iteration
    previousNumber = currentNumber;
    // Update the previous number for the next iteration
    previousNumber = currentNumber;

    return currentNumber;
  };

  const roleDice = () => {
    if (!selectedNumber) {
      showToast("Please Select number first");
      return;
    }

    const randomNumber = generateRandomNumber();
    setCurrentDice(() => randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectedNumber(0);
  };

  const resetScore = () => {
    if (score === 0) {
      showToast("Score already 0");
    }
    setScore(0);
  };
  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RoleDice
        currentDice={currentDice}
        roleDice={roleDice}
        resetScore={resetScore}
      />

      <ToastContainer stacked />
    </MainContainer>
  );
};

const MainContainer = styled.div`
  margin: 0 auto;
  max-width: 1180px;
  display: flex;
  flex-direction: column;

  .top_section {
    display: flex;
    justify-content: space-between;
    margin-top: 70px;
  }
  .btn_grp {
    max-width: 220px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;
