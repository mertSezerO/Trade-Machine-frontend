import { useContext } from "react";
import { TradeContext } from "../../tradeContext";
import TradeBlockTable from "./tradeBlockTable";
import TeamPlayersTable from "./teamPlayersTable";
import { Link } from "react-router-dom";

export default function TradeTeamTable() {
  const context = useContext(TradeContext);
  const teams = context.tradeTeams;

  function tryTrade() {
    context.setTradeOffered(true);
  }

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
        {teams.length > 1 && (
          <div id="trade-button">
            <button onClick={tryTrade}>Try This Trade</button>
          </div>
        )}
      </div>
    </>
  );
}
