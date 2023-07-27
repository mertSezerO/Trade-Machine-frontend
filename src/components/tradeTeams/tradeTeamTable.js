import TeamPlayersTable from './teamPlayersTable';

export default function TradeTeamTable({teams}) {
    teams.forEach(team => {
        <TeamPlayersTable team={team} players={team.players}/>
    });
    return (
        <>
            {teams}
        </>
    )
}