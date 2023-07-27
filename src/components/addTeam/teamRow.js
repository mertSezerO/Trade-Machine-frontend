export default function TeamRow({ team,onClick }) {
    return(
        <div className="item" onClick={() => {onClick(team.id)}}>
            <img src= {team.imageURL} alt={team.name}></img>
            <p>{team.name}</p>
        </div>
    )
}