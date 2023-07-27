import { useContext } from "react";
import TradeProvider from "../../tradeContext";

export default function TeamRow({ team }) {
    const context = useContext(TradeProvider)

    function addTeamToTrade() {
        newTeams = [...context.tradeTeams, team]
        context.setTradeTeams(newTeams)
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

    return(
        <div className="item" onClick={addTeamToTrade}>
            <img src= {team.imageURL} alt={team.name}></img>
            <p>{team.name}</p>
        </div>
    )
}