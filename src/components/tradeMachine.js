import { useState } from 'react';
import AddTeamTable from './addTeam/addTeamTable';
import TradeTeamTable from './tradeTeams/tradeTeamTable';

export default function TradeMachine() {
    const [tradeTeams, setTradeTeams] = useState()
    
    function addTeamToTrade(team) {
        newTeams = [...tradeTeams, team]
        setTradeTeams(newTeams)
        fetch('http://localhost:3000/teams/' + team.id, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(players => {
            team.players = players
        })
        .catch(err => {
            console.log(err)
        });
    }
    
    return (
        <>
            <AddTeamTable teamOnClick={addTeamToTrade}/>
            <TradeTeamTable/>
        </>
    )
}