import { useContext } from "react";
import { TradeContext } from "../../tradeContext";

export default function TeamRow({ team }) {
  const context = useContext(TradeContext);

  async function addTeamToTrade() {
    let newTeams = [...context.tradeTeams];
    if (!newTeams.includes(team)) {
      newTeams.push(team);
    }
    const response = await fetch("http://localhost:3000/teams/" + team.id, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    const { players } = data;
    team.players = players;
    context.setTradeTeams(newTeams);

    // .then((players) => {
    //   team.players = players;
    //   context.setTradeTeams(newTeams);
    // })
    // .catch((err) => {
    //   console.log(err);
    // });
  }

  return (
    <div className="item" onClick={addTeamToTrade}>
      <img src={team.imageURL} alt={team.name}></img>
      <p>{team.name}</p>
    </div>
  );
}
