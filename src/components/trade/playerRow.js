import { useContext } from "react";
import { TradeContext } from "../../tradeContext";

export default function PlayerRow({ player }) {
  const context = useContext(TradeContext);

  function addPlayerToTrade() {
    if (context.tradeTeams.length === 1) {
      return;
    }

    let newPlayers = [...context.tradePlayers];

    if (!newPlayers.includes(player)) {
      newPlayers.push(player);
    }

    if (context.tradeTeams.length === 2) {
      player.destination = context.tradeTeams.find(
        (team) => player.teamId !== team.id
      );
    } else {
    }
    context.setTradePlayers(newPlayers);
  }

  return (
    <div className="trade-item" onClick={addPlayerToTrade}>
      <img src={player.imageURL} alt={player.name} />
      <p>{player.name}</p>
      <p>{player.salary}</p>
    </div>
  );
}
