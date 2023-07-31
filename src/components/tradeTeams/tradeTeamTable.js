import { useContext } from "react";
import TeamPlayersTable from "./teamPlayersTable";
import { TradeContext } from "../../tradeContext";

export default function TradeTeamTable() {
  const context = useContext(TradeContext);
  const teams = context.tradeTeams;

  return (
    <>
      <div id="trade">
        {teams.map((team) => (
          <TeamPlayersTable key={team.id} team={team} players={team.players} />
        ))}
      </div>
    </>
  );
}
