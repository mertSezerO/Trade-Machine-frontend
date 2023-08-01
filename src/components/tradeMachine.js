import AddTeamTable from "./addTeam/addTeamTable";
import TradeTeamTable from "./trade/tradeTeamTable";

export default function TradeMachine() {
  return (
    <>
      <div id="machine">
        <AddTeamTable />
        <TradeTeamTable />
      </div>
    </>
  );
}
