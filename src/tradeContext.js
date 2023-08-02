import { createContext, useState } from "react";

const TradeContext = createContext();
export default function TradeProvider({ children }) {
  const [tradeTeams, setTradeTeams] = useState([]);
  const [tradePlayers, setTradePlayers] = useState([]);
  const [tradeOffered, setTradeOffered] = useState(false);

  const state = {
    tradeTeams,
    setTradeTeams,
    tradePlayers,
    setTradePlayers,
    tradeOffered,
    setTradeOffered,
  };

  return (
    <TradeContext.Provider value={state}>{children}</TradeContext.Provider>
  );
}

export { TradeContext };
