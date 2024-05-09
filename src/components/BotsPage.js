import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState();

  useEffect(() => {
    getBots();
  }, []);

  const getBots = () => {
    fetch("http://localhost:3000/bots")
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setBots(result);
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <YourBotArmy army={army} setArmy={setArmy} />
      <BotCollection bots={bots} army={army} setArmy={setArmy} />
    </div>
  );
}

export default BotsPage;
