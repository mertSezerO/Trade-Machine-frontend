import { useContext } from "react";
import { TradeContext } from "../../tradeContext";
import TradeBlockTable from "./tradeBlockTable";
import TeamPlayersTable from "./teamPlayersTable";

export default function TradeTeamTable() {
  const context = useContext(TradeContext);
  const teams = context.tradeTeams;

  return (
    <>
      <div id="trade">
        {teams.map((team) => (
          <div className="total-item-container">
            <TeamPlayersTable team={team} players={team.players} />
            <TradeBlockTable teamId={team.id} />
          </div>
        ))}
      </div>
      <button>Try This Trade</button>
    </>
  );
}
