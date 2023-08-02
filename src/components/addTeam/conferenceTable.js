import React from "react";
import TeamRow from "./teamRow";

export default function ConferenceTable({ conferenceName, teams }) {
  const rows = teams.map((team) => <TeamRow key={team.id} team={team} />);

  return (
    <div className="type-list">
      <p>{conferenceName}</p>
      <div>{rows}</div>
    </div>
  );
}
