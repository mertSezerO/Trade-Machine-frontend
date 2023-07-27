import { createContext } from 'react';

const TradeContext = createContext()
export default function TradeProvider({ children }) {

    const state = {
        tradeTeams,
        setTradeTeams,
    };

    // function addTeamToTrade(team) {
    //     newTeams = [...tradeTeams, team]
    //     setTradeTeams(newTeams)
    //     fetch('http://localhost:3000/teams/' + team.id, {
    //         headers: {
    //             'Content-Type': 'application/json',
    //         }
    //     })
    //     .then(players => {
    //         team.players = players
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     });
    // }

    // async function clickAddTeam() {
    //     setToggle(!toggle);
    //     if (!toggle) {
    //       try {
    //         const response = await fetch('http://localhost:3000/teams', {
    //           headers: {
    //             'Content-Type': 'application/json',
    //           }
    //         });
    
    //         if (!response.ok) {
    //           throw new Error('Network response was not ok');
    //         }
    
    //         const data = await response.json();
    //         const { teams } = data;
    
    //         setTeamsList(teams); // Update the teamsList state with the fetched data
    //       } catch (error) {
    //         console.error('Error fetching teams:', error);
    //       }
    //     }
    //   }

    return <TradeContext.Provider value={state}>{children}</TradeContext.Provider>;
}