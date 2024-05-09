import React from "react";
import BotSpecs from "./BotSpecs";
import SingleBot from "./SingleBot";

function BotCollection(props) {
  const { bots, setClickedBot } = props;

  const addToArmy = (bot) => {
    setClickedBot(bot);
  };

  return (
    <div className="ui four column grid">
      <div className="row">
        {bots.map((bot) => (
          <div
            key={bot.id} // Key should be on the outermost element inside map function
            onClick={() => {
              addToArmy(bot);
            }}
          >
            <SingleBot bot={bot} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
