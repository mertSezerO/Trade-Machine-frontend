import { useState } from 'react';
import AddTeamTable from './addTeam/addTeamTable';
import TradeTeamTable from './tradeTeams/tradeTeamTable';

export default function TradeMachine() {

    return (
        <>
            <AddTeamTable/>
            <TradeTeamTable/>
        </>
    )
}