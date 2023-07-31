import { createContext, useState } from "react";

const TradeContext = createContext();
export default function TradeProvider({ children }) {
  const [tradeTeams, setTradeTeams] = useState([]);
  const [tradePlayers, setTradePlayers] = useState([]);

  const state = {
    tradeTeams,
    setTradeTeams,
    tradePlayers,
    setTradePlayers,
  };

  return (
    <TradeContext.Provider value={state}>{children}</TradeContext.Provider>
  );
}

export { TradeContext };
