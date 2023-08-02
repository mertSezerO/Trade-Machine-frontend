import { useContext } from "react";
import { TradeContext } from "../tradeContext";
import AddTeamTable from "./addTeam/addTeamTable";
import TradeTeamTable from "./tradeTeams/tradeTeamTable";
import TradeResult from "./tradeResult/tradeResult";

export default function TradeMachine() {
  const context = useContext(TradeContext);

  return !context.tradeOffered ? (
    <div id="machine">
      <AddTeamTable />
      <TradeTeamTable />
    </div>
  ) : (
    <>
      <TradeResult />
    </>
  );
}
