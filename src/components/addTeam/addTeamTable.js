import React, { useState } from 'react';
import ConferenceTable from './conferenceTable';

export default function AddTeamTable({teamOnClick}) {
  const [toggle, setToggle] = useState(false);
  const [teamsList, setTeamsList] = useState([]);

  async function clickAddTeam() {
    setToggle(!toggle);
    if (!toggle) {
      try {
        const response = await fetch('http://localhost:3000/teams', {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        const { teams } = data;

        setTeamsList(teams); // Update the teamsList state with the fetched data
      } catch (error) {
        console.error('Error fetching teams:', error);
      }
    }
  }

  return (
    <>
      <button onClick={clickAddTeam}>Add Team</button>
      {toggle && (
        <div id="item-list">
          <ConferenceTable 
          conferenceName="East" 
          teams={teamsList.filter(team => team.inConference === 'East')} 
          teamOnClick={teamOnClick}/>
          <ConferenceTable 
          conferenceName="West" 
          teams={teamsList.filter(team => team.inConference === 'West')}
          teamOnClick={teamOnClick} />
        </div>
      )}
    </>
  );
}