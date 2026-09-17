import GameScreen from "./components/gameScreen";
import { useGame } from "./context/gameContext";

export default function App() {
  const { isGame, setIsGame } = useGame();
  return (
    <>
      <h1>Whack a Mole</h1>
      {isGame ? (
        <GameScreen />
      ) : (
        <div className="start-screen">
          <p>Welcome to Whack a Mole!</p>
          <p>Whack a mole to earn points.</p>
          <p>How many can you get?</p>
          <button onClick={()=>setIsGame(true)}> Play </button>
        </div>
      )}
    </>
  );
}
