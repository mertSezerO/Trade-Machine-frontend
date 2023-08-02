import { useContext } from "react";
import { TradeContext } from "../../tradeContext";
import TradeBlockTable from "./tradeBlockTable";
import TeamPlayersTable from "./teamPlayersTable";

export default function TradeTeamTable() {
  const context = useContext(TradeContext);
  const teams = context.tradeTeams;

  //An onClick action handler will be added.
  return (
    <>
      <div id="trade">
        <div className="total-item-list">
          {teams.map((team) => (
            <div className="total-item-container">
              <TeamPlayersTable team={team} players={team.players} />
              <TradeBlockTable teamId={team.id} />
            </div>
          ))}
        </div>
        <div id="trade-button">
          <button>Try This Trade</button>
        </div>
      </div>
    </>
  );
}
