import Hole from "./hole";
import { useGame } from "../context/gameContext";

const GameScreen = () => {
  const { holes, score, reStart } = useGame();

  return (
    <>
      <header className="hole-header">
        <p>Score: {score} </p>
        <button onClick={() => reStart()}>Restart</button>
      </header>
      <div className="hole-grid">
        {holes.map((position) => (
          <Hole key={position} position={position} />
        ))}
      </div>
    </>
  );
};

export default GameScreen;
