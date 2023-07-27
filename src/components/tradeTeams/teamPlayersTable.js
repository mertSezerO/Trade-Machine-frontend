import PlayerRow from "./playerRow";

export default function TeamPlayersTable({ team, players}) {
    players.forEach(player => {
        <PlayerRow player={player}/>
    });

    return (
        <>
            {players}
        </>
    )
}