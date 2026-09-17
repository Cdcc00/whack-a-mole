import { useContext, createContext, useState } from "react";

// 1. create context
const GameContext = createContext();

// 2. create a provider for the context
export function GameProvider({ children }) {
  const holes = [];

  for (let i = 0; i < 9; i++) {
    holes.push(i);
  }

  const [score, setScore] = useState(0);

  const [molePosition, setMolePosition] = useState(
    Math.floor(Math.random() * 9),
  );

  const [isGame, setIsGame] = useState(false);

  function hit() {
    setScore(score + 1);
    setMolePosition(Math.floor(Math.random() * 9));
  }

  function reStart() {
    setScore(0);
    setMolePosition(Math.floor(Math.random() * 9));
    setIsGame(false);
  }

  // 2.5 Export here!!
  const value = { holes, molePosition, score, hit, reStart, isGame, setIsGame};
  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

// 3. create a hook for components to consume the context
export function useGame() {
  const context = useContext(GameContext);
  // guard case
  if (!context) {
    throw Error("useGame must be used within the Game Provider");
  }

  return context;
}
