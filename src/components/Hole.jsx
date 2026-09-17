import { useGame } from "../context/gameContext";

const Hole = ({ position }) => {
  const { molePosition, hit } = useGame();
  const hasMole = position === molePosition;

  return (
    <div
      className={hasMole ? "hole mole" : "hole"}
      onClick={hasMole ? () => hit() : undefined}
    />
  );
};

export default Hole;
