import React, { useState } from "react";
import ConferenceTable from "./conferenceTable";

export default function AddTeamTable() {
  const [toggle, setToggle] = useState(false);
  const [teamsList, setTeamsList] = useState([]);

  async function clickAddTeam() {
    setToggle(!toggle);
    if (!toggle) {
      try {
        if (teamsList.length === 0) {
          const response = await fetch("http://localhost:3000/teams", {
            headers: {
              "Content-Type": "application/json",
            },
          });

          if (!response.ok) {
            throw new Error("Network response was not ok");
          }

          const data = await response.json();
          const { teams } = data;
          setTeamsList(teams);
        }
      } catch (error) {
        console.error("Error fetching teams:", error);
      }
    }
  }

  return (
    <div id="add">
      <button onClick={clickAddTeam}>Add Team</button>
      {toggle && (
        <div id="item-list">
          <ConferenceTable
            conferenceName="East"
            teams={teamsList.filter((team) => team.inConference === "East")}
          />
          <ConferenceTable
            conferenceName="West"
            teams={teamsList.filter((team) => team.inConference === "West")}
          />
        </div>
      )}
    </div>
  );
}
