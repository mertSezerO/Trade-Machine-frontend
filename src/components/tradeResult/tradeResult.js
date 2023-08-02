import { useContext } from "react";
import TeamPlayersTable from "../tradeTeams/teamPlayersTable";
import TradeMessage from "./tradeMessage";
import { TradeContext } from "../../tradeContext";

export default function TradeResult() {
  const context = useContext(TradeContext);
  const teams = context.tradeTeams;
  const players = context.tradePlayers;

  return (
    <div>
      <TradeMessage />
      <div className="total-item-list">
        {teams.map((team) => (
          <TeamPlayersTable
            team={team}
            players={players.filter((player) => player.destination === team)}
          />
        ))}
      </div>
    </div>
  );
}
