import { createContext, useState } from 'react';

const TradeContext = createContext()
export default function TradeProvider({ children }) {
    const [tradeTeams,setTradeTeams] = useState([])

    const state = {
        tradeTeams,
        setTradeTeams,
    };

    return <TradeContext.Provider value={state}>{children}</TradeContext.Provider>;
}

export {TradeContext};