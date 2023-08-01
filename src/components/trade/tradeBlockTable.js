import { useContext } from "react";
import { TradeContext } from "../../tradeContext";
import PlayerRow from "./playerRow";

export default function TradeBlockTable({ teamId }) {
  const context = useContext(TradeContext);

  return (
    <div className="block">
      {context.tradePlayers.length > 0 &&
        context.tradePlayers
          .filter((player) => player.teamId !== teamId)
          .map((player) => <PlayerRow player={player} />)}
    </div>
  );
}
