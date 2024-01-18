import { useState } from "react";
import { GamePlay } from "./components/GamePlay";
import { StartGame } from "./components/StartGame";

function App() {
  const [isGameStarted, setGameStarted] = useState(false);
  console.log("App ~ isGameStarted: 👆👆👆👆👆👆👆", isGameStarted);

  const toggleGamePlay = () => {
    setGameStarted((prev) => !prev);
  };
  return (
    <>{isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />}</>
  );
}

export default App;
