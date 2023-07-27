import { createContext } from 'react';

const TradeContext = createContext()
export default function TradeProvider({ children }) {
    // const [toggle, setToggle] = useState(false);
    // const [teamsList, setTeamsList] = useState([]);

    const state = {
        tradeTeams,
        setTradeTeams,
        toggle, 
        setToggle,
        teamsList, 
        setTeamsList
    };

    return <TradeContext.Provider value={state}>{children}</TradeContext.Provider>;
}