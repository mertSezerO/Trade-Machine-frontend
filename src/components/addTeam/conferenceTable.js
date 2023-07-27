import React from 'react';
import TeamRow from './teamRow';

export default function ConferenceTable({ conferenceName, teams, teamOnClick }) {
  const rows = teams.map((team) => (
    <TeamRow key={team.id} team={team} onClick={teamOnClick} />
  ));

  return (
    <>
      <p>{conferenceName}</p>
      <div>{rows}</div>
    </>
  );
}
