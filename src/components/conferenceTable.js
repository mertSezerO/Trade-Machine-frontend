import React from 'react';
import TeamRow from './teamRow';

export default function ConferenceTable({ conferenceName, teams }) {
  const rows = teams.map((team) => (
    <TeamRow key={team.id} team={team} />
  ));

  return (
    <>
      <p>{conferenceName}</p>
      <div>{rows}</div>
    </>
  );
}
