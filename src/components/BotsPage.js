import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import EnlistSection from "./EnlistSection";

function BotsPage() {
  //start here with your code for step one
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [clickedBot, setClickedBot] = useState(null);

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
      <EnlistSection
        clickedBot={clickedBot}
        setClickedBot={setClickedBot}
        army={army}
        setArmy={setArmy}
      />
      <BotCollection bots={bots} setClickedBot={setClickedBot} />
    </div>
  );
}

export default BotsPage;
