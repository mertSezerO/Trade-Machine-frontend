export default function PlayerRow({player}) {
    return (
        <div className="trade-item">
            <img src={player.imageUrl} alt={player.name} />
            <p>{player.name}</p>
            <p>{player.salary}</p>
        </div>
    )
}