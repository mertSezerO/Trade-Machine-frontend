export default function TeamRow({team}) {
    return(
        <div className="item">
            <img src= {team.imageURL} alt={team.name}></img>
            <a href={team.id}>{team.name}</a>
        </div>
    )
}