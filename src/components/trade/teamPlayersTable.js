import PlayerRow from "./playerRow";

export default function TeamPlayersTable({ team, players }) {
  return (
    <div className="main-container">
      <section>{team.name}</section>
      <div className="trade-item-container">
        {players.map((player) => (
          <PlayerRow key={player.id} player={player} />
        ))}
      </div>
    </div>
  );
}
