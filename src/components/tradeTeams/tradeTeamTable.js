import { useContext } from "react";
import TeamPlayersTable from "./teamPlayersTable";
import { TradeContext } from "../../tradeContext";

export default function TradeTeamTable() {
  const context = useContext(TradeContext);
  const teams = context.tradeTeams;

  return (
    <>
      {teams.map((team) => {
        <TeamPlayersTable team={team} players={team.players} />;
      })}
    </>
  );
}
